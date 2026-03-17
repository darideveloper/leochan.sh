# performance Specification

## Purpose
TBD - created by archiving change optimize-home-performance. Update Purpose after archive.
## Requirements
### Requirement: Navigation Bar Scroll Animation
The navigation bar MUST animate its width-like transition during scrolling using a strategy that avoids modifying `width` directly on the container, which triggers layout reflows. It MUST leverage `max-width` transitioning with CSS or hardware-accelerated transforms (`scaleX`) where possible.
#### Scenario: User scrolls down the page
- The `nav` element applies CSS transitions that offload work to the compositor thread.

### Requirement: Lazy Component Hydration
Heavy React components that appear "below the fold" MUST only hydrate when they become visible.
#### Scenario: Initial page load
- `LogoWall`, `LetterGlitch`, and `SkillsList` in `src/components/home.astro` are rendered to HTML initially but do not hydrate on load.
- Their Astro directive is updated from `client:load` to `client:visible`.

### Requirement: Optimized LetterGlitch Canvas
The `LetterGlitch` canvas animation MUST reduce redundant repaints and computation.
#### Scenario: Canvas animation loop
- Instead of clearing the entire canvas on every frame, the `animate` loop only clears and redrawing characters that have actively changed.
- RGB values are calculated efficiently or cached.
- Density is reduced slightly (larger `fontSize`) to reduce the total number of characters that need iterating over.

