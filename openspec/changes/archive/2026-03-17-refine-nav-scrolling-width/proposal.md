# Proposal: Refine Navigation Scrolling Width and Spacing

## Why
The navigation header in `leochan.sh` has a dynamic width that shrinks as the user scrolls. After adding the `_RESUME` item, the hardcoded minimum width of `528px` is insufficient for the four navigation items and their aggressive spacing (`md:gap-12` and `md:space-x-6`). This results in text overflow and layout breakage in the "minimal pill" version of the header.

## What Changes
1. **Increase Minimal Width:** Update the `minWidth` constant in the `updateNav` script from `528` to `640` to accommodate the additional navigation item.
2. **Optimize Spacing:** Reduce the horizontal spacing between navigation items by removing the redundant `md:space-x-6` and adjusting the `md:gap-12` to a more balanced `md:gap-8` for the desktop scrolling state.
3. **Refine Layout Transitions:** Ensure the logo and navigation items transition smoothly without jumping during the width change.

## Impact
- **Visual:** Clean, non-overflowing "pill" navigation at all scroll depths.
- **UX:** Improved readability and professional aesthetic for the navigation bar.
- **Technical:** Minimal, surgical change to `src/components/nav.astro` with no breaking side effects.
