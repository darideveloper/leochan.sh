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

const API_URL = (import.meta.env.PUBLIC_API_URL || 'http://localhost:8000/api').replace(/\/$/, '');

export async function getCVData(): Promise<CVData | undefined> {
  const url = `${API_URL}/cv/`;
  console.log(`[DEBUG] Fetching CV data from: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`[ERROR] CV Fetch failed: ${response.status} ${response.statusText} at ${url}`);
      throw new Error(`Failed to fetch CV data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`[DEBUG] CV Data fetched successfully`);
    return data;
  } catch (error) {
    console.error("[ERROR] getCVData exception:", error);
    return undefined;
  }
}

export default getCVData;
