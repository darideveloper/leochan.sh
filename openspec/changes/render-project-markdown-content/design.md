# Design: Render Project Markdown Content

## Problem
The current project detail page only displays a single image and a short description. This is insufficient for showcasing the depth and complexity of a project, which often requires titles, lists, nested images, and formatted text.

## Solution
Leverage the `marked` library to parse Markdown content from the project data and render it as HTML within the main content area of the project detail page.

### Architectural Overview

1.  **Data Layer Expansion:**
    - Update the `Project` interface in `src/data/projects.ts` to include a `content` field.
    - This field will store the full Markdown body of the project's documentation.
    - The `image` field will still be used as the "hero" image, which can also be rendered within the Markdown if desired.

2.  **Markdown Parsing:**
    - Use the `marked` library in `src/pages/projects/[id].astro`.
    - `marked` is already a project dependency.
    - Parse the `project.content` string into HTML.

3.  **UI Refactoring:**
    - The `lg:col-span-2` section in `src/pages/projects/[id].astro` will be replaced with a Markdown-rendered output.
    - Use a `prose` class (or equivalent) to style the rendered HTML consistently with the site's aesthetic.

4.  **Styling:**
    - Apply global CSS or Tailwind `typography` patterns to ensure the rendered Markdown (titles, lists, links) matches the "Cyber-Glass" and mono-space theme.

## Implementation Details

### Data Example
```typescript
content: `
# Overview
This project is a high-performance infrastructure solution...

## Features
- **Zero-Trust** security model
- Automated deployments via **Ansible**
- Real-time monitoring with **Grafana**

### Infrastructure Diagram
![Architecture](/path/to/image.png)
`
```

### UI Integration
```astro
---
import { marked } from 'marked';
const content = marked.parse(project.content);
---
<div class="prose prose-invert prose-mono max-w-none prose-headings:font-vcr prose-p:font-mono">
  <div set:html={content} />
</div>
```
