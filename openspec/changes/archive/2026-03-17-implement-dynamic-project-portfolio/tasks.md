# Tasks: Implement Dynamic Project Portfolio

## Phase 1: Data Architecture
- [x] Create `src/data/projects.ts` with the expanded data schema. <!-- id: 1 -->
- [x] Import project images in the data file to preserve `ImageMetadata`. <!-- id: 2 -->
- [x] Migrate existing projects and add detailed fields (fullDescription, technologies). <!-- id: 3 -->
- [x] Add utility functions for project retrieval. <!-- id: 4 -->

## Phase 2: Dynamic Routing & UI
- [x] Create `src/pages/projects/[id].astro`. <!-- id: 5 -->
- [x] Implement `getStaticPaths()` for static page generation. <!-- id: 6 -->
- [x] Build the Project Detail UI (Header, Tech Stack, Gallery, Detailed Description). <!-- id: 7 -->
- [x] Implement conditional "Skip Boot" logic for sub-pages. <!-- id: 8 -->

## Phase 3: Component Integration
- [x] Refactor `src/components/projects.astro` to use the data layer. <!-- id: 9 -->
- [x] Update card links to internal detail routes. <!-- id: 10 -->
- [x] Update `src/components/nav.astro` to handle cross-page hash links. <!-- id: 11 -->
- [x] Update `src/components/nav.astro` state logic to hide active highlights on sub-pages. <!-- id: 12 -->

## Phase 4: Validation
- [x] Verify image optimization in generated project pages. <!-- id: 13 -->
- [x] Verify SSG builds correctly with `npm run build`. <!-- id: 14 -->
- [x] Test cross-page navigation from `/projects/X` back to `#cv` on `/`. <!-- id: 15 -->
- [x] Audit SEO metadata for individual project pages. <!-- id: 16 -->
