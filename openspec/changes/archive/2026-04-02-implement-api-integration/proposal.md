# Proposal: Full API Integration for CV and Portfolio

## Problem
The current implementation of the portfolio and CV sections relies on static dummy data hardcoded in `src/data/cv.ts` and `src/data/projects.ts`. While the data structure is correct, it doesn't reflect real-time changes from the backend API, making the site harder to maintain as Léonard-Anton's profile and projects evolve.

## Proposed Solution
Transition the data layer from static imports to a dynamic fetching mechanism that consumes the REST APIs described in `docs/backend-apis.md`. This involves:
- Configuring environment variables for the API base URL.
- Refactoring `src/data/cv.ts` and `src/data/projects.ts` to use asynchronous `fetch` calls.
- Updating Astro components (`cv.astro`, `projects.astro`, `[id].astro`) to handle asynchronous data resolution.
- Adjusting image types from `ImageMetadata` (ESM imports) to `string` (absolute URLs).

## Scope
- **Environment:** Setup `PUBLIC_API_URL`.
- **CV Data:** Fetch singleton profile from `/cv/`.
- **Portfolio Data:** Fetch projects list from `/projects/` and details from `/projects/{id}/`.
- **Components:** Update all data-consuming components to `await` the API response.
- **Images:** Update `Image` component usage to handle remote absolute URLs.

## Expected Outcomes
- A portfolio that reflects the latest data from the Django backend.
- A more professional and scalable architecture that separates content management (backend) from presentation (frontend).
- Minimal UI changes, preserving the existing "Cyber-Glass" aesthetic.
