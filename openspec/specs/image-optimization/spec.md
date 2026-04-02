# image-optimization Specification

## Purpose
Configures Astro's built-in image optimization and processing for both local and remote assets to ensure high performance and correct rendering.
## Requirements
### Requirement: Local Image Processing
The system SHALL process local images during the build to generate optimized formats and sizes based on component usage.
#### Scenario: Building with local images
- **WHEN** `astro build` is executed
- **THEN** local images are optimized and placed in the generated `dist` directory

### Requirement: Remote Image Whitelisting
The system SHALL process remote images from any origin to ensure compatibility with dynamic third-party content and prevent build-time regressions.
#### Scenario: Loading any remote image
- **WHEN** an image from any `http` or `https` origin is requested in `astro.config.mjs`
- **THEN** Astro's image service allows and processes the image

