# Bruk Gebregziabher - Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" and select your repository
4. Vercel will auto-detect Next.js and deploy
5. Add your custom domain in Vercel's dashboard

### Option 2: Netlify
1. Run `npm run build` locally
2. The `out` folder contains your static site
3. Drag and drop `out` folder to Netlify, or connect your GitHub repo

### Option 3: GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to the `out` folder (after running `npm run build`)

## Customization

### Update Your Information
Edit `src/data/portfolio.js` to update:
- Personal details (name, email, location)
- Work experience
- Projects
- Publications
- Skills
- Education

### Styling
- Colors: Edit `tailwind.config.js` and `src/app/globals.css`
- Fonts: Change the Google Fonts import in `globals.css`
- Layout: Modify components in `src/app/page.js`

### Add Your Resume
Place your resume PDF in the `public` folder as `CV_Bruk_Gebregziabher.pdf`

## Project Structure

```
portfolio/
├── public/                 # Static assets (images, resume PDF)
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles & Tailwind
│   │   ├── layout.js      # Root layout with metadata
│   │   └── page.js        # Main page with all sections
│   └── data/
│       └── portfolio.js   # Your portfolio data
├── next.config.js         # Next.js config (static export)
├── tailwind.config.js     # Tailwind configuration
└── package.json
```

## Features

- Responsive design (mobile-first)
- Dark theme with accent color
- Smooth animations
- SEO optimized with meta tags
- Static export for easy hosting
- No external dependencies for icons

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: CSS animations + Framer Motion (optional)
- **Deployment**: Static export compatible

## License

MIT License - feel free to use this template for your own portfolio.
