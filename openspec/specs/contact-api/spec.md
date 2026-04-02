# Spec: Contact API Integration

## MODIFIED Requirements

### Requirement: Contact Form Integration
The contact form in `src/components/contact.astro` MUST send submissions to the internal API `/api/contact/` using the `POST` method.

#### Scenario: Successful Transmission
- Given a user filling out the contact form with a valid name, email, and message.
- When they click the "ssh leonard+leochan.sh@nekocorp.fr" button.
- Then the form data MUST be sent as a JSON payload to `/api/contact/`.
- And the backend SHOULD return a `201 Created` response.
- And the form SHOULD be hidden and replaced with a success message: "✅ Thank you for your message!".

#### Scenario: Server Error (Validation Failed)
- Given a user providing an invalid email.
- When the form is submitted and the API returns a `400 Bad Request`.
- Then the UI SHOULD display an appropriate error (e.g., "A problem occurred while sending your message" or specific field errors).

#### Scenario: Field Renaming
- The frontend form field `from_name` MUST be mapped to `name` in the API request body.
- The frontend form field `reply_to` MUST be mapped to `email` in the API request body.
