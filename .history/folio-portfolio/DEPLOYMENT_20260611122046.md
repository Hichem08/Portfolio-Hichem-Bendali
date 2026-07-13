# 🚀 Deploying Your Folio Portfolio

This guide covers deploying both the frontend and backend to production.

## Frontend Deployment (React App)

### Option 1: Vercel (Recommended - Free & Easiest)

**Step 1: Build Your Project**
```powershell
cd client
npm run build
```
This creates a `dist` folder with your optimized portfolio.

**Step 2: Deploy to Vercel**
1. Go to https://vercel.com
2. Sign up with GitHub (easiest) or email
3. Click "Import Project"
4. Connect your GitHub repository (or select "Other")
5. Select the `folio-portfolio/client` as root directory
6. Click "Deploy"

Your portfolio is now live! Vercel will give you a URL.

### Option 2: Netlify

1. Go to https://netlify.com
2. Sign up and click "Add new site"
3. Select "Deploy manually"
4. Drag & drop the `client/dist` folder
5. Done! Your site is live.

### Option 3: Your Own Hosting (cPanel, Hosting, etc.)

1. Run `npm run build` in the `client` folder
2. Upload the contents of the `dist` folder to your hosting's public_html folder
3. Done!

## Backend Deployment (Express Server)

### Option 1: Railway.app (Recommended - Free Tier Available)

**Step 1: Create Railway Account**
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project"

**Step 2: Deploy**
1. Select "Deploy from GitHub repo"
2. Select your repository
3. Wait for auto-detection of Node.js project
4. Click "Deploy"

**Step 3: Configure Environment Variables**
1. Go to your Railway project
2. Click "Variables"
3. Add your Supabase credentials:
   - `SUPABASE_URL`: Your Supabase URL
   - `SUPABASE_SERVICE_ROLE_KEY`: Your service role key
   - `PORT`: 3000 (or whatever port Railway assigns)

**Step 4: Get Your API URL**
Your backend will be accessible at a URL like: `https://your-project.up.railway.app`

### Option 2: Render.com

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +"
4. Select "Web Service"
5. Connect your GitHub repo
6. Select the `folio-portfolio/server` as root directory
7. Add environment variables (same as Railway)
8. Click "Create Web Service"

### Option 3: Heroku (Paid Now)

Heroku used to be free but now charges. If you want to use it:
1. Go to https://heroku.com
2. Sign up and create a new app
3. Connect your GitHub repo
4. Add environment variables under "Config Vars"
5. Deploy

## Connecting Frontend to Backend

### Update API URL in Frontend

After deploying the backend, you need to tell the frontend where to find it.

**Step 1: Update Vite Config**
Open `client/vite.config.js` and change:

```javascript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'https://your-backend-url.railway.app', // ← Change this
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '/api')
    }
  }
}
```

**Step 2: Rebuild and Redeploy Frontend**
```powershell
cd client
npm run build
# Then redeploy to Vercel/Netlify/your hosting
```

## Verifying Your Deployment

1. Open your frontend URL in a browser
2. Open browser DevTools (F12)
3. Go to Network tab
4. Refresh the page
5. Look for API calls to `/api/sections`
6. They should return data (status 200)

If you see errors, check:
- Backend is running and accessible
- Supabase credentials are correct in backend environment
- Frontend is pointing to correct backend URL
- No CORS issues (should be handled in Express)

## Custom Domain

### For Vercel/Netlify:
1. Go to your project settings
2. Look for "Domains"
3. Add your custom domain
4. Update your domain's DNS settings (they provide instructions)

### For Railway/Render:
Similar process - check their documentation for domain setup.

## SSL Certificate

All modern hosting providers (Vercel, Netlify, Railway, Render) provide **free SSL certificates** automatically.

## Monitoring & Maintenance

### View Server Logs
**Railway:**
- Go to your project
- Click "Logs" tab
- See real-time server output

**Render:**
- Go to your service
- Scroll to "Recent Logs"

### Update Your Portfolio
1. Make changes locally
2. Commit to GitHub
3. Push to main/master branch
4. Your hosting service automatically redeploys!

This works for both frontend and backend (if deployed from GitHub).

## Security Checklist

Before going live:
- ✅ Never commit `.env` file
- ✅ Use `SUPABASE_SERVICE_ROLE_KEY` only on backend
- ✅ Enable HTTPS (automatic on Vercel/Netlify/Railway)
- ✅ Set strong passwords for Supabase
- ✅ Enable Row Level Security in Supabase (optional but recommended)
- ✅ Set up email backup for Supabase account

## Performance Optimization

### For Frontend:
- Vercel and Netlify automatically optimize your build
- They serve it from CDN globally (fast everywhere)
- Images are automatically optimized

### For Backend:
- Use caching headers for API responses
- Consider using Railway's global deployment options
- Monitor API response times in logs

## Cost Summary

**Free Tier:**
- Vercel Frontend: Free (5GB bandwidth/month)
- Railway Backend: Free ($5/month credit)
- Netlify Frontend: Free (100GB bandwidth/month)
- Supabase: Free tier (500MB storage, 1GB bandwidth)

**Paid Options:**
- Start paying only when you need more resources
- Typical portfolio costs < $1-10/month

---

## Troubleshooting Deployment

### Frontend won't load API data
1. Check backend server logs
2. Verify `.env` variables in backend
3. Check browser console for CORS errors
4. Make sure `vite.config.js` proxy is correct

### 404 errors on refresh
This is normal for React SPAs. Configure your hosting to:
- Serve `index.html` for all routes
- Vercel/Netlify do this automatically

### Images not loading
- Check Supabase storage bucket is public
- Verify image URLs in database
- Check storage bucket permissions

---

**Your portfolio is now live on the web! 🎉**
