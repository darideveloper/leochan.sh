# data-models Specification

## Purpose
TBD - created by archiving change split-project-data-models. Update Purpose after archive.
## Requirements
### Requirement: Split Project Interfaces
The system MUST provide separate interfaces for "Summary" (list-view) and "Detail" (full-page) project data.

#### Scenario: Define separate project interfaces.
- **Given** the current `Project` interface.
- **When** the `ProjectSummary` and `ProjectDetail` interfaces are defined.
- **Then** `ProjectSummary` must include id, title, image, status, link, and preview.
- **And** `ProjectSummary` must exclude `content`, `fullDescription`, `technologies`, and `date` to minimize payload.
- **And** `ProjectDetail` must include both the summary data and the full content (fullDescription, content, technologies, date, etc.).
- **And** `ProjectDetail` should extend `ProjectSummary` to ensure consistency.

### Requirement: Optimized Data Retrieval
The utility functions in the data layer SHALL return only the data requested for the specific context (list or detail).

#### Scenario: Update `getProjects()` to return summary data.
- **Given** the `projects` array.
- **When** `getProjects()` is called.
- **Then** it must return an array of `ProjectSummary` objects.
- **And** any large content fields or detailed metadata must be excluded from the response.

#### Scenario: Update `getProjectById()` to return full detail.
- **Given** a project ID.
- **When** `getProjectById(id)` is called.
- **Then** it must return a full `ProjectDetail` object for the matching project.

### Requirement: Frontend Type Safety
The project components and pages MUST use the correct interfaces to ensure type safety.

#### Scenario: Update `src/components/projects.astro` types.
- **Given** the `projects.astro` component.
- **When** it fetches projects from the data layer.
- **Then** it must treat them as `ProjectSummary` types.

#### Scenario: Update `src/pages/projects/[id].astro` types.
- **Given** the project detail page.
- **When** it fetches project details from the data layer.
- **Then** it must treat them as `ProjectDetail` types.

