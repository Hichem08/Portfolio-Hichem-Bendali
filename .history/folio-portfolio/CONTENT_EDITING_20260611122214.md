# 📝 Content Editing Guide

This guide shows you how to edit your portfolio content without any coding.

---

## Where Everything is Stored

Your portfolio content is stored in **Supabase**, which is like a cloud database where you can edit everything visually.

- **Portfolio text and images**: Stored in the `sections` table
- **Portfolio images**: Uploaded to `portfolio-images` bucket
- **Your data**: Accessible 24/7 from anywhere with internet

---

## 📋 Editing Sections (Text & Content)

### Step 1: Open Supabase Dashboard

1. Go to https://supabase.com
2. Sign in with your account
3. Click your project name
4. You're in the dashboard!

### Step 2: Go to the Data Editor

1. On the left sidebar, click **Editor**
2. You'll see a list of tables
3. Click on **sections** table
4. You now see all 7 sections of your portfolio!

### Step 3: Edit a Section

Click on any row to edit that section. You can change:

| Field | What it is | Example |
|-------|-----------|---------|
| `title` | Section heading | "Cutter mobile app" |
| `type` | Section type | "portfolio", "services", etc. |
| `content` | Description text | "We're a full stack firm..." |
| `image_url` | Link to image | "https://supabase.co/storage/..." |
| `order` | Section position | 1, 2, 3, etc. |

### Step 4: Save Changes

Just click outside the field or press Enter - Supabase saves automatically!

### Step 5: See Changes on Your Portfolio

- Refresh your portfolio website (F5)
- The changes appear instantly!

---

## 🖼️ Managing Images

### Upload a New Image

1. Go to Supabase Dashboard
2. Click **Storage** (left sidebar)
3. Click **portfolio-images** bucket
4. Click **Upload File** button
5. Select an image from your computer
6. Wait for upload to complete ✅

### Get the Image URL

1. In the **portfolio-images** bucket
2. Find your uploaded image
3. Right-click on it → **Copy public URL**
4. Or click the image and copy the URL from the address bar

### Use the Image in a Section

1. Go to **Editor** → **sections** table
2. Find the section you want to add an image to
3. Click the `image_url` field
4. Paste the image URL you just copied
5. Press Enter to save
6. Refresh your portfolio - image appears!

### Example URL
```
https://your-project.supabase.co/storage/v1/object/public/portfolio-images/my-image.jpg
```

---

## ✏️ Editing Specific Sections

### Section 1: Hero / Companies Showcase

**Fields to Edit:**
- `title`: Main heading
- `content`: Subheading text
- `order`: Should be 1

**What It Shows:**
- Main welcome message
- 5 company logos
- "200+ companies trusted us" text

**How to Edit:**
Change the `title` and `content` fields directly in the database.

---

### Section 2: Portfolio Project

**Fields to Edit:**
- `title`: Project name (e.g., "Cutter mobile app")
- `content`: Project description
- `image_url`: Project screenshot/mockup
- `order`: Should be 2

**What It Shows:**
- Left side: Project name and description
- Right side: Large project image
- Tags like "FIGMA", "WEB DESIGN"

**How to Edit:**
1. Upload your project screenshot to Supabase Storage
2. Copy the image URL
3. Update the `image_url` field
4. Edit `title` and `content`

---

### Section 3: Services

**Fields to Edit:**
- `title`: "Featured Services" (or custom)
- `content`: Description
- `order`: Should be 3

**What It Shows:**
- 3 service cards:
  - UI/UX Design
  - Brand Strategy
  - SEO / Marketing
- Each with icon, tags, and description

**How to Edit:**
Edit the main content field. To customize the 3 services, you'll need to edit the code in `Section3.jsx` or we can add a database table for services later.

---

### Section 4: About You

**Fields to Edit:**
- `title`: "About" (or custom)
- `content`: Your bio/about text
- `image_url`: Your profile photo
- `order`: Should be 4

**What It Shows:**
- Left side: Your profile photo
- Right side: About text
- 2 stats: "100% Clients Satisfaction", "6700 Projects Completed"

**How to Edit:**
1. Upload your profile photo to Supabase Storage
2. Copy the image URL
3. Update the `image_url` field with your photo
4. Edit the `content` field with your bio
5. To change the stats, edit `Section4.jsx`

---

### Section 5: Your Profile

**Fields to Edit:**
- `title`: "Profile" (or custom)
- `content`: Profile message
- `image_url`: Full-body/headshot photo
- `order`: Should be 5

**What It Shows:**
- Left side: Your name and title
- Right side: Your profile photo
- Bottom: Email, phone, address contact info

**How to Edit:**
1. Upload a full-body or headshot photo
2. Copy the image URL
3. Update the `image_url` field
4. Edit section title and content
5. To change contact info, edit `Section5.jsx`

---

### Section 6: Blog / News

**Fields to Edit:**
- `title`: "Latest News" (or custom)
- `content`: Section description
- `order`: Should be 6

**What It Shows:**
- 3 blog post cards
- Each with image, title, author, date

**How to Edit:**
To customize blog posts, we can add a database table later. For now, edit the code in `Section6.jsx` or update the blog data directly.

---

### Section 7: Contact

**Fields to Edit:**
- `title`: "Get In Touch" (or custom)
- `content`: Contact info
- `order`: Should be 7

**What It Shows:**
- "Get In Touch" heading
- Email address (clickable)
- Phone number (clickable)
- Physical address

**How to Edit:**
Edit `Section7.jsx` to change email, phone, and address. Or update the `content` field with your contact info.

---

## 🎨 Customization Tips

### Change Company Logos (Section 1)

Edit `client/src/components/pages/Section1.jsx`:
```jsx
{['Rise', 'Hitech', 'Terra', 'hues', 'ther'].map((company, idx) => (
```
Replace these company names with your actual client names.

### Update Stats (Section 4)

Edit `client/src/components/pages/Section4.jsx`:
```jsx
<div className="stat-number">100%</div>
<div className="stat-label">CLIENTS SATISFACTION</div>
```
Change the numbers and labels to your stats.

### Add Services (Section 3)

Edit the services array in `client/src/components/pages/Section3.jsx`:
```jsx
{
  icon: '△',
  title: 'UI/UX Design',
  tags: ['UI/UX', 'DEVELOPMENT'],
  description: 'Your description here'
}
```

---

## 🚨 Common Mistakes to Avoid

### ❌ Broken Images

**Problem:** Image doesn't show on portfolio
**Solution:** 
- Check the image URL is complete and correct
- Make sure the bucket is **public** (not private)
- Try uploading again

### ❌ Empty Fields

**Problem:** Section appears blank
**Solution:**
- Make sure you filled in the `title` and `content` fields
- Don't leave required fields empty
- Refresh the portfolio page

### ❌ Wrong Section Order

**Problem:** Sections are in wrong order
**Solution:**
- Check the `order` field for each section
- Section 1 should have `order: 1`, Section 2 should have `order: 2`, etc.

### ❌ URL Errors

**Problem:** "Image URL not found" error
**Solution:**
- Copy the FULL URL from Supabase (not just the filename)
- URL should start with `https://`
- Check for extra spaces at the beginning or end

---

## 📱 Mobile View

Your portfolio is responsive and automatically adapts for:
- Desktop (1024px+): Full layout with side-by-side sections
- Tablet (768-1024px): 2-column grid layout
- Mobile (<768px): Single column, stacked sections

Content you edit will look good on all devices automatically!

---

## 🔄 Making Updates Live

### Local Updates (For Testing)

1. Edit content in Supabase
2. Go back to your browser with portfolio open
3. Press **F5** to refresh
4. Changes appear immediately!

### Deployed Updates (On the Web)

1. Edit content in Supabase
2. Your live website automatically fetches new data
3. Changes appear within seconds on the live site!

No need to rebuild or redeploy - Supabase connections are live!

---

## 📊 Database Backup

### Export Your Data

1. Go to Supabase Dashboard
2. Click **SQL Editor**
3. Run: `SELECT * FROM sections;`
4. Click **Download as CSV**
5. Your data is now backed up!

### Restore from Backup

If you accidentally delete something:
1. Go to Supabase Dashboard  
2. Click **Editor** → **sections**
3. Scroll down and click **Add row**
4. Manually re-enter the data (or paste from CSV)

Or contact Supabase support - they keep daily backups!

---

## 🆘 Need Help?

### Delete a Section

1. Go to **Editor** → **sections** table
2. Right-click on the section row
3. Click **Delete**
4. Confirm deletion
5. Section is removed from portfolio

### Add a New Section

1. In **Editor** → **sections** table
2. Click **Insert row** at the bottom
3. Fill in all fields:
   - title: "Your Title"
   - type: "portfolio" (or other)
   - content: "Your description"
   - image_url: "Your image URL"
   - order: "8" (or next number)
4. Done! New section appears in portfolio

### Reorder Sections

1. Edit the `order` field for each section
2. Set to 1, 2, 3, 4, 5, 6, 7, etc.
3. Sections display in that order automatically

---

## ✅ Checklist for First Edit

- [ ] Open Supabase Dashboard
- [ ] Go to Editor → sections table
- [ ] Edit Section 1 title
- [ ] Refresh portfolio website
- [ ] See changes appear
- [ ] Upload an image to portfolio-images bucket
- [ ] Copy image URL
- [ ] Paste URL into Section 2's image_url field
- [ ] Refresh portfolio
- [ ] See image appear
- [ ] You're all set! 🎉

---

**That's it! You can now manage your entire portfolio without touching any code.**

Questions? Check the main README.md or QUICKSTART.md files.
