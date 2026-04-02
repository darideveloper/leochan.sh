# portfolio-api Specification

## Purpose
TBD - created by archiving change implement-api-integration. Update Purpose after archive.
## Requirements
### Requirement: Dynamic Portfolio Data Retrieval
The system MUST retrieve portfolio projects from the backend API instead of local static files.

#### Scenario: Update `getProjects` and `getProjectById` to be asynchronous.
- **Given** the environment variable `PUBLIC_API_URL`.
- **When** `getProjects()` or `getProjectById(id)` is called.
- **Then** it must perform a `GET` request to `${PUBLIC_API_URL}/projects/` or `${PUBLIC_API_URL}/projects/{id}/`.
- **And** it must return a `Promise<ProjectSummary[]>` or `Promise<ProjectDetail | undefined>`.

### Requirement: Remote Image Support
The portfolio components MUST support images served from absolute URLs from the backend API.

#### Scenario: Update project interfaces and components for remote images.
- **Given** the `ProjectSummary` and `ProjectDetail` interfaces.
- **When** the `image` field is updated to type `string`.
- **Then** the `<Image />` component in `projects.astro` and `[id].astro` must use these absolute URLs.
- **And** `astro.config.mjs` must allow the backend domain for image optimization.

### Requirement: Static Path Generation via API
The system SHALL use the backend API to generate static paths for project detail pages.

#### Scenario: Fetch project IDs from the API in `getStaticPaths`.
- **Given** the dynamic route `src/pages/projects/[id].astro`.
- **When** `getStaticPaths()` is executed at build time.
- **Then** it must fetch the list of projects from `${PUBLIC_API_URL}/projects/`.
- **And** it must map each project to a dynamic path using its `id`.

