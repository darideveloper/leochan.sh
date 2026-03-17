# Proposal: Implement Dynamic Project Portfolio

## Summary
Transform the existing static project portfolio into a dynamic, data-driven system using Astro 5.x SSG capabilities. This change introduces a centralized "dummy API" in TypeScript, individual project detail pages, and updated navigation logic to support cross-page movement.

## Motivation
The current hardcoded approach is not scalable for a professional portfolio. By centralizing the project data and creating individual pages, we improve:
1.  **SEO:** Each project will have its own URL and metadata.
2.  **Scalability:** Adding new projects will only require updating a single data file.
3.  **User Experience:** Visitors can explore more in-depth details about specific projects without leaving the core aesthetic.
4.  **Future-proofing:** The data structure is prepared for a potential transition to a real API (e.g., Firebase Firestore).

## Capabilities
- **`projects` (New):** Defines the data schema, routing logic, and detail page implementation for the portfolio.

## Relationships
- Extends the existing `Layout.astro` and `cyber-glass` styling patterns.
- Modifies `src/components/nav.astro` to handle cross-page hash navigation.
- Replaces the hardcoded logic in `src/components/projects.astro`.
