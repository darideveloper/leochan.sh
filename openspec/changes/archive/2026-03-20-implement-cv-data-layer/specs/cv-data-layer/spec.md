# CV Data Layer Specification

## ADDED Requirements

### Requirement: Formal Data Retrieval Function
The system MUST provide a formal abstraction for retrieving CV data, moving away from direct object exports.

#### Scenario: Define a utility function for CV data.
- **Given** the `cvData` object in `src/data/cv.ts`.
- **When** the `getCVData()` function is implemented.
- **Then** it must return the complete `CVData` object.
- **And** components must be updated to use this function.

### Requirement: Full Data Payload
Unlike the portfolio projects, the CV data layer SHALL return the full dataset in a single call, as it is always consumed in its entirety.

#### Scenario: Retrieve the fat payload for the CV.
- **Given** a request for CV data.
- **When** `getCVData()` is called.
- **Then** it must include all nested arrays (experience, education, skills, etc.).
- **And** it must not apply any stripping or summarization logic.
