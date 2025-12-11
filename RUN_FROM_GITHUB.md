# How to Run Your Project from GitHub

Two ways to run your React Bionote App from GitHub:

## Option 1: Deploy to GitHub Pages (Make It Live on the Web) 🌐

Make your site accessible online at a public URL.

### Step 1: Install GitHub Pages Plugin

Open terminal in VS Code (`` Ctrl+` ``) and run:

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts to your `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Update vite.config.js

Add the base path for GitHub Pages:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-bionote/',
})
```

**Important:** Replace `react-bionote` with your actual repository name!

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your repository: https://github.com/ViliaCrest/react-bionote
2. Click **Settings**
3. Scroll to **Pages** section
4. **Source:** Select "Deploy from a branch"
5. **Branch:** Select `gh-pages` and `/ (root)`
6. Click **Save**

### Step 6: Access Your Live Site

Your site will be available at:
- `https://viliacrest.github.io/react-bionote/`

**Note:** It may take 1-5 minutes to go live after deployment.

---

## Option 2: Clone and Run Locally (On Another Computer) 💻

Run the project on any computer by cloning from GitHub.

### Step 1: Clone the Repository

Open terminal/command prompt and run:

```bash
git clone https://github.com/ViliaCrest/react-bionote.git
```

### Step 2: Navigate to Project Folder

```bash
cd react-bionote
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the Development Server

```bash
npm run dev
```

### Step 5: Open in Browser

- Click the URL shown in terminal (usually `http://localhost:5173`)
- Or manually open: `http://localhost:5173`

---

## Quick Setup Script

I can help you set up GitHub Pages deployment. Would you like me to:

1. ✅ Update your `package.json` with deploy scripts
2. ✅ Update your `vite.config.js` with base path
3. ✅ Install gh-pages package
4. ✅ Deploy your site

Just let me know and I'll do it for you!

---

## Troubleshooting

### GitHub Pages Not Showing

- Wait 1-5 minutes after deployment
- Check repository Settings → Pages
- Make sure `gh-pages` branch exists
- Clear browser cache

### Clone Issues

- Make sure Git is installed: `git --version`
- Check repository URL is correct
- Ensure you have internet connection

### Build Errors

- Make sure Node.js is installed: `node --version`
- Run `npm install` first
- Check for any error messages

---

## Summary

**To Deploy (Make Live):**
```bash
npm install --save-dev gh-pages
# (Update package.json and vite.config.js)
npm run deploy
# Enable Pages in GitHub Settings
```

**To Clone and Run:**
```bash
git clone https://github.com/ViliaCrest/react-bionote.git
cd react-bionote
npm install
npm run dev
```

