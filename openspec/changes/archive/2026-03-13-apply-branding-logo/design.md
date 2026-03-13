# Design: Site Branding Integration

## Logo Placement Strategy

### 1. Navigation Header
The logo should be added to the navigation bar (`src/components/nav.astro`).
- **Placement**: To the left of the navigation menu items on desktop (`md:flex`).
- **Styling**: Maintain a consistent height (e.g., `h-8` or `h-10`) to match the navigation bar's vertical rhythm.
- **Interactivity**: Clicking the logo should redirect the user to the homepage (`#home`).

### 2. Footer
The logo should be prominently featured in the footer (`src/components/footer.astro`).
- **Placement**: Above the social media icons or at the top of the first column.
- **Styling**: Larger size (e.g., `h-12`) to reinforce branding at the end of the user's experience.

### 3. Metadata & SEO
The logo will be the primary visual asset for SEO and social sharing in `src/layouts/Layout.astro`.
- **Favicon**: Maintain the existing `/favicon.png` for the site icon.
- **OpenGraph**: Update `og:image` to use the high-resolution logo.
- **Structured Data**: The `Person` schema's `image` property will now point to the branding logo.

## Asset Considerations
- **Format**: `logo-leochan.png` (assumed high-res PNG).
- **Optimization**: The `img` tags will use `loading="lazy"` where appropriate (footer), while the navigation logo will be eager-loaded for immediate visual impact.
- **Alt Text**: Always provide descriptive alt text (e.g., "Oscar Hernandez Logo") for accessibility.
