# Design: Navigation Highlighting and Visibility Fix

## Technical Overview
The current navigation implementation is split between a `scroll` listener for the top state and an `IntersectionObserver` for the scroll spy. The design will focus on making both mechanisms more robust by using flexible selectors and cleaner CSS.

### 1. Active Link Selection
The `navItems` data defines `href` as `/#home`, `/#cv`, etc. (root-relative anchors).
- **The Problem**: `a[href^='#']` only matches links *starting* with `#`.
- **The Fix**: Use `a[href*='#']` (contains) for general selection and `a[href$='#${id}']` (ends with) for specific section targeting. This ensures that even if the base URL changes or is present, the anchor logic still works.

### 2. Logo and Container Layout
The `nav.scrolling .nav-logo` rule currently shrinks and fades the logo.
- **The Problem**: Branding is lost on scroll.
- **The Fix**: Remove the `width: 0`, `opacity: 0`, and `pointer-events: none` from `.nav-logo` in the `.scrolling` state. 
- **Container Adjustments**: Ensure `#nav-container` remains `justify-between` to keep the logo on the left and menu on the right.

### 3. Maintainability (Recommendations)
- **CSS Variables**: Define `--nav-active-color: white` in `Layout.astro` and use it in `nav.astro`.
- **Thresholds**: The `maxScroll` value in `nav.astro` (1000) should be considered a constant that represents the "peak" of the shrinking animation.
- **Mobile Adjustments**: The `body` padding for the bottom nav should be consolidated into a single CSS variable.

## Alternatives Considered
- **Changing `navItems` to relative anchors**: Changing `/#home` to `#home` would fix the script but could break navigation from other potential pages (like `cv.astro` if it becomes a separate sub-page). Keeping root-relative anchors is more robust for multi-page scaling.
- **Full JS Scroll Spy**: Replacing the `IntersectionObserver` with a single scroll listener. Rejected because `IntersectionObserver` is more performant for complex pages.
