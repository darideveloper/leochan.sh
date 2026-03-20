import type { ImageMetadata } from "astro";
import moviesfordevs from "../../public/moviesfordevs.png";
import stockin from "../../public/stockin.png";
import svgl from "../../public/svgl.png";
import velez from "../../public/velez.png";

export interface ProjectSummary {
  id: string;
  title: string;
  image: ImageMetadata;
  link: string; // GitHub/Source
  preview: string; // Live demo
  status: string;
}

export interface ProjectDetail extends ProjectSummary {
  description: string;
  fullDescription: string;
  content: string; // Markdown content
  technologies: string[];
  date: string;
}

export const projects: ProjectDetail[] = [
  {
    id: "movies-for-devs",
    title: "MoviesForDevs",
    description: "A specialized movie discovery platform for developers.",
    fullDescription: "MoviesForDevs is a specialized movie discovery platform designed for the developer community.",
    content: `
# Overview
MoviesForDevs is a specialized movie discovery platform designed specifically for the developer community. It features a curated list of films that resonate with tech enthusiasts, from cyberpunk classics like *Blade Runner* to documentaries about the birth of the internet.

## Key Features
- **Curated Selection**: Hand-picked movies that every developer should watch.
- **High Performance**: Built with **Next.js** and optimized for Core Web Vitals.
- **Developer-Centric UI**: A dark, high-contrast theme that feels like home for any coder.

### Technical Architecture
The platform leverages **SSG (Static Site Generation)** to ensure near-instant load times. The frontend is built with **React** and **Tailwind CSS**, while the movie data is fetched from a specialized internal database.

> "A must-visit for any developer looking for weekend inspiration."
`,
    image: moviesfordevs as ImageMetadata,
    link: "https://github.com/nekocorp/MoviesForDevs",
    preview: "https://movies-for-devs.vercel.app",
    status: "Deployed",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    date: "2024",
  },
  {
    id: "stockin",
    title: "StockIn",
    description: "Modern inventory management system for small businesses.",
    fullDescription: "StockIn is a modern, intuitive inventory management system designed to help small businesses track their stock in real-time.",
    content: `
# Inventory Management Reimagined
StockIn is a modern, intuitive inventory management system designed to help small businesses track their stock in real-time. It eliminates the need for complex spreadsheets and manual counting.

## Core Capabilities
- **Real-time Tracking**: Monitor stock levels across multiple locations instantly.
- **Automated Alerts**: Get notified before you run out of essential items.
- **Detailed Analytics**: Generate reports on sales trends and inventory turnover.

### Built for Reliability
The system is built on a robust **Node.js** backend with a **MongoDB** database, ensuring data integrity even during high-concurrency periods. The mobile-responsive interface allows managers to check stock from anywhere.

- Automated stock replenishment logic.
- Secure, role-based access control.
- Integration with popular POS systems.
`,
    image: stockin as ImageMetadata,
    link: "https://github.com/nekocorp/stockin-demo",
    preview: "https://stockin-demo.vercel.app",
    status: "In development",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
    date: "2024",
  },
  {
    id: "svgl",
    title: "Svgl.app",
    description: "Open source library of SVG logos for popular brands.",
    fullDescription: "Svgl is a beautiful library of SVG logos for the most popular brands and technologies.",
    content: `
# The Best SVG Logos
Svgl is a beautiful, open-source library of SVG logos for the most popular brands and technologies. It's a community-driven project that provides developers with high-quality assets for their websites and applications.

## My Contributions
- **Infrastructure Automation**: Improved the CI/CD pipeline for faster logo processing.
- **Logo Management**: Implemented a more efficient system for categorizing and searching logos.
- **Community Support**: Reviewed and merged numerous community contributions.

### Tech Stack
Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, the project focuses on extreme performance and ease of use. It uses a specialized parsing engine to ensure all logos are clean and optimized.

*   Over 1,000+ logos available.
*   Highly optimized SVG output.
*   Open-source and free forever.
`,
    image: svgl as ImageMetadata,
    link: "https://github.com/pheralb/svgl",
    preview: "https://svgl.app",
    status: "Contributor",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2023",
  },
  {
    id: "rifas-velez",
    title: "Rifas Velez Web",
    description: "E-commerce platform for digital raffles and contests.",
    fullDescription: "Rifas Velez is a robust e-commerce platform specialized in digital raffles.",
    content: `
# Digital Raffle Platform
Rifas Velez is a robust e-commerce platform specialized in digital raffles and contests. It provides a secure and transparent environment for both organizers and participants.

## Advanced Features
- **High-Concurrency Ticket Sales**: Handles thousands of simultaneous transactions during peak periods.
- **Secure Payments**: Integrated with **Stripe** for reliable and safe ticket purchases.
- **Automated Winners**: Uses a verifiable random number generator for fair draws.

### Scale and Security
Built using **Astro** for the frontend and **Firebase** for real-time data and authentication. The architecture is designed to scale horizontally to meet the demands of large-scale national contests.

1.  Secure user authentication via Google/Email.
2.  Real-time ticket availability updates.
3.  Automated email notifications for winners.
`,
    image: velez as ImageMetadata,
    link: "https://github.com/Buga-Software/rifasvelez-web",
    preview: "https://www.rifasvelez.com",
    status: "Deployed",
    technologies: ["Astro", "React", "Firebase", "Stripe"],
    date: "2023",
  },
];

/**
 * Returns a summary of all projects (simulating a list endpoint)
 */
export function getProjects(): ProjectSummary[] {
  return projects.map(({ id, title, image, link, preview, status }) => ({
    id,
    title,
    image,
    link,
    preview,
    status,
  }));
}

/**
 * Returns full details for a single project (simulating a detail endpoint)
 */
export function getProjectById(id: string): ProjectDetail | undefined {
  return projects.find((p) => p.id === id);
}
