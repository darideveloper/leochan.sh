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
The system SHALL only process remote images from domains explicitly allowed in the configuration to prevent unauthorized processing or security risks.
#### Scenario: Loading remote images from localhost
- **WHEN** an image from `http://localhost:8000` is requested
- **THEN** Astro's image service allows and processes the image
