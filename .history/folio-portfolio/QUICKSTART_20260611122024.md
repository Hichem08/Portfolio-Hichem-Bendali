# 🚀 Folio Portfolio - Quick Start Guide

## What You Get

A complete, modern portfolio website with:
- ✅ 7 full-page sections with smooth scrolling animations
- ✅ Fully editable content & images via Supabase
- ✅ Professional dark design (Folio-style)
- ✅ Responsive for all devices
- ✅ Admin panel for easy management
- ✅ Express API backend
- ✅ Zero database maintenance

## Installation (5 Minutes)

### 1️⃣ Clone / Download Project
You already have it! Located at: `h:\HICHEM\Portfolio\folio-portfolio`

### 2️⃣ Run Setup Script

**Option A - Windows Command Prompt:**
```cmd
cd h:\HICHEM\Portfolio\folio-portfolio
setup.bat
```

**Option B - PowerShell:**
```powershell
cd h:\HICHEM\Portfolio\folio-portfolio
.\setup.ps1
```

**Option C - Manual (if scripts don't work):**
```powershell
cd server
npm install

cd ../client
npm install
```

### 3️⃣ Set Up Supabase (Free Account)

1. Go to https://supabase.com
2. Click "Sign Up" and create an account (use Google or email)
3. Create a new project (any region works)
4. Wait for the project to initialize (2-3 minutes)

### 4️⃣ Get Your Credentials

1. In Supabase, click on your project name
2. Go to **Settings** (gear icon)
3. Click **API** (left sidebar)
4. Copy the **Project URL**
5. Scroll down and copy the **Service Role Key** (⚠️ not the anon key)

### 5️⃣ Configure Your Environment

1. Open `server/.env` file with a text editor
2. Paste your Supabase credentials:
```env
SUPABASE_URL=https://your-project-url.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-very-long-service-role-key
PORT=4000
```
3. Save the file

### 6️⃣ Create Database Tables

1. Back in Supabase, click **SQL Editor** (left sidebar)
2. Click **New Query**
3. Copy and paste this SQL:

```sql
CREATE TABLE sections (
  id BIGINT PRIMARY KEY DEFAULT (gen_random_bytes(8) || gen_random_bytes(8))::bigint,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  content TEXT,
  image_url TEXT,
  "order" INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO sections (title, type, content, image_url, "order") VALUES
('Hero Section', 'hero', 'We''re proud to work with a diverse range of companies.', NULL, 1),
('Portfolio Project 1', 'portfolio', 'Cutter mobile app project', NULL, 2),
('Services', 'services', 'Featured Services', NULL, 3),
('About', 'about', 'About me section', NULL, 4),
('Profile', 'profile', 'Profile section', NULL, 5),
('Blogs', 'blogs', 'Latest news and articles', NULL, 6),
('Contact', 'contact', 'Get in touch with us', NULL, 7);
```

4. Click **Run** button
5. Done! You should see "Success" message

### 7️⃣ Create Storage Bucket

1. In Supabase, click **Storage** (left sidebar)
2. Click **Create new bucket**
3. Name: `portfolio-images`
4. Uncheck "Private bucket" (make it public)
5. Click **Create bucket**

### 8️⃣ Start the Application

Open **2 PowerShell windows**:

**Window 1 - Start Backend Server:**
```powershell
cd h:\HICHEM\Portfolio\folio-portfolio\server
npm run dev
```
You should see: `✅ Portfolio server running on http://localhost:4000`

**Window 2 - Start Frontend:**
```powershell
cd h:\HICHEM\Portfolio\folio-portfolio\client
npm run dev
```
You should see a URL like: `http://localhost:5173` or `http://localhost:3000`

### 9️⃣ View Your Portfolio

Click the URL shown in Window 2 (or open it in your browser).

**You should see the complete portfolio with all 7 sections!**

---

## 📝 Now Let's Customize It

### Upload Your Images

1. Go to your Supabase project
2. Click **Storage** → **portfolio-images**
3. Click **Upload File**
4. Select your image
5. Wait for upload to complete
6. **Right-click the image** → **Copy public URL**

### Edit Content

1. Go to Supabase → **Editor** (left sidebar)
2. Click the **sections** table
3. Click on any section to edit
4. You can change:
   - `title` - The heading
   - `content` - The description
   - `image_url` - Paste your image URL here
5. Press Enter or click outside to save
6. **Refresh your portfolio website** - changes appear instantly!

### Edit Colors & Styling

1. Open `client/src/styles.css`
2. Find `#ff5722` (the orange accent color)
3. Replace with your color code (get colors at: https://htmlcolorcodes.com/)
4. The changes appear automatically in your browser

### Customize Text & Layout

Edit the section files in `client/src/components/pages/`:
- `Section1.jsx` - Companies/Hero
- `Section2.jsx` - Portfolio project
- `Section3.jsx` - Services
- `Section4.jsx` - About you
- `Section5.jsx` - Your profile
- `Section6.jsx` - Blog posts
- `Section7.jsx` - Contact info

---

## 🆘 Troubleshooting

### "Cannot find module 'react'"
- Run `npm install` in the `client` folder again

### "Error connecting to Supabase"
- Check your `.env` file in the `server` folder
- Make sure you copied the entire SUPABASE_URL and KEY (not truncated)
- Make sure there are no extra spaces

### "Port 4000 already in use"
- Change `PORT=4000` in `server/.env` to another number like `PORT=5000`
- Then update the API proxy in `client/vite.config.js` if needed

### "Images not showing"
- Make sure the Supabase bucket is **public** (not private)
- Check that you copied the full public URL
- Try clearing browser cache

### Server won't start
- Try: `npm install` again in the server folder
- Make sure Node.js is installed: `node -v`

---

## 📚 Helpful Resources

- **Supabase Docs**: https://supabase.com/docs
- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion
- **Color Picker**: https://htmlcolorcodes.com

---

## 🎉 You're All Set!

Your portfolio is now:
- ✅ Running locally
- ✅ Connected to Supabase
- ✅ Ready for customization
- ✅ Ready for deployment

**Next Steps:**
1. Upload your portfolio images
2. Edit the content in Supabase
3. Customize colors and styling
4. Deploy to the web (see DEPLOYMENT.md)

---

**Questions? Check README.md or server/README_SUPABASE.md for detailed docs.**
