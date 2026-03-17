# Tasks

## Phase 1: Lazy Hydration & Initial Load Optimization
- [x] In `src/components/home.astro`: Change `LogoWall` directive from `client:load` to `client:visible`.
- [x] In `src/components/home.astro`: Change `LetterGlitch` directive from `client:load` to `client:visible`.
- [x] In `src/components/home.astro`: Change `SkillsList` directive from `client:load` to `client:visible`.
- [x] In `src/components/projects.astro` (if applicable): Change any heavy React component directives from `client:load` to `client:visible`.

## Phase 2: Navigation Scroll Reflow Fix
- [x] In `src/components/nav.astro`: Update the `.scrolling` CSS logic and JavaScript `updateNav()` function.
- [x] In `src/components/nav.astro`: Instead of direct `style.setProperty("width", ...)` modifications on scroll, implement a CSS-driven `max-width` transition or a hardware-accelerated transform approach to prevent layout thrashing.

## Phase 3: LetterGlitch Canvas Optimization
- [x] In `src/React/LetterGlitch.tsx`: Increase `fontSize`, `charWidth`, and `charHeight` to reduce the overall grid density (e.g., from 16 to 24 or 32) and lower the total number of characters processed per frame.
- [x] In `src/React/LetterGlitch.tsx`: Cache parsed hex/RGB values during initialization instead of repeatedly computing them inside the animation loop.
- [x] In `src/React/LetterGlitch.tsx`: Implement "dirty rectangle" tracking—only use `ctx.clearRect` and `ctx.fillText` on individual character coordinates that have actually changed in the current frame, instead of clearing the entire canvas (`ctx.clearRect(0, 0, width, height)`).
