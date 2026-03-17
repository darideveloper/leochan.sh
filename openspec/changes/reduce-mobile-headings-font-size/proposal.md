# Change: Reduce Mobile Heading Font Sizes

## Why
The current heading sizes (`h1` and `h2`) on mobile devices are too large, leading to overflow issues and poor readability. A ~20% reduction on mobile viewports will ensure a cleaner and more professional appearance without compromising the "Unix Terminal" aesthetic.

## What Changes
- Add a responsive global CSS rule in `Layout.astro` or update specific components using Tailwind.
- Apply a ~20% reduction to `h1`, `h2`, and `h3` font sizes for mobile viewports (width < 640px).

## Impact
- Affected specs: `typography`
- Affected code: `src/layouts/Layout.astro`, `src/components/home.astro`, `src/components/cv.astro`, `src/React/StartupSequence.tsx`.
