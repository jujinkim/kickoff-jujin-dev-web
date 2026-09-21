import taxonomy from "../data/categories.json";
export { default as candidates } from "../data/candidates.json";
export { taxonomy };
export const childrenOf = (parent: string | null) =>
  taxonomy.filter((c) => c.parent === parent).sort((a, b) => a.order - b.order);
export function ancestors(id: string): typeof taxonomy {
  const node = taxonomy.find((c) => c.id === id);
  return node ? [...(node.parent ? ancestors(node.parent) : []), node] : [];
}
