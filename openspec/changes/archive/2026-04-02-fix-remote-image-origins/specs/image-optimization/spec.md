# image-optimization Specification Delta

## MODIFIED Requirements
### Requirement: Remote Image Whitelisting
The system SHALL process remote images from any origin to ensure compatibility with dynamic third-party content and prevent build-time regressions.
#### Scenario: Loading any remote image
- **WHEN** an image from any `http` or `https` origin is requested in `astro.config.mjs`
- **THEN** Astro's image service allows and processes the image
