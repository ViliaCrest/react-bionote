# GitHub Setup Guide

Complete guide to push your React Bionote project to GitHub.

## Prerequisites

- GitHub account (create one at [github.com](https://github.com) if you don't have one)
- Git installed on your computer
- Your project ready to push

## Step 1: Verify Git is Installed

Open terminal in VS Code (`` Ctrl+` ``) and check:

```bash
git --version
```

If Git is not installed, download it from: [git-scm.com](https://git-scm.com/download/win)

## Step 2: Create a GitHub Repository

1. **Go to GitHub:**
   - Visit [github.com](https://github.com)
   - Sign in to your account

2. **Create New Repository:**
   - Click the **"+"** icon in the top right
   - Select **"New repository"**

3. **Repository Settings:**
   - **Repository name:** `react-bionote-app` (or your preferred name)
   - **Description:** "Personal portfolio website built with React"
   - **Visibility:** Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **"Create repository"**

4. **Copy the Repository URL:**
   - After creating, GitHub will show you the repository URL
   - Copy it (it looks like: `https://github.com/yourusername/react-bionote-app.git`)

## Step 3: Initialize Git in Your Project

Open terminal in VS Code (`` Ctrl+` ``) and run these commands:

### 3.1 Initialize Git Repository

```bash
git init
```

### 3.2 Add All Files

```bash
git add .
```

### 3.3 Create Initial Commit

```bash
git commit -m "Initial commit: React Bionote App"
```

## Step 4: Connect to GitHub

### 4.1 Add Remote Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

**Example:**
```bash
git remote add origin https://github.com/viliacrestene/react-bionote-app.git
```

### 4.2 Verify Remote

Check if remote was added correctly:

```bash
git remote -v
```

You should see your repository URL listed.

## Step 5: Push to GitHub

### 5.1 Push to Main Branch

```bash
git branch -M main
git push -u origin main
```

### 5.2 Enter Credentials

- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your GitHub password)

## Step 6: Create Personal Access Token (If Needed)

If Git asks for authentication:

1. **Go to GitHub Settings:**
   - Click your profile picture → **Settings**
   - Scroll down to **Developer settings**
   - Click **Personal access tokens** → **Tokens (classic)**

2. **Generate New Token:**
   - Click **"Generate new token"** → **"Generate new token (classic)"**
   - **Note:** "React Project Access"
   - **Expiration:** Choose your preference
   - **Select scopes:** Check `repo` (all repo permissions)
   - Click **"Generate token"**

3. **Copy the Token:**
   - **IMPORTANT:** Copy the token immediately (you won't see it again)
   - Use this token as your password when pushing

## Step 7: Verify Upload

1. **Refresh your GitHub repository page**
2. **You should see all your files:**
   - app.jsx
   - Bionote.jsx
   - BionotePair.jsx
   - package.json
   - README.md
   - etc.

## Quick Command Reference

```bash
# Check Git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Check remote repository
git remote -v

# View commit history
git log
```

## Future Updates

After making changes to your code:

### 1. Check Status
```bash
git status
```

### 2. Add Changes
```bash
git add .
```

### 3. Commit Changes
```bash
git commit -m "Description of your changes"
```

### 4. Push to GitHub
```bash
git push
```

## VS Code Git Integration

You can also use VS Code's built-in Git features:

1. **Source Control Panel:**
   - Click the **Source Control** icon in the left sidebar (looks like a branch)
   - Or press `Ctrl+Shift+G`

2. **Stage Changes:**
   - Click the **"+"** next to files you want to commit
   - Or click **"+"** next to "Changes" to stage all

3. **Commit:**
   - Type a commit message in the box
   - Click the checkmark (✓) or press `Ctrl+Enter`

4. **Push:**
   - Click the **"..."** menu (three dots)
   - Select **"Push"**

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error: Authentication failed
- Make sure you're using a Personal Access Token, not your password
- Generate a new token if needed

### Want to change repository URL?
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
```

## Best Practices

✅ **Commit Often:** Make small, frequent commits
✅ **Clear Messages:** Write descriptive commit messages
✅ **Don't Commit node_modules:** Already in .gitignore
✅ **Update README:** Keep README.md updated with project info
✅ **Use Branches:** Create branches for new features

## Example Workflow

```bash
# 1. Make changes to your code
# 2. Check what changed
git status

# 3. Add changes
git add .

# 4. Commit with message
git commit -m "Added profile images and updated styling"

# 5. Push to GitHub
git push
```

## GitHub Pages (Optional - Deploy Your Site)

To make your site live on GitHub Pages:

1. **Go to repository Settings**
2. **Scroll to "Pages" section**
3. **Source:** Select "main" branch
4. **Folder:** Select "/ (root)"
5. **Click Save**
6. **Your site will be at:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

**Note:** For Vite projects, you may need to configure the base path. See Vite documentation for GitHub Pages setup.

## You're Done! 🎉

Your project is now on GitHub and ready to share!

