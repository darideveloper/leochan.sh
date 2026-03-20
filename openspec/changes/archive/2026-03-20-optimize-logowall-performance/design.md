# Design: LogoWall Performance Optimization

## Problem Statement
The `LogoWall` component, used to display professional skills as a scrolling marquee, exhibits "slow" or "choppy" performance. This is primarily due to:
1.  **Network Latency**: Loading 6-7 high-resolution logos from external CDNs/URLs at runtime.
2.  **Layout Reflows**: The use of `w-max` on a container with dynamic content (images) can cause small layout shifts during loading, interrupting the smooth `translate3d` animation.
3.  **Expensive CSS Filters**: Applying `brightness-0 invert` on multiple images inside a continuous 60fps animation is computationally heavy for the browser's paint engine.
4.  **Redundant Renders**: The entire marquee is re-rendered as a single block, and with 60+ items (original + clone), any state update can trigger unnecessary work.

## Proposed Solution

### 1. Asset Localization and Pre-optimization
All external assets will be downloaded to `public/images/logos/`.
- **Conversion**: PNGs and SVGs will be converted/optimized to `.webp` or cleaned `.svg` where appropriate.
- **Color Correction**: Instead of runtime `brightness-0 invert`, images will be prepared to be white/grayscale by default or use `filter: grayscale(1) invert(1)` which is slightly more standard and performant if combined with `will-change`. Ideally, we should use `opacity` and `contrast` for the "faded" look.

### 2. Structural Optimization
- **React.memo**: Extract the `LogoItem` into a separate component wrapped in `React.memo`. This ensures that individual items aren't re-evaluated during parent re-renders unless their props change.
- **Explicit Sizing**: Set fixed `width` and `height` (e.g., `size-8` / `32px`) on all logo containers to prevent layout shifts.

### 3. Animation Refinement
- **will-change-transform**: Already present, but ensuring it's on the correctly sized container.
- **Duration Adjustment**: Standardize the duration to ensure smooth sub-pixel alignment across different screen sizes.

## Alternatives Considered
- **Framer Motion**: Too heavy for a simple marquee.
- **Canvas-based Rendering**: Overkill for simple logos and text.
- **SVG Filters**: More complex to maintain than pre-processed assets.

## Trade-offs
- **Binary Size**: Localizing images adds a few KBs to the repository, but the performance gain from avoiding network requests and runtime filters outweighs this.
