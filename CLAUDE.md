# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby.js (v2) static site for Camp Laurelwood, integrated with Sanity CMS for content management and deployed on Netlify.

## Common Development Commands

### Development
```bash
npm run dev          # Start development server (clears cache first)
npm run clean-cache  # Clear Gatsby cache manually
```

### Build & Deployment
```bash
npm run build        # Build production site
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run format       # Format code with prettier-eslint
```

## Architecture & Key Patterns

### Content Management
- **Sanity CMS Integration**: Content is sourced from Sanity via `gatsby-source-sanity` plugin
- **GraphQL Queries**: Use `graphql` tagged templates for data fetching
- **Portable Text**: Content from Sanity uses Portable Text format, rendered with custom serializers in `/src/components/serializers/`

### Page Generation
- **Dynamic Pages**: Created in `gatsby-node.js` using `createPage` API
  - Blog posts: `/blog/{slug}` using `src/templates/blog-post.js`
  - Generic pages: `/{slug}` using `src/templates/generic-page.js`
- **Static Pages**: Defined in `src/pages/`

### Styling System
- **Theme UI**: CSS-in-JS with theme configuration in `src/gatsby-plugin-theme-ui/`
- **sx prop**: Use for inline styles that reference theme values
- **Theme Structure**: Modular files for colors, typography, buttons, etc.

### Component Patterns
- **Layout Wrapper**: All pages wrapped with `src/components/layout.js`
- **SEO Component**: Use `src/components/seo.js` for meta tags
- **Context Provider**: Global state in `src/context/index.js` for alerts and mobile nav

### Image Handling
- **Gatsby Image**: Use `gatsby-image` for optimized images
- **Sanity Images**: Use `src/lib/image-url.js` helper for Sanity CDN images

## Environment Configuration
- **Environment Files**: `.env.development` and `.env.production`
- **Key Variables**:
  - `GATSBY_SANITY_PROJECT_ID`: Sanity project ID
  - `GATSBY_SANITY_DATASET`: Sanity dataset (usually 'production')
  - `SANITY_READ_TOKEN`: Required for authenticated Sanity queries

## Code Standards
- **ESLint**: Standard JS style guide
- **No semicolons**: Following Standard JS
- **Object spacing**: No spaces in object braces `{key: value}`
- **React props**: PropTypes are disabled in ESLint config

## Important Notes
- **No Test Framework**: Currently no tests implemented
- **Two Header Versions**: `header/` and `header2/` directories exist - `header2/` appears to be the active version
- **Modified Files**: Many files show as modified in git status - check git diff before making changes
- **External Links**: Some navigation items link to external services (CampInTouch, donation forms)