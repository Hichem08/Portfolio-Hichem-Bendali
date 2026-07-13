# 🆘 Troubleshooting Guide

Having issues? This guide covers the most common problems and solutions.

---

## Installation & Setup Issues

### Problem: "npm: command not found"

**Cause**: Node.js is not installed

**Solution**:
1. Go to https://nodejs.org
2. Download the LTS version (recommended)
3. Run the installer and follow steps
4. **Restart PowerShell** or Command Prompt
5. Try `npm -v` to verify installation

### Problem: Setup script won't run

**Solution A (PowerShell)**:
```powershell
cd h:\HICHEM\Portfolio\folio-portfolio
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\setup.ps1
```

**Solution B (Run manually)**:
```powershell
cd h:\HICHEM\Portfolio\folio-portfolio\server
npm install

cd ../client
npm install
```

### Problem: "Cannot find module 'react'"

**Cause**: Dependencies not installed

**Solution**:
```powershell
cd client
npm install --force
```

### Problem: Port already in use

**Error**: "Address already in use :::4000"

**Solution**:
1. Find what's using port 4000:
```powershell
netstat -ano | findstr :4000
```

2. Either:
   - Change the port in `server/.env`: `PORT=5001`
   - Or kill the process using that port

---

## Supabase Connection Issues

### Problem: "Error: SUPABASE_URL is not defined"

**Cause**: `.env` file not configured

**Solution**:
1. Open `server/.env`
2. Make sure it has:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-very-long-key
PORT=4000
```
3. Save the file
4. Restart the server: `npm run dev`

### Problem: "Invalid API key"

**Cause**: Copied the wrong key from Supabase

**Solution**:
1. Go to Supabase Dashboard
2. Click **Settings → API**
3. Copy the **Service Role Key** (NOT the anon key)
4. It should be ~40 characters long
5. Paste into `server/.env`
6. Restart server

### Problem: "Cannot fetch /api/sections"

**Cause**: Server not running or unreachable

**Solution**:
1. Check server is running: `npm run dev` in server folder
2. Look for message: `✅ Portfolio server running on http://localhost:4000`
3. If not, fix any error messages shown
4. Try accessing: `http://localhost:4000/health` in browser
5. Should show: `{"status":"ok",...}`

### Problem: "Database table doesn't exist"

**Cause**: SQL wasn't executed in Supabase

**Solution**:
1. Go to Supabase Dashboard
2. Click **SQL Editor**
3. Click **New Query**
4. Copy SQL from `server/README_SUPABASE.md`
5. Paste into editor
6. Click **Run**
7. Wait for "Success" message

---

## Frontend Issues

### Problem: Portfolio shows "Loading..." forever

**Cause**: Can't reach API server

**Solution**:
1. Check server is running: `npm run dev` in server folder
2. Make sure `.env` is configured
3. Check browser console (F12) for error messages
4. Verify `vite.config.js` has correct proxy:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:4000',
    ...
  }
}
```

### Problem: "Error: Failed to fetch sections"

**Cause**: API returned an error

**Solution**:
1. Check server logs - what error is shown?
2. Common causes:
   - Supabase credentials wrong
   - Database table not created
   - Server crashed

3. Try:
```powershell
curl http://localhost:4000/api/sections
```
Should return JSON array of sections.

### Problem: Images not showing

**Cause**: Image URL is broken or bucket is private

**Solution**:
1. Check the image URL in Supabase
2. Go to **Storage → portfolio-images**
3. Click the bucket settings
4. Make sure it's **Public** (not Private)
5. Try accessing the image URL directly in browser
6. Should download or display the image

### Problem: Styling looks broken

**Cause**: CSS file not loading

**Solution**:
1. Check browser console (F12)
2. Look for CSS file errors
3. Try: `npm run dev` in client folder again
4. Clear browser cache: Ctrl+Shift+Delete
5. Hard refresh: Ctrl+Shift+R

---

## Performance Issues

### Problem: Portfolio loads slowly

**Cause**: Large images or network issues

**Solution**:
1. Compress images before uploading:
   - Use: https://tinypng.com
   - Or: https://imagecompressor.com
2. Use smaller file sizes (< 1MB each)
3. Make sure images are properly sized

### Problem: Animations are jerky/laggy

**Cause**: Too many animations or old computer

**Solution**:
1. This is usually normal on slower computers
2. Try closing other programs
3. Or reduce animation duration in code:
   - Edit: `client/src/components/pages/Section*.jsx`
   - Find: `transition={{ duration: 0.6 }}`
   - Change to: `transition={{ duration: 0.3 }}`

---

## Database Issues

### Problem: Can't edit sections in Supabase

**Cause**: Permission or connection issue

**Solution**:
1. Refresh the page
2. Sign out and sign back in
3. Check your internet connection
4. Try a different browser
5. Wait a few minutes (Supabase might be updating)

### Problem: Changes don't appear on portfolio

**Cause**: Browser not fetching new data

**Solution**:
1. Hard refresh portfolio: Ctrl+Shift+R
2. Or clear cache: Ctrl+Shift+Delete
3. Wait 5 seconds and refresh again
4. Server needs to fetch from Supabase

### Problem: "Row Level Security" error

**Cause**: RLS is enabled but not configured

**Solution A (Easy)**: Disable RLS for public access
1. Go to Supabase → **Authentication → Policies**
2. Click the table
3. Click **Disable RLS** for that table

**Solution B (Secure)**: Create public read policy
1. In Supabase, create a policy:
```sql
CREATE POLICY "Public read" ON sections
  FOR SELECT USING (true);
```

---

## Deployment Issues

### Problem: Frontend won't deploy to Vercel

**Cause**: Build fails

**Solution**:
1. Try building locally:
```powershell
cd client
npm run build
```
2. Check for build errors
3. Common issues:
   - ESLint errors (warnings treated as errors)
   - Missing dependencies
   - TypeScript errors

4. Fix errors, then redeploy

### Problem: Backend won't deploy to Railway/Render

**Cause**: Missing environment variables

**Solution**:
1. Go to your Railway/Render project
2. Click **Variables** or **Config**
3. Make sure you added:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `PORT`
4. Restart the deployment

### Problem: Live site can't reach backend

**Cause**: Frontend pointing to wrong backend URL

**Solution**:
1. Update `client/vite.config.js`:
```javascript
target: 'https://your-backend-url.railway.app'
```
2. Rebuild and redeploy frontend
3. Check browser console for API errors
4. Backend URL should be: `https://your-api-domain.com`

---

## Browser-Specific Issues

### Chrome Problems

**Issue**: Blank page
- Clear cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R

**Issue**: Animations stutter
- Close other tabs
- Check Task Manager for CPU usage

### Firefox Problems

**Issue**: Can't connect to localhost
- Check firewall settings
- Try: `http://127.0.0.1:3000` instead

### Safari Problems

**Issue**: Mixed content warning
- Not a problem for localhost
- On HTTPS sites, ensure API is also HTTPS

---

## Network Issues

### Problem: "Cannot reach localhost"

**Cause**: Firewall blocking connection

**Solution**:
1. Whitelist Node.js in Windows Firewall
2. Or disable temporarily to test
3. Or use: `http://127.0.0.1:3000` instead of `localhost`

### Problem: SSL certificate error

**Cause**: HTTPS issue (only on production)

**Solution**:
- Localhost doesn't need SSL
- On production, use Vercel/Netlify/Railway - they handle SSL

---

## Email & Contact Issues

### Problem: Contact form doesn't send emails

**Cause**: Not implemented yet

**Solution**:
- Currently, form doesn't send emails
- To add email:
  1. Use SendGrid API
  2. Or use Firebase email
  3. Or use Supabase email
- We can add this later if needed

---

## Debug Checklist

When something breaks, check in this order:

- [ ] Servers are running (`npm run dev` in both folders)
- [ ] `.env` is configured with Supabase credentials
- [ ] Supabase database table exists
- [ ] Supabase storage bucket exists and is public
- [ ] Browser console shows no errors (F12)
- [ ] Network tab shows API requests (F12)
- [ ] Can curl the API: `curl http://localhost:4000/api/sections`
- [ ] Database has sample data (check in Supabase Editor)
- [ ] Images are uploaded and have valid URLs

---

## Getting Help

### Check These First:
1. **README.md** - Main documentation
2. **QUICKSTART.md** - Setup guide
3. **CONTENT_EDITING.md** - How to edit content
4. **This file** - Troubleshooting

### Check Logs:
1. Server console for backend errors
2. Browser console (F12) for frontend errors
3. Supabase logs for database errors

### Search Online:
- Google the error message
- Check Stack Overflow
- Check specific tool docs:
  - React: https://react.dev
  - Supabase: https://supabase.com/docs
  - Express: https://expressjs.com

### As Last Resort:
- Save error screenshot
- List steps to reproduce
- Check if it's a known issue
- Ask in community forums or GitHub issues

---

## Prevention Tips

To avoid issues in the future:

1. **Keep notes** of your Supabase project details
2. **Backup your data** regularly (export CSV)
3. **Use version control** (Git) to track changes
4. **Test locally** before deploying
5. **Monitor logs** regularly
6. **Keep software updated** (npm packages)

Update packages:
```powershell
npm update
```

Check for security issues:
```powershell
npm audit
```

---

## Still Stuck?

1. **Restart everything**:
   - Close servers
   - Close browser
   - Open new terminals
   - Run `npm run dev` again

2. **Start fresh**:
   - Delete `node_modules` folder
   - Run `npm install` again

3. **Reset Supabase**:
   - Go to Settings → Reset project
   - Recreate tables from SQL
   - Re-upload images

4. **Check internet connection**:
   - Sometimes a simple reconnect fixes things

5. **Ask for help**:
   - Share the error message
   - Describe what you did
   - Share relevant code

---

**Most issues are solved by restarting or checking .env file!**

Good luck! 🍀
