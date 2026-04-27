export type Category = "frontend" | "backend" | "fullstack" | "AI";
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured?: boolean;
}
