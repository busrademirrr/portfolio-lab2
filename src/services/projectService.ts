import type { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  // Simulating network delay for realism
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const response = await fetch("/data/projects.json");
  if (!response.ok) {
    throw new Error("Projeler yüklenirken bir hata oluştu.");
  }
  return response.json();
}
