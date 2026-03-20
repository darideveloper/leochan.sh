# Proposal: Split Project Data Models

## Why
Currently, the `Project` interface and `projects` array in `src/data/projects.ts` include all data for every project, including large Markdown content and full descriptions. While acceptable for a small local dataset, this monolithic structure causes over-fetching and lacks the separation of concerns required for a standard API-driven application. This prepares the frontend for a more efficient, scalable architecture compatible with a future Django REST API.

## What Changes
1. **Split Data Models**: Introduce `ProjectSummary` (for cards) and `ProjectDetail` (for full pages) interfaces.
2. **Refine Summary Interface**: Ensure `ProjectSummary` includes `link` and `preview` fields, as these are required for the interactive buttons on the home page grid.
3. **Refactor Data Source**: Update the `projects` array and utility functions to handle these separate shapes.
4. **Optimize Fetching**: Ensure `getProjects()` only returns `ProjectSummary` objects, and `getProjectById(id)` returns the full `ProjectDetail`.
5. **Maintain SSG Compatibility**: Ensure Astro's build process correctly maps these new types during `getStaticPaths` and page rendering.

## Scope
- `src/data/projects.ts`: Update interfaces and data structure.
- `src/components/projects.astro`: Update to use `ProjectSummary`.
- `src/pages/projects/[id].astro`: Update to use `ProjectDetail`.

## Data Split Strategy

| Field | Summary (Cards) | Detail (Full Page) |
| :--- | :---: | :---: |
| `id`, `title`, `image`, `status` | ✅ | ✅ |
| `link` (Gitea/GitHub) | ✅ | ✅ |
| `preview` (Live Site) | ✅ | ✅ |
| `technologies`, `date` | ❌ | ✅ |
| `description` (Short) | ❌ | ✅ |
| `fullDescription`, `content` | ❌ | ✅ |

## Risks
- Type mismatches during refactoring.
- Breaking the `getStaticPaths` loop if not handled carefully.
