export interface TechnicalSkill {
  name: string;
  details: string;
}

export interface TechnicalCategory {
  category: string;
  skills: TechnicalSkill[];
}

export interface Experience {
  date: string;
  company: string;
  role: string;
}

export interface Education {
  date: string;
  institution: string;
  details: string[];
}

export interface Project {
  title: string;
  tasks: string[];
}

export interface Language {
  name: string;
  level: string;
}

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
  technicalSkills: TechnicalCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  aeronautical: string[];
  languages: Language[];
  interests: string[];
}

export const cvData: CVData = {
  name: "LÉONARD-ANTON LLOSA",
  role: "Future Network & Security Engineer",
  contact: {
    email: "leonard@nekocorp.fr",
    phone: "+33 6 62 38 65 96",
    linkedin: "https://www.linkedin.com/in/leonard-anton-llosa/",
    drivingLicense: "Category B - Vehicle Owner",
  },
  aboutMe: "Passionate about complex systems, from IT to aeronautics, I maintain a dual requirement for technical proficiency and security. My background in the BUT R&T, combined with my field experience at TotalEnergies, has enabled me to master the challenges of network deployment and automation using Ansible and Docker. As a student pilot accustomed to strict procedures, I am aiming for an engineering degree to tackle the ever-evolving challenges of cybersecurity.",
  technicalSkills: [
    {
      category: "SYSTEMS & DEVSECOPS",
      skills: [
        { name: "Virtualization/Containers", details: "Docker (Standalone, Portainer), KVM, Kasm Workspaces (Zero Trust)" },
        { name: "Automation", details: "Ansible, n8n (Industrial environment)" },
        { name: "Services", details: "Apache 2, Bind (DNS), Redis" },
        { name: "OS", details: "Linux (Debian/RHEL), Windows 10/11, macOS" },
      ],
    },
    {
      category: "NETWORKS & CYBERSECURITY",
      skills: [
        { name: "Security", details: "SSO (Authentik, Cisco DUO), LDAP, WAF (Cloudflare/SafeLine)" },
        { name: "Infrastructure", details: "Hardware deployment (Cisco, UniFi), ToIP (3CX PBX)" },
        { name: "Databases", details: "MariaDB, PostgreSQL" },
      ],
    },
    {
      category: "DEVELOPMENT & SCRIPTING",
      skills: [
        { name: "Languages", details: "Python, PHP, HTML5/CSS3" },
        { name: "Scripting", details: "Bash (Linux), Batch/PowerShell (Windows)" },
      ],
    },
  ],
  experience: [
    {
      date: "10/2025 – 08/2026",
      company: "TOTALENERGIES (TGITS) PAU",
      role: "IT Process Automation Engineer",
    },
    {
      date: "04/2025 – 06/2025",
      company: "TOTALENERGIES (TGITS) PAU",
      role: "IT Process Automation Engineer",
    },
  ],
  education: [
    {
      date: "02/2024 – 06/2026",
      institution: "IUT MONT DE MARSAN",
      details: [
        "09/2025 – 06/2026: 3rd Year BUT R&T specialized in Cybersecurity",
        "09/2024 – 06/2025: 2nd Year BUT R&T specialized in Cybersecurity",
        "02/2024 – 06/2024: 1st Year BUT R&T",
      ],
    },
    {
      date: "09/2023 – 01/2024",
      institution: "CPGE ALBI",
      details: ["1st Year Preparatory Class (TSI)"],
    },
    {
      date: "2022 – 2023",
      institution: "LYCÉE SAINT CRICQ PAU",
      details: ["Baccalauréat STI2D specialized in Information Systems & Digital"],
    },
  ],
  projects: [
    {
      title: "Deployment of an IT Network (Homelab \"Nekocorp\")",
      tasks: [
        "Analyzed and designed network architecture (router on a stick)",
        "Sizing, hardware selection, and cost study",
        "Installation and cabling of network equipment",
        "Configuration of IP, routing, NAT/PAT, and services (DHCP, DNS, RADIUS)",
        "Diagnostics, incident resolution, and security hardening (Firewall, IDS/IPS, SIEM)",
      ],
    },
    {
      title: "Automated Watering System (Final Year High School Project)",
      tasks: [
        "Coded in Arduino",
        "Managed using Microsoft Office and Nextcloud project management suite",
        "Weekly progress meetings followed by drafting progress reports",
        "Conducted extensive testing",
      ],
    },
  ],
  aeronautical: [
    "Aircraft Piloting: 20h flight time (+50h on simulator) on Robin DR400",
    "LAPL Student Pilot",
    "Professional Simulator: Airbus A320",
  ],
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "TOEIC 940 (Full linguistic proficiency)" },
  ],
  interests: [
    "Server, endpoint, and network management",
    "PC Gaming",
    "Automobiles & Driving",
    "Aviation",
    "Automotive electronics and mechanics",
    "Video Editing (Adobe Premiere Pro)",
  ],
};

export default cvData;
