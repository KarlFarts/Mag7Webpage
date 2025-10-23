# Mag7 Dashboard - Split Files

Your dashboard is now split into 3 clean files for easier editing!

## Files:
- **index.html** - Main HTML structure
- **style.css** - All styling
- **script.js** - All JavaScript functionality

## What to do:

1. **Delete or rename** `mag7-dashboard.html` in your repo
2. **Upload these 3 files** to your GitHub repo
3. **Create an `assets` folder** in your repo
4. **Add your images** to the assets folder:
   - skull_cash_logo.png (or whatever you want to use for the watermark)
   - Optional: company logos if you want to replace emojis

## File structure should look like:
```
/Mag7Webpage/
├── index.html
├── style.css
├── script.js
└── assets/
    └── skull_cash_logo.png
```

## To edit now:

**Change colors/spacing?** → Edit `style.css`  
**Change chart data?** → Edit `script.js`  
**Change content/text?** → Edit `index.html`

## Next steps:

1. Commit these files to GitHub
2. Make sure GitHub Pages is enabled and pointing to the root directory
3. Your site will be live at: `https://karlfarts.github.io/Mag7Webpage/`

## To add real logos:

In `index.html`, replace emojis like this:
```html
<!-- Before -->
<div class="button-icon">🍎</div>

<!-- After -->
<div class="button-icon"><img src="assets/apple-logo.png" style="width: 20px;"></div>
```

Much easier to manage now! 🚀
