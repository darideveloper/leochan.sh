# cv-api Specification Delta

## ADDED Requirements
### Requirement: Asynchronous CV Data Retrieval
The CV data retrieval abstraction MUST be asynchronous to support fetching from a remote API.

#### Scenario: Update `getCVData` to be asynchronous.
- **Given** the environment variable `PUBLIC_API_URL`.
- **When** `getCVData()` is called.
- **Then** it must perform a `GET` request to `${PUBLIC_API_URL}/cv/`.
- **And** it must return a `Promise<CVData>`.
- **And** the data structure must match the response from the Backend API.

### Requirement: Global API URL Configuration
The system SHALL use a centralized environment variable for the backend API base URL.

#### Scenario: Use `PUBLIC_API_URL` for fetching CV data.
- **Given** a `.env` file with `PUBLIC_API_URL`.
- **When** the application initializes.
- **Then** the CV data fetching logic must use this URL for all requests.
