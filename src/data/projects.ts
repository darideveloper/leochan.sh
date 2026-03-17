import type { ImageMetadata } from "astro";
import moviesfordevs from "../../public/moviesfordevs.png";
import stockin from "../../public/stockin.png";
import svgl from "../../public/svgl.png";
import velez from "../../public/velez.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: ImageMetadata;
  link: string; // GitHub/Source
  preview: string; // Live demo
  status: string;
  technologies: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: "movies-for-devs",
    title: "MoviesForDevs",
    description: "A specialized movie discovery platform for developers.",
    fullDescription: "MoviesForDevs is a specialized movie discovery platform designed for the developer community. It features a curated list of films that resonate with tech enthusiasts, from cyberpunk classics to documentaries about the birth of the internet. Built with high performance and developer experience in mind.",
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
    fullDescription: "StockIn is a modern, intuitive inventory management system designed to help small businesses track their stock in real-time. It features automated alerts, detailed reporting, and a mobile-responsive interface for on-the-go management.",
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
    fullDescription: "Svgl is a beautiful library of SVG logos for the most popular brands and technologies. It's an open-source project where developers can contribute and find high-quality assets for their projects. I contributed to the infrastructure and logo management features.",
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
    fullDescription: "Rifas Velez is a robust e-commerce platform specialized in digital raffles. It handles high-concurrency ticket sales, secure payment processing, and automated winner selection. The system is designed to be highly transparent and secure for both organizers and participants.",
    image: velez as ImageMetadata,
    link: "https://github.com/Buga-Software/rifasvelez-web",
    preview: "https://www.rifasvelez.com",
    status: "Deployed",
    technologies: ["Astro", "React", "Firebase", "Stripe"],
    date: "2023",
  },
];

export function getProjects() {
  return projects;
}

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
