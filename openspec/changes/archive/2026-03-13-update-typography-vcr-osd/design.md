# Design: Typography Update to VCR OSD MONO

## Problem Description
The portfolio requires a unified typographic aesthetic for headings (`h1`-`h6`) and titles. Currently, all elements inherit `Montserrat Variable`. The goal is to install 'VCR OSD MONO' and apply it to all headings with minimal effort.

## Proposed Solution
Instead of modifying individual components, the change will be implemented at the global level in `src/layouts/Layout.astro`. This approach centralizes the font definition and ensures consistency.

### Font Installation
1.  The font file (`VCR_OSD_MONO.ttf`) is already in `public/fonts/`.
2.  Register the font in `Layout.astro`'s `<style is:global>`:
    ```css
    @font-face {
      font-family: "VCR OSD MONO";
      src: url("/fonts/VCR_OSD_MONO.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    ```
3.  Add a `<link rel="preload">` in the `<head>` of `Layout.astro` for `/fonts/VCR_OSD_MONO.ttf` to improve performance.

### Global CSS Implementation
To apply the font to all headings, a global CSS rule will be added:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: "VCR OSD MONO", monospace;
}
```
This rule will override the `*` selector defined earlier in the `Layout.astro` file.

### Tailwind Integration (Optional but recommended)
Modify `tailwind.config.mjs` to include the font family:
```js
theme: {
  extend: {
    fontFamily: {
      vcr: ["VCR OSD MONO", "monospace"],
    },
    // ...
  },
},
```
This allows using the font as a Tailwind utility (`font-vcr`) if needed in specific non-heading cases.

## Alternatives Considered
- **Inline Styling:** Rejected because it's not maintainable.
- **Tailwind Component Override (`@layer base`):** A viable alternative, but modifying the existing global styles in `Layout.astro` is more direct given the current project structure.
- **Google Fonts / CDN:** Rejected because 'VCR OSD MONO' is often a custom or locally-hosted font, and local hosting provides better privacy and performance.

## Trade-offs
- **Cumulative Layout Shift (CLS):** Monospace fonts vary significantly in width. Preloading is essential.
- **Rendering:** Some browsers might require `antialiasing` adjustments to make the pixel-style font look crisp.
