# Capability: Project Markdown Content

## ADDED Requirements

### Requirement: Markdown Data Field
The project data schema MUST include a dedicated `content` field to store Markdown-formatted documentation for each project.

#### Scenario: Update the Project interface and dummy data.
- **Given** the current `Project` interface in `src/data/projects.ts`.
- **When** the `content` field is added to the interface.
- **Then** all project objects in the dummy API must be updated with Markdown strings.
- **And** the Markdown strings must include a mix of titles, lists, and bold text.

### Requirement: Server-Side Markdown Parsing
The project detail page SHALL parse the Markdown content into HTML using the `marked` library during the build process (SSG).

#### Scenario: Convert Markdown strings into HTML in the detail page.
- **Given** a project with a `content` field.
- **When** the `src/pages/projects/[id].astro` is rendered.
- **Then** it must import the `marked` library.
- **And** it must use `marked.parse()` to transform the `project.content` into an HTML string.

### Requirement: Rich Content Rendering
The project detail page MUST render the parsed HTML in the main content section, allowing for titles, multiple images, and formatted text.

#### Scenario: Replace the single hero image with rich content.
- **Given** the parsed HTML content.
- **When** rendering the `lg:col-span-2` section in `src/pages/projects/[id].astro`.
- **Then** it must inject the HTML using `set:html`.
- **And** it must wrap the content in a container with appropriate typography styling (e.g., `prose-mono`).
- **And** it must ensure that any images within the Markdown are styled to match the site's aesthetic.
