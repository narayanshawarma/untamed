# Deployment Guide for Untamed.co.in

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   cd /Users/narayansharma/Downloads/untamed
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name? **untamed** (or press enter)
   - Directory? **./** (press enter)
   - Want to override settings? **N**

4. **Set Environment Variable:**
   ```bash
   vercel env add GEMINI_API_KEY
   ```
   Paste your Gemini API key when prompted, and select "Production"

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard (Easiest for beginners)

1. **Create a GitHub repository for your project:**
   ```bash
   cd /Users/narayansharma/Downloads/untamed
   git init
   git add .
   git commit -m "Initial commit"
   ```
   
   Then create a repo on GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/untamed.git
   git branch -M main
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com) and sign up/login** (use GitHub)

3. **Click "Add New Project"**

4. **Import your GitHub repository** (untamed)

5. **Configure your project:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (should auto-detect)
   - Output Directory: `dist` (should auto-detect)
   - Install Command: `npm install` (should auto-detect)

6. **Add Environment Variable:**
   - Click "Environment Variables"
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key
   - Select all environments (Production, Preview, Development)

7. **Click "Deploy"**

8. **Wait for deployment to complete** (~2-3 minutes)

---

## 🌐 Connect Your Custom Domain (untamed.co.in)

### Step 1: Add Domain to Vercel

1. Go to your project in Vercel Dashboard
2. Click on **Settings** → **Domains**
3. Add your domain: `untamed.co.in`
4. Also add: `www.untamed.co.in` (optional but recommended)

### Step 2: Configure DNS Records

Vercel will provide you with DNS records. You need to add these to your domain registrar:

#### For Root Domain (untamed.co.in):

**Option A: Using A Record** (if your DNS supports ANAME/ALIAS):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto or 3600
```

**Option B: Using CNAME** (if Option A doesn't work):
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

#### For www subdomain (www.untamed.co.in):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

### Step 3: Update DNS at Your Registrar

1. **Login to your domain registrar** (where you bought untamed.co.in - likely GoDaddy, Namecheap, Google Domains, etc.)

2. **Find DNS Management/DNS Settings**

3. **Add the DNS records** as shown above

4. **Save changes**

5. **Wait for propagation** (5 minutes to 48 hours, usually ~1 hour)

### Step 4: Verify in Vercel

1. Go back to Vercel Dashboard → Domains
2. Wait for the status to change to "Valid Configuration"
3. Once verified, your site will be live at `untamed.co.in`!

---

## 🔄 Alternative: Deploy to Netlify

If you prefer Netlify:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Set Environment Variables:**
   - Go to Netlify Dashboard
   - Site Settings → Environment Variables
   - Add `GEMINI_API_KEY`

5. **Add Custom Domain:**
   - Domain Settings → Add custom domain
   - Follow same DNS configuration as Vercel

---

## 🔧 Troubleshooting

### Environment Variables Not Working?
Make sure your `.env.local` file has:
```
GEMINI_API_KEY=your_actual_api_key_here
```

And that you've added it to Vercel/Netlify dashboard.

### Domain Not Working?
- Check DNS propagation: https://dnschecker.org
- Verify DNS records are correct
- Wait up to 48 hours for full propagation
- Make sure there are no conflicting DNS records

### Build Fails?
Check that all dependencies are in `package.json` and not just in `node_modules`.

---

## 📝 Important Notes

1. **Never commit `.env.local`** - It's in `.gitignore`, keep it that way
2. **Always set environment variables** in hosting platform dashboard
3. **DNS changes take time** - Be patient
4. **HTTPS is automatic** on Vercel/Netlify - no configuration needed

---

## 🎉 Post-Deployment

Once deployed, your site will be available at:
- **Vercel URL**: `https://untamed.vercel.app` (or similar)
- **Your Domain**: `https://untamed.co.in`

Vercel provides:
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for branches
- ✅ Zero configuration
- ✅ 100% free for personal projects


