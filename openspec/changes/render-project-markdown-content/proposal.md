# Proposal: Render Project Markdown Content

## Summary
Enhance the project detail page to support full Markdown rendering in the main content section. This allows for rich project documentation, including titles, lists, and images, all powered by a centralized data layer and the `marked` library.

## Motivation
A simple image and short text are not enough to showcase engineering projects. By rendering Markdown, we enable:
1.  **Rich Storytelling:** Detailed explanations of technical decisions, architecture, and features.
2.  **Flexible Layouts:** Content can include nested lists, sub-headings, and multiple images without needing complex component logic.
3.  **Data Consistency:** The "dummy API" will serve as a single source of truth for both summary cards and detailed Markdown content.

## Capabilities
- **`projects-content` (New):** Adds the logic for Markdown parsing and the UI for rich content display.

## Relationships
- Extends the `implement-dynamic-project-portfolio` proposal.
- Uses the existing `marked` dependency.
- Refines `src/pages/projects/[id].astro` to support HTML injection of parsed Markdown.
