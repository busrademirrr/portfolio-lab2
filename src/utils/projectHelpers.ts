import { Project, Category, SortField, SortOrder } from "../types/project";

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let result = [...projects];

  // Arama Filtresi
  if (search.trim() !== "") {
    const lowerSearch = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerSearch) ||
        p.description.toLowerCase().includes(lowerSearch) ||
        p.tech.some((t) => t.toLowerCase().includes(lowerSearch))
    );
  }

  // Kategori Filtresi
  if (category !== "all") {
    result = result.filter((p) => p.category === category);
  }

  // Sıralama
  result.sort((a, b) => {
    let comparison = 0;
    if (sortField === "year") {
      comparison = a.year - b.year;
    } else if (sortField === "title") {
      comparison = a.title.localeCompare(b.title);
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return result;
}
