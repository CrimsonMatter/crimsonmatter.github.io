# CRIMSON MATTER AI CONSULTANTS Website

A professional website for CRIMSON MATTER AI CONSULTANTS, featuring a modern design with metallic blue color scheme matching the company logo.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Professional design with smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript for performance
- **Accessibility**: Keyboard navigation and screen reader friendly
- **GitHub Pages Ready**: Configured for easy deployment on GitHub Pages

## Content Sections

- **Home Page**: Hero section with your motto, mission statement, comprehensive services list, and value proposition
- **About Section**: Your professional background, AI expertise, and creative approach
- **AI Course Section**: Placeholder for your upcoming AI training course with detailed course outline
- **Contact Section**: Email, YouTube, and Facebook links with prominent call-to-action

## File Structure

```
crimson-matter-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── logo.png           # Company logo
└── README.md          # This file
```

## Deployment Instructions for GitHub Pages

### Important Notes Before Deployment

**Logo Display Issue:**
If the logo doesn't display properly when viewing locally, this is normal. The logo will display correctly once uploaded to GitHub Pages. The issue occurs because browsers have security restrictions when loading local files. When you upload to GitHub Pages, the logo will work perfectly.

**Email Links:**
When you click "Schedule Free Consultation" or email links, your computer will try to open your default email application (like Outlook, Mail, etc.). This is the intended behavior - it will automatically create a new email addressed to crimsonmattergames@gmail.com. If you don't have an email client set up, you can manually copy the email address and use your preferred email service.

### Method 1: Using GitHub Desktop (Recommended for you)

1. **Create a new repository on GitHub:**
   - Go to GitHub.com and create a new repository
   - Name it something like `crimson-matter-website` or `ai-consultants-site`
   - Make sure it's set to **Public** (required for free GitHub Pages)
   - Don't initialize with README, .gitignore, or license

2. **Clone the repository using GitHub Desktop:**
   - Open GitHub Desktop
   - Click "Clone a repository from the Internet"
   - Select your new repository and choose a local folder

3. **Copy website files:**
   - Copy all files from this folder (`index.html`, `styles.css`, `script.js`, `logo.png`, `README.md`) into your cloned repository folder

4. **Commit and push:**
   - In GitHub Desktop, you'll see all the new files
   - Add a commit message like "Initial website deployment"
   - Click "Commit to main"
   - Click "Push origin" to upload to GitHub

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub.com
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

6. **Access your website:**
   - GitHub will provide a URL like: `https://yourusername.github.io/repository-name`
   - It may take a few minutes to become available

### Method 2: Using Git Command Line

If you prefer using Git commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website deployment"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 5-6 from Method 1 to enable GitHub Pages.

## Customization

### Updating Content
- Edit `index.html` to modify text content
- Update contact information in the Contact section
- Add or remove services in the Services section

### Styling Changes
- Modify `styles.css` to change colors, fonts, or layout
- The color scheme uses CSS custom properties (variables) for easy updates
- Main colors are defined in the `:root` section of the CSS

### Adding New Pages
- Create new HTML files following the same structure as `index.html`
- Update navigation links in all pages
- Ensure consistent styling across all pages

## Browser Compatibility

This website is compatible with:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Optimized images and assets
- Minified CSS and JavaScript (can be further optimized for production)
- Efficient loading with proper resource prioritization

## Support

For any issues or questions about the website:
- Check the GitHub repository issues
- Contact CRIMSON MATTER AI CONSULTANTS at crimsonmattergames@gmail.com

## License

© 2025 CRIMSON MATTER AI CONSULTANTS. All rights reserved.

---

**Note**: This website is optimized for GitHub Pages hosting and includes all necessary files for immediate deployment.

