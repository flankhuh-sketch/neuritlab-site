# NEURIT LAB · 느릿연구소

Official website: https://neuritlab.com/

## Structure and deployment

Framework-free static HTML/CSS, published by the existing GitHub Pages setup from the repository root. `CNAME` preserves the custom domain. No runtime JavaScript or third-party dependencies are required.

- `index.html`: brand homepage, product, philosophy, contact and policy links
- `styles.css`: responsive styling, keyboard focus and reduced-motion support
- `assets/`: optimized WebP product UI examples and SVG favicon
- `scripts/build.mjs`: dependency-free production packaging and local reference validation

Run `npm run build` with Node.js 22 or later. The resulting `dist/` contains the same production files; GitHub Pages can continue serving the root as before. No deployment setting changes are needed.

## Preserved URLs

- `https://neuritlab.com/`
- `https://plant-backend-720347906835.asia-east1.run.app/legal/privacy`
- `https://plant-backend-720347906835.asia-east1.run.app/legal/terms`
- Original support email: `mailto:flankhuh@gmail.com`

Brand contact: `mailto:contact@neuritlab.com`. Google Play is shown as upcoming until a public listing is available. Product screenshots use example portfolio data, not customer data. Add future products as sibling articles inside `#work`.
