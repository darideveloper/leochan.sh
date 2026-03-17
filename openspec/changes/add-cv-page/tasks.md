# Tasks: Add Dedicated CV Page

## Implementation

1. **Extract CV Data**
   - [x] Create `src/data/cv.ts`.
   - [x] Define `CVData` interface.
   - [x] Populate `cvData` object with content from `src/components/cv.astro`.
   - [x] Export `cvData` as the default export.

2. **Refactor CV Component**
   - [x] Update `src/components/cv.astro` to import `cvData` from `src/data/cv.ts`.
   - [x] Use `cvData` object to render the content instead of local variables.

3. **Create CV Page**
   - [x] Create `src/pages/cv.astro`.
   - [x] Use `Layout` component with title "CV".
   - [x] Include `Nav` component (optional, if we want full-page navigation).
   - [x] Render `CV` component.

## Validation

- [x] Run `npm run dev` and navigate to `/cv` to ensure content matches the homepage section.
- [x] Check console for any rendering or import errors.
- [x] Verify homepage section still works correctly and is populated from the same data source.
