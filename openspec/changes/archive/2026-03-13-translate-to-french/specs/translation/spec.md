# Capability: French Localization

## ADDED Requirements

### Requirement: Localize Portfolio Content
The portfolio website SHALL display all its content (UI text, metadata, aria-labels) in French.

#### Scenario: Translate Metadata and Layout
- **Given** the current `Layout.astro` file is in English.
- **When** the developer updates the `lang` attribute to `fr`.
- **And** the developer translates the `title`, `description`, `og:title`, `og:description`, and JSON-LD data.
- **Then** the website metadata should reflect the French translation for SEO and accessibility.

#### Scenario: Translate Navigation
- **Given** the navigation links "Home", "Projects", "Contact".
- **When** they are translated to "Accueil", "Projets", "Contact".
- **Then** the navigation bar should show the French labels correctly.

#### Scenario: Translate Home Section
- **Given** the text "Hi, I'm Oscar Hernandez" and the tagline in English.
- **When** the text is translated to "Salut, je suis Oscar Hernandez" and the tagline to "Transformer vos idées en expériences numériques interactives et fluides grâce à un développement frontend de pointe.".
- **Then** the hero section should be updated correctly.

#### Scenario: Translate Skills (React component)
- **Given** the categories and items in `SkillsList.tsx` in English.
- **When** the developer updates the `skills` object and `CategoryIcons` keys to French.
- **Then** the "What I do?" section should correctly show skills in French.

#### Scenario: Translate Projects
- **Given** project section headers and statuses in English.
- **When** the headers and statuses ("Deployed", "On Development", "Contributor") are translated.
- **Then** the project cards should display their status and headers in French.

#### Scenario: Translate Contact Form
- **Given** the contact form placeholders and button text in English.
- **When** the placeholders ("Name", "Email", "Message") and button ("Submit") are translated.
- **And** the script alert message is translated to "Un problème est survenu lors de l'envoi de votre message.".
- **Then** the contact form and its feedback mechanisms should be in French.

#### Scenario: Translate Accessibility and Links
- **Given** various links with `aria-label` attributes in English (e.g., "Preview", "Email").
- **When** the developer updates them to French ("Aperçu", "E-mail").
- **Then** the accessibility support should correctly reflect the French content.

#### Scenario: Translate Footer
- **Given** footer text and copyright notice in English.
- **When** the text ("Built with", "Styled with", "All rights reserved") is translated.
- **Then** the footer should display the translated content.
