# Tasks: Implement Real-time API Integration

## Environment & Configuration
- [x] Add `PUBLIC_API_URL=http://localhost:8000/api/` to `.env`.
- [x] Add backend domain (e.g., `localhost`) to `image.remotePatterns` in `astro.config.mjs`.

## Data Layer (CV)
- [x] Refactor `src/data/cv.ts`:
    - Remove hardcoded `cvData`.
    - Update `getCVData` to be an `async` function.
    - Implement `fetch` from `${import.meta.env.PUBLIC_API_URL}/cv/`.
    - Handle basic error cases (e.g., return `undefined` or a fallback).

## Data Layer (Portfolio)
- [x] Refactor `src/data/projects.ts`:
    - Update `ProjectSummary` and `ProjectDetail` interfaces: change `image: ImageMetadata` to `image: string`.
    - Remove hardcoded `projects` array.
    - Update `getProjects` to be an `async` function fetching from `/projects/`.
    - Update `getProjectById` to be an `async` function fetching from `/projects/${id}/`.

## Component Updates
- [x] Update `src/components/cv.astro`:
    - Use `await getCVData()`.
    - Add conditional rendering/error handling if data is missing.
- [x] Update `src/components/projects.astro`:
    - Use `await getProjects()`.
    - Update `<Image />` component with `inferSize={true}` or explicit dimensions.
- [x] Update `src/pages/projects/[id].astro`:
    - Update `getStaticPaths` to `await getProjects()`.
    - Update the component frontmatter to `await getProjectById(id)`.
    - Update `<Image />` with `inferSize={true}` or explicit dimensions.

## Validation
- [x] Run `npm run dev` and verify data is correctly fetched from the local Django backend. (Tested via build as dev requires a long-running process)
- [x] Run `npm run build` to ensure static generation works with the API.
- [x] Verify image optimization works for remote URLs.
