# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Speats, an AI solutions company based in Switzerland. The site showcases AI services, intelligent agents, process automation, and features a specialized insurance broker AI tool called BrokerAI.

## Architecture & Technology Stack

- **Static HTML/CSS/JavaScript website** - No build system or framework
- **Multi-language support** with JavaScript-based i18n system
- **SEO optimized** with structured data, meta tags, and performance optimization
- **Mobile-first responsive design**
- **Performance optimized** with lazy loading, GZIP compression, and caching

## File Structure

### Core Files
- `index.html` - Main single-page application with all content
- `styles.css` / `styles.min.css` - CSS styling with CSS custom properties
- `script.js` / `script.min.js` - JavaScript functionality including i18n system
- `README.md` - Project documentation (currently minimal)

### Assets & Optimization
- `assets/` - Image assets including optimized WebP versions
- `assets/optimized/` - Performance-optimized images (WebP format)
- `.htaccess` - Apache configuration for compression, caching, and security
- `robots.txt` - SEO crawler directives
- `sitemap.xml` - XML sitemap for search engines

### Development Notes
- `z_notes.txt` - Contains deployment info (server path: /var/www/speats.ch)

## Key Features & Components

### Multi-language Support
- Languages: English (en), Italian (it), French (fr), German (de)
- Implemented via JavaScript translations object in `script.js`
- Auto-detects browser language with localStorage persistence
- Language switcher in navigation with globe icon

### Content Sections
1. **Hero Section** - Main value proposition with floating image animation
2. **Stats Section** - Key performance metrics with gradient background
3. **Services** - Three main AI solutions (Intelligent Agents, Process Automation, Custom AI Applications)
4. **BrokerAI Product** - Specialized insurance policy analysis tool
5. **Process/Approach** - 4-step methodology with visual timeline
6. **CTA & Contact** - Contact information and call-to-actions

### Performance Optimizations
- Lazy loading for images below the fold
- WebP image format with fallbacks
- GZIP compression via .htaccess
- Long-term caching for static assets
- Minimized CSS/JS versions available
- Critical CSS inlined in HTML

### SEO Features
- Structured data (JSON-LD) for business and FAQ information
- Open Graph and Twitter Card meta tags
- Semantic HTML with proper heading hierarchy
- Italian language content with localization
- Proper alt attributes and accessibility features

## Development Workflow

### No Build System
This project uses no build tools, package managers, or compilation steps. All files are served directly as static assets.

### Making Changes
1. Edit source files directly (`index.html`, `styles.css`, `script.js`)
2. For production, create minified versions if needed
3. Test responsive design across breakpoints (mobile: 768px, tablet: 1024px)
4. Validate multi-language functionality across all supported languages

### Deployment
- Server location: `/var/www/speats.ch`
- GitHub Actions configured for automatic deployment
- Repository: `https://github.com/gianmichelesiano/github-action-simple`

### Performance Testing
- Ensure images are optimized and use WebP when possible
- Verify GZIP compression is working via .htaccess
- Test lazy loading functionality
- Check Core Web Vitals compliance

## Code Style & Conventions

### CSS
- Uses CSS custom properties (CSS variables) for theming
- BEM-like naming for components
- Mobile-first responsive design approach
- Clamp() for fluid typography

### JavaScript
- Vanilla JavaScript (no frameworks)
- Event delegation for performance
- Intersection Observer API for lazy loading
- LocalStorage for user preferences

### HTML
- Semantic HTML5 structure
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA attributes for accessibility
- Schema.org structured data

## Important Notes

- The site is fully functional without JavaScript, but enhanced with progressive enhancement
- All translations are maintained in the large `translations` object in `script.js`
- Contact information and business details are hardcoded throughout
- BrokerAI is an external application linked at `https://dashboard.speats.ch/`
- The site uses Font Awesome icons loaded from CDN

## Common Tasks

### Adding New Content Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add translations for all 4 languages in the `translations` object
4. Update navigation if needed

### Updating Translations
1. Locate the `translations` object in `script.js`
2. Update all 4 language objects (en, it, fr, de) 
3. Test language switching functionality
4. Ensure consistent translation keys across languages

### Image Optimization
1. Place original images in `assets/`
2. Create WebP versions in `assets/optimized/`
3. Use `<picture>` elements with WebP + fallback
4. Add proper alt attributes for accessibility