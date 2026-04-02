export interface ProjectSummary {
  id: string;
  title: string;
  image?: string | null;
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

const API_URL = (import.meta.env.PUBLIC_API_URL || 'http://localhost:8000/api').replace(/\/$/, '');

/**
 * Returns a summary of all projects (simulating a list endpoint)
 */
export async function getProjects(): Promise<ProjectSummary[]> {
  const url = `${API_URL}/projects/`;
  console.log(`[DEBUG] Fetching projects from: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`[ERROR] Projects fetch failed: ${response.status} ${response.statusText} at ${url}`);
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`[DEBUG] Projects list fetched successfully`);
    return data;
  } catch (error) {
    console.error("[ERROR] getProjects exception:", error);
    return [];
  }
}

/**
 * Returns full details for a single project (simulating a detail endpoint)
 */
export async function getProjectById(id: string): Promise<ProjectDetail | undefined> {
  const url = `${API_URL}/projects/${id}/`;
  console.log(`[DEBUG] Fetching project ${id} from: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`[ERROR] Project ${id} fetch failed: ${response.status} ${response.statusText} at ${url}`);
      throw new Error(`Failed to fetch project ${id}: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`[DEBUG] Project ${id} detail fetched successfully`);
    return data;
  } catch (error) {
    console.error(`[ERROR] getProjectById exception for ${id}:`, error);
    return undefined;
  }
}
