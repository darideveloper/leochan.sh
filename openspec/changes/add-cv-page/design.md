# Design: Dedicated CV Page

## Data Structure
Extracted data will be stored in `src/data/cv.ts`. This structure will match the properties currently defined in `src/components/cv.astro`.

```typescript
export interface CVData {
  name: string;
  role: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    drivingLicense: string;
  };
  aboutMe: string;
  technicalSkills: Array<{
    category: string;
    skills: Array<{ name: string; details: string }>;
  }>;
  experience: Array<{
    date: string;
    company: string;
    role: string;
  }>;
  education: Array<{
    date: string;
    institution: string;
    details: string[];
  }>;
  projects: Array<{
    title: string;
    tasks: string[];
  }>;
  aeronautical: string[];
  languages: Array<{ name: string; level: string }>;
  interests: string[];
}
```

## Component Architecture
- **`src/components/cv.astro`:** Update to receive `cvData` from `src/data/cv.ts` as a default. It will retain its current visual styling.
- **`src/pages/cv.astro`:** A standard Astro page using `Layout.astro` and the `CV` component.

## Layout Differences
The `/cv` page will use the standard `Layout`, which includes the `TerminalBackground` and `StartupSequence`. This maintains the "Nekocorp" branding across all pages.
The `CV` component itself will be rendered in a `main` element with appropriate padding.
