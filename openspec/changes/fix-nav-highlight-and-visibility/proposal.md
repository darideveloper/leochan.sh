# Proposal: Fix Navigation Highlighting and Logo Visibility

## Problem
The navigation component (`src/components/nav.astro`) currently has three functional regressions:
1. **Highlighting Failure**: The active menu item highlight (scroll-spy) does not work because the JavaScript selectors (`a[href^='#']`) do not match the actual `navItems` data (`/#home`, `/#cv`, etc.).
2. **Logo Visibility**: The "NEKOCORP // L.A." logo is hidden via CSS when the user scrolls, but it should remain visible to maintain brand identity.
3. **Logo Link Inactivity**: The logo does not function as a link to return to the top of the page, even though it is wrapped in an `<a>` tag.

## Proposed Changes
1. **Update Selectors**: Modify the JavaScript selectors in `src/components/nav.astro` to use fuzzy matching (`[href*='#']`) or end-of-string matching (`[href$='#${id}']`) to correctly identify the active link.
2. **Restore Logo Visibility**: Update the logo (`.nav-logo`) to remain visible during scroll with a specific width of `90px` and `display: inline-block` to maintain brand identity in the scrolling state.
3. **Fix Logo Link**: Ensure the logo link correctly targets `#home` and is handled by the smooth-scroll logic.
4. **Refine Layout**: Adjust the `#nav-container` layout to maintain `justify-between` even when scrolling, ensuring the logo and menu items are correctly positioned.
4. **Global Styling Improvements**: Implement recommendations for maintainability:
    - Variable-ize the active highlight color.
    - Centralize mobile body padding logic.
    - Refine scroll thresholds for smoother transitions.

## Impact
- **User Experience**: Users will have clear visual feedback on their current location on the page.
- **Branding**: The brand identity remains visible throughout the browsing experience.
- **Maintainability**: Cleaner CSS and more robust JS selectors will reduce future regressions.
