# Tasks: Link Contact Form to Backend

## Phase 1: Preparation (1/1)
- [x] Verify existing backend contact API using `curl` locally.
- [x] Review `docs/contact-api.md`.

## Phase 2: Implementation (2/2)
- [x] Update `src/components/contact.astro` form fields `name` and `email` attributes to match the backend expectations (or map them in JS).
- [x] Refactor the `submit` event listener in `src/components/contact.astro` to send JSON data to `/api/contact/`.

## Phase 3: Validation (0/2)
- [x] Test the contact form submission in dev mode.
- [x] Confirm message appears in the backend if accessible.

## Verification Tips
1. Use `pnpm dev` to run the project.
2. Ensure the backend server is running on `localhost:8000`.
3. Fill the form and check for a `201 Created` response.
