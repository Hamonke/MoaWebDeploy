#!/bin/bash

# Exit on error
set -e

# Navigate to the business template directory
cd business-template

# Install dependencies 
npm install

# Build the site
npm run build

# Move to parent directory
cd ..

# Initialize git repository if not already initialized
if [ ! -d .git ]; then
  git init
  git branch -M main
fi

# Add remote if not already added
if ! git remote | grep -q origin; then
  git remote add origin https://github.com/Hamonke/MoaWebDeploy.git
fi

# Create .gitignore if it doesn't exist
if [ ! -f .gitignore ]; then
  echo "node_modules" > .gitignore
  echo "*.log" >> .gitignore
fi

# Add GitHub directory to ensure it's not ignored
touch .github/.gitkeep

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push -u origin main

echo "Pushed to GitHub. GitHub Actions will automatically deploy your site."
echo "Your site will be available at: https://hamonke.github.io/MoaWebDeploy/" 