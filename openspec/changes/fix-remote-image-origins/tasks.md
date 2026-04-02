# Tasks: Fix Remote Image Allowed Origins

## 1. Planning & Analysis
- [x] 1.1 Confirm current image configuration in `astro.config.mjs`.

## 2. Implementation
- [x] 2.1 Update `astro.config.mjs` with universal `remotePatterns`.
    - Added `{ protocol: "https" }` and `{ protocol: "http" }` which allows all hostnames.

## 3. Validation
- [x] 3.1 Run `npm run build` locally to confirm the `[RemoteImageNotAllowed]` error is resolved.
- [x] 3.2 Ensure `astro dev` continues to work and remote images load.
