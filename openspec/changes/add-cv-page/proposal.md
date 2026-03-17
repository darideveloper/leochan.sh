# Proposal: Add Dedicated CV Page

This proposal outlines the implementation of a dedicated `/cv` page by extracting CV content into a shared data structure and reusing the existing `CV` component.

## Problem
The CV section is currently embedded only in the homepage. Users may want to access or share the CV via a dedicated URL. The current implementation has hardcoded data within the component, which hinders reusability and maintainability.

## Solution
1. **Extract Data:** Move all CV content from `src/components/cv.astro` to a new `src/data/cv.ts` file.
2. **Refactor Component:** Update `src/components/cv.astro` to consume data from the new shared data file.
3. **New Page:** Create `src/pages/cv.astro` that renders the `CV` component within the standard `Layout`.

## Benefits
- **DRY:** Single source of truth for CV content.
- **Accessibility:** Dedicated URL for the CV.
- **Maintainability:** Easier to update content in a structured TypeScript file.
- **Extensibility:** The extracted data can be used for future features like PDF generation.
