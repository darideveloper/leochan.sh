# Change: Fix Remote Image Allowed Origins

## Why
The project's build process fails with `[RemoteImageNotAllowed]` error because remote images are being optimized (via `getImage` or `<Image />`) from domains not listed in the whitelist. The user wants to allow all origins to avoid these build errors, especially for dynamic or third-party content.

## What Changes
- Modify `astro.config.mjs` to include wildcard remote patterns for both `http` and `https` protocols.
- **BREAKING**: This technically allows images from any source to be processed, which might increase build times or bandwidth usage for very large external images, but resolves all "not allowed" errors.

## Impact
- Affected specs: `image-optimization` (newly added spec)
- Affected code: `astro.config.mjs`
