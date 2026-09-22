# Vercel Deployment Guide - Image Loading Fix

## Problem
Local images from `/public` folder were not showing up on Vercel deployment.

## Changes Made

1. **Updated `next.config.ts`**:
   - Simplified image configuration (Vercel handles Next.js natively)
   - Removed unnecessary remote patterns
   - Kept only Sanity CDN in remote patterns

2. **Added `priority` prop to critical images**:
   - `/hero-home.png` in Hero component
   - `/cta-home.png` in CustomFastenersCTA component
   - `/hero-brands.jpeg` in UnbrakoFeature component

3. **Created `vercel.json`**:
   - Explicit framework configuration
   - Image domain configuration for Sanity

4. **Verified images are in git**:
   All images are tracked and will be deployed:
   - ✅ public/cta-home.png
   - ✅ public/hero-brands.jpeg
   - ✅ public/hero-home.png
   - ✅ public/logo.png

## Deployment Steps

### Option 1: Force Clear Cache and Redeploy
1. Push these changes:
   ```bash
   git add .
   git commit -m "Fix image loading on Vercel"
   git push
   ```

2. In Vercel Dashboard:
   - Go to your project
   - Settings → General → scroll down
   - Click "Clear Build Cache & Deploy"

### Option 2: Redeploy from Vercel Dashboard
1. Push changes (same as above)
2. Go to Deployments tab
3. Find the latest deployment
4. Click the three dots (•••) → "Redeploy"
5. Check "Use existing Build Cache" should be OFF

## Testing Locally

Test the production build locally:
```bash
npm run build
npm run start
```

Then visit http://localhost:3000 and check if images load.

## Common Issues & Solutions

### Issue 1: Images still not showing
**Solution**: Clear Vercel's build cache
- Vercel Dashboard → Settings → General → Clear Build Cache & Deploy

### Issue 2: 404 errors for images in browser console
**Solution**: Check that image paths match exactly:
- File names are case-sensitive in production
- Verify files exist in `/public` folder
- Check browser Network tab for the exact failing URL

### Issue 3: Old deployment is cached
**Solution**: 
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Or open in incognito/private window

### Issue 4: Images in git but not deploying
**Solution**: Ensure `.gitignore` doesn't exclude public folder:
```bash
git ls-files public/
```
Should list all your images.

## Image Paths Reference

In your components, images should be referenced as:
```tsx
<Image src="/hero-home.png" ... />      // ✅ Correct
<Image src="public/hero-home.png" ... />  // ❌ Wrong
<Image src="./hero-home.png" ... />       // ❌ Wrong
```

## Vercel Automatic Handling

Vercel automatically:
- Serves files from `/public` at the root path
- Optimizes images using Next.js Image Optimization
- Handles caching with proper headers

No additional configuration should be needed beyond what's in this repo.

## Still Having Issues?

1. Check the Vercel build logs for errors
2. Verify environment variables are set (if any)
3. Check that the build succeeded completely
4. Compare local build vs production URL paths
