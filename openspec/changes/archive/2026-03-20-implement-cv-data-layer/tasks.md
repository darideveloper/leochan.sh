# Tasks: Implement CV Data Layer

- [x] **Data Layer Refactoring**
    - [x] Update `src/data/cv.ts` to add a formal `getCVData()` function.
    - [x] Update `cvData` to be a private internal variable (unexported) or keep it exported for other potential uses while promoting the function.
- [x] **Component Refactoring**
    - [x] Update `src/components/cv.astro` to use `getCVData()` instead of direct import.
    - [x] Ensure that `getCVData()` is correctly typed and consumed.
- [x] **Validation**
    - [x] Run `npm run check` (via `astro check`) to verify types.
    - [x] Perform a full build (`npm run build`) to ensure CV page rendering remains intact.
