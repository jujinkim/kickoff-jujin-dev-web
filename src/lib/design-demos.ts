import registry from "../data/design-demos.json";
export type DesignId = keyof typeof registry;
export const designDemos = registry;
export const designIds = Object.keys(registry) as DesignId[];
export function isDesignId(id: string): id is DesignId {
  return Object.hasOwn(registry, id);
}
