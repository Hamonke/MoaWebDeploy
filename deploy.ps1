# PowerShell script for deploying to GitHub Pages

# Navigate to the business template directory
Set-Location -Path .\business-template

# Install dependencies 
npm install

# Build the site
npm run build

# Move to parent directory
Set-Location -Path ..

# Initialize git repository if not already initialized
if (-not (Test-Path -Path ".git")) {
  git init
  git branch -M main
}

# Add remote if not already added
$remotes = git remote
if ($remotes -notcontains "origin") {
  git remote add origin https://github.com/Hamonke/MoaWebDeploy.git
}

# Create .gitignore if it doesn't exist
if (-not (Test-Path -Path ".gitignore")) {
  "node_modules" | Out-File -FilePath ".gitignore"
  "*.log" | Out-File -FilePath ".gitignore" -Append
}

# Create .github directory if it doesn't exist
if (-not (Test-Path -Path ".github\workflows")) {
  New-Item -Path ".github\workflows" -ItemType Directory -Force
}

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push -u origin main

Write-Host "Pushed to GitHub. GitHub Actions will automatically deploy your site."
Write-Host "Your site will be available at: https://hamonke.github.io/MoaWebDeploy/" 