# Proposal: Link Contact Form to Backend API

## Context
The current contact form is hardcoded to a placeholder Formspree URL. There is a documented backend API endpoint `/api/contact/` that should be used instead to store and manage contact messages.

## Scope
- Update the frontend `src/components/contact.astro` to use the local backend API.
- Align the request body fields with the backend requirements.
- Ensure proper error handling and success feedback.

## Goals
- Connect the contact form to the internal Django backend.
- Replace Formspree placeholder with the real API endpoint.
- Support validation feedback from the backend.
