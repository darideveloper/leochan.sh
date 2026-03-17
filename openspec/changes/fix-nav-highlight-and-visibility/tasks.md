# Tasks: Fix Navigation Highlighting and Logo Visibility

## 1. Thematic Refactor
- [ ] Define `--nav-active-color` and `--mobile-nav-height` in `src/layouts/Layout.astro`.
- [ ] Update `src/layouts/Layout.astro` and `src/components/nav.astro` to use `--mobile-nav-height` for `body` padding.

## 2. Fix Highlighting Logic
- [ ] Update JavaScript selectors in `src/components/nav.astro` from `a[href^="#"]` to `a[href*="#"]`.
- [ ] Update `IntersectionObserver` section targeting to use `a[href$="#${id}"]`.
- [ ] Update `updateNav` to use matching selectors for root-relative anchors.

## 3. Restore Logo Visibility
- [ ] Remove the CSS block in `src/components/nav.astro` that sets `width: 0`, `opacity: 0`, and `pointer-events: none` on `.nav-logo` when in `.scrolling` state.
- [ ] Ensure `nav.scrolling #nav-container` maintains `justify-content: space-between`.

## 4. Validation
- [ ] Verify highlighting on desktop (scroll spy).
- [ ] Verify logo visibility on desktop scroll.
- [ ] Verify mobile navigation active highlight.
- [ ] Verify smooth scroll functionality (ensure click works with root-relative anchors).
