# Tasks: Split Project Data Models

- [x] **Data Layer Refactoring**
    - [x] Define `ProjectSummary` and `ProjectDetail` interfaces in `src/data/projects.ts`.
    - [x] Update the internal `projects` array to use `ProjectDetail` type.
    - [x] Refactor `getProjects()` to map the `projects` array to `ProjectSummary[]`, ensuring `link` and `preview` are kept, but `content`, `fullDescription`, `technologies`, and `date` are stripped.
    - [x] Ensure `getProjectById(id)` returns `ProjectDetail`.
- [x] **Frontend Updates**
    - [x] Update `src/components/projects.astro` to consume `ProjectSummary` data.
    - [x] Update `src/pages/projects/[id].astro` to consume `ProjectDetail` data.
    - [x] Verify that `getStaticPaths` in `[id].astro` correctly handles the full data pass for SSG.
- [x] **Validation**
    - [x] Run `npm run check` to verify TypeScript types across the project.
    - [x] Perform a full production build (`npm run build`) to ensure all static pages are correctly generated.
