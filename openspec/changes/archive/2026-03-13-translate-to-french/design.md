# Design: French Translation Strategy

## Goal
Update all visible text to French while ensuring the UI layout remains robust under text expansion and maintaining SEO performance.

## Core Translation Mapping

### 1. Metadata & Global Settings (`Layout.astro`)
- `lang="en"` -> `lang="fr"`
- `Software Developer` -> `Développeur Logiciel`
- `Building interactive and seamless digital experiences...` -> `Création d'expériences numériques interactives et fluides avec un développement frontend de pointe.`
- Open Graph / JSON-LD descriptions will be localized similarly.

### 2. Navigation (`nav.astro`)
- `Home` -> `Accueil`
*Rationale:* Shorter and standard.
- `Projects` -> `Projets`
- `Contact` -> `Contact` (No change)

### 3. Home Section (`home.astro`)
- `Hi, I'm Oscar Hernandez` -> `Salut, je suis Oscar Hernandez`
- `Software Developer` -> `Développeur Logiciel`
- `Transforming ideas into interactive and seamless digital experiences with cutting-edge frontend development.` -> `Transformer vos idées en expériences numériques interactives et fluides grâce à un développement frontend de pointe.`

### 4. "What I do?" Section (`SkillsList.tsx`)
- `What I do?` -> `Ce que je fais ?`
- `Web Development` -> `Développement Web`
  - `Single Page Applications (SPAs)` -> `Applications à page unique (SPA)`
  - `Landing pages and business websites` -> `Pages de destination et sites vitrines`
  - `Portfolio websites` -> `Sites de portfolio`
- `Mobile Development` -> `Développement Mobile`
  - `Mobile-friendly web apps` -> `Applications web adaptées au mobile`
  - `React Native mobile apps` -> `Applications mobiles React Native`
- `UI/UX Design & Prototyping` -> `Design UI/UX & Prototypage`
  - `UI design with Figma & Canva` -> `Design UI avec Figma & Canva`
  - `UX research & improvements` -> `Recherche UX & améliorations`
  - `Prototyping for websites & mobile apps` -> `Prototypage pour sites web & applications mobiles`

### 5. Projects Section (`projects.astro`)
- `My work` -> `Mon travail`
- `Projects` -> `Projets`
- Statuses:
  - `Deployed` -> `Déployé`
  - `On Development` -> `En développement`
  - `Contributor` -> `Contributeur`
- `More projects on` -> `Plus de projets sur`

### 6. Contact Section (`contact.astro`)
- `Let's talk` -> `Discutons-en`
- `Contact` -> `Contact` (No change)
- `Have a question or a project in mind? Feel free to reach out.` -> `Vous avez une question ou un projet en tête ? N'hésitez pas à me contacter.`
- `Location: Colombia, Valle del cauca` -> `Lieu : Colombie, Valle del Cauca`
- Placeholders:
  - `Name` -> `Nom`
  - `Email` -> `E-mail`
  - `Message` -> `Message` (No change)
- Button: `Submit` -> `Envoyer`
- Success message: `✅ Thank you for your message!` -> `✅ Merci pour votre message !`
- Script alerts:
  - `There was a problem sending your message.` -> `Un problème est survenu lors de l'envoi de votre message.`

### 7. Footer Section (`footer.astro`)
- `Built with` -> `Conçu avec`
- `Styled with` -> `Style avec`
- `Deployed on` -> `Déployé sur`
- `All rights reserved.` -> `Tous droits réservés.`

### 8. Accessibility & Global Aria Labels
- `aria-label="GitHub"` -> `aria-label="GitHub"` (Universal)
- `aria-label="LinkedIn"` -> `aria-label="LinkedIn"` (Universal)
- `aria-label="Email"` -> `aria-label="E-mail"`
- `aria-label="Preview"` -> `aria-label="Aperçu"`
- `aria-label="Home"` -> `aria-label="Accueil"` (if applicable)

## Layout Considerations
- **Text expansion:** Some French strings are longer (e.g., "Single Page Applications" -> "Applications à page unique").
- **Strategy:** I will verify the layout responsiveness after translation using the `get_screenshot` tool during the validation phase.
- **Aria Labels:** All `aria-label` attributes will be translated to maintain accessibility (e.g., `GitHub` is universal, but `Preview` -> `Aperçu`).

## Spotify Embed
- I will check if `locale=fr_FR` is valid for the Spotify embed to localize the UI of the player.

## Implementation Plan
1. Update `Layout.astro` (Metadata/Head).
2. Update `nav.astro`.
3. Update `home.astro`.
4. Update `SkillsList.tsx` (React).
5. Update `projects.astro`.
6. Update `contact.astro`.
7. Update `footer.astro`.
8. Validate UI with screenshots.
