# Tasks: Fix Navigation Highlighting and Logo Visibility

## 1. Thematic Refactor
- [x] Define `--nav-active-color` and `--mobile-nav-height` in `src/layouts/Layout.astro`.
- [x] Update `src/layouts/Layout.astro` and `src/components/nav.astro` to use `--mobile-nav-height` for `body` padding.

## 2. Fix Highlighting Logic
- [x] Update JavaScript selectors in `src/components/nav.astro` from `a[href^="#"]` to `a[href*="#"]`.
- [x] Update `IntersectionObserver` section targeting to use `a[href$="#${id}"]`.
- [x] Update `updateNav` to use matching selectors for root-relative anchors.

## 3. Restore Logo Visibility and Functionality
- [x] Remove the CSS block in `src/components/nav.astro` that sets `width: 0`, `opacity: 0`, and `pointer-events: none` on `.nav-logo` when in `.scrolling` state.
- [x] Ensure `nav.scrolling #nav-container` maintains `justify-content: space-between`.
- [x] Verify that the logo `<a>` tag targets `#home` and is included in the updated smooth-scroll selector.

## 4. Validation
- [x] Verify highlighting on desktop (scroll spy).
- [x] Verify logo visibility on desktop scroll.
- [x] Verify logo link functionality (smooth scroll to top).
- [x] Verify mobile navigation active highlight.
- [x] Verify smooth scroll functionality (ensure click works with root-relative anchors).
