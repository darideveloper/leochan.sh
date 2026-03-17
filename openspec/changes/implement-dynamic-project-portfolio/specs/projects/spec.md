# Capability: Projects Portfolio

## ADDED Requirements

### Requirement: Centralized Data Layer
The system MUST provide a unified source of truth for all projects by separating the data from the presentation layer into a dedicated data file.
- **Image Handling:** All project images MUST be imported using ESM in the data file and typed as `ImageMetadata` to ensure Astro's image optimization pipeline is preserved.

#### Scenario: Define a unified source of truth for all projects.
- **Given** the current hardcoded data in `src/components/projects.astro`.
- **When** a new TypeScript file `src/data/projects.ts` is created.
- **Then** it must export a `projects` array and utility functions for data retrieval.
- **And** the data structure must include both summary and detailed fields (id, title, description, fullDescription, etc.).

### Requirement: Dynamic Detail Pages
The system SHALL establish dynamic routes for generating separate, statically-built pages for each individual project.
- **Detail UI:** Each detail page MUST include a high-level header (Title, Status), a technology stack list, a long-form description section, and a primary showcase image/gallery.

#### Scenario: Generate separate pages for each project using SSG.
- **Given** the project data in the centralized data layer.
- **When** a dynamic route file `src/pages/projects/[id].astro` is created.
- **Then** it must use `getStaticPaths()` to generate routes at build time.
- **And** each page must render the project's full details using the `Layout.astro` component.

### Requirement: Refactored Card View
The main portfolio section MUST be refactored to dynamically render project cards from the centralized data layer.

#### Scenario: Update the main portfolio section to use the data layer.
- **Given** the refactored `src/components/projects.astro`.
- **When** it fetches projects from the data layer.
- **Then** it must render a card for each project.
- **And** clicking the project title/image must navigate to the internal detail page.

### Requirement: Cross-Page Navigation & State
The navigation component SHALL correctly handle hash links when navigating from sub-pages back to specific sections on the home page and manage its active state based on the current path.
- **State Logic:** When the pathname is not `/`, the navigation MUST NOT show home sections (e.g., `#home`) as active.

#### Scenario: Handle hash links correctly when on a project detail page.
- **Given** the current pathname is not `/`.
- **When** a user clicks a nav link like `_WHOAMI` (href="/#home").
- **Then** it must perform a standard page navigation back to the home page's section.
- **And** the `e.preventDefault()` logic in `nav.astro` must only trigger when already on the root path.

### Requirement: Boot Sequence Consistency
The startup boot sequence SHALL be skipped on sub-pages if the user has already visited the site during the current session.

#### Scenario: Skip boot sequence on project pages.
- **Given** the user is on `src/pages/projects/[id].astro`.
- **When** the `sessionStorage` key `hasBooted` is present.
- **Then** the `StartupSequence` must not trigger its full animation.
- **And** the `is-booting` CSS class must not be applied to the document.
