# Design: Contact Form Integration

## Overview
This design covers the frontend changes needed to send contact form submissions to the Django REST Framework (DRF) backend endpoint.

## Request/Response Mapping

| Form Field | API Payload Key | Notes |
|------------|-----------------|-------|
| `from_name`| `name`          | Rename to match backend. |
| `reply_to` | `email`         | Rename to match backend. |
| `message`  | `message`       | Already matches. |

## Implementation Details

### Configuration
The API endpoint should be configurable via environment variables if possible, or use a relative path `/api/contact/`. Currently, `src/components/contact.astro` uses a hardcoded Formspree URL.

### Data Submission
- Use `fetch` API.
- Set `Content-Type: application/json`.
- Send body as `JSON.stringify()`.
- Wait for `201 Created` status from the backend.

### Error Handling
- Capture `400 Bad Request` responses.
- Display field-specific errors if returned by DRF (e.g., `"Enter a valid email address."`).
- Add a generic "ssh connection failed" style error message to align with the terminal theme if transmission fails.
