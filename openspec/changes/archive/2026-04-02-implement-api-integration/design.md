# Design: Real-time API Integration

## Strategy
Transition the data fetching from local static files to a remote API while maintaining the existing Astro/React architecture.

### 1. Environment Configuration
The backend base URL must be configurable via environment variables.
- `PUBLIC_API_URL` will be used in both server-side (Astro frontmatter) and client-side (if needed) contexts.
- Default to `http://localhost:8000/api/` for development.

### 2. Data Layer Refactoring
- **`src/data/cv.ts`**: Replace `cvData` export with an asynchronous `getCVData()` function that fetches from `${PUBLIC_API_URL}/cv/`.
- **`src/data/projects.ts`**: Replace the static `projects` array with `getProjects()` and `getProjectById(id)` functions that fetch from `${PUBLIC_API_URL}/projects/` and `${PUBLIC_API_URL}/projects/${id}/` respectively.

### 3. Image Optimization with Remote URLs
Astro's `<Image />` component requires a remote pattern or explicit dimensions when using string URLs.
- Update `astro.config.mjs` to include the backend domain in the `image.domains` or `image.remotePatterns` list to allow on-the-fly optimization.
- Use `inferSize` or provided dimensions from the API if available. Since the API doesn't provide dimensions, we'll use `width` and `height` props or `inferSize={true}` in `<Image />`.

### 4. Asynchronous Component Initialization
Astro components support top-level `await`.
- `cv.astro` will `await getCVData()`.
- `projects.astro` will `await getProjects()`.
- `[id].astro` will fetch data in `getStaticPaths` and `Astro.props`.

## Architectural Trade-offs
- **Build Time vs Runtime**: Keeping `output: "static"` means the API will be called at build time. For real-time updates without rebuilding, we would need `output: "server"`, but as per `project.md`, we prioritize **Static Deployment**.
- **Error Handling**: A fallback or a "Maintenance" state will be required in case the API is unreachable during build. We'll use a basic try/catch with informative error messages.

## Data Type Changes
- `image` field in `ProjectSummary` and `ProjectDetail`: `ImageMetadata` -> `string`.
- All other fields align with the existing interfaces.
