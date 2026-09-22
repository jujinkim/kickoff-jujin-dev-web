import taxonomy from "../data/categories.json";
import allCandidates from "../data/candidates.json";
import { categoryReplacement } from "./catalog-scope";
export { taxonomy };
export const activeTaxonomy = taxonomy.filter(
  (c) => !categoryReplacement(c.id),
);
export const candidates = allCandidates.filter(
  (c) => !categoryReplacement(c.category),
);
export const childrenOf = (parent: string | null) =>
  activeTaxonomy
    .filter((c) => c.parent === parent)
    .sort((a, b) => a.order - b.order);
export function ancestors(id: string): typeof taxonomy {
  const node = taxonomy.find((c) => c.id === id);
  return node ? [...(node.parent ? ancestors(node.parent) : []), node] : [];
}
