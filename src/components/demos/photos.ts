// Intrinsic width descriptors match generated files, including square/portrait sources.
export function photo(
  file: string,
  sizes = "(max-width: 640px) 100vw, 960px",
  loading: "lazy" | "eager" = "lazy",
) {
  const name = file.replace(/\.png$/, "");
  const max =
    name === "harbor-diary" ? 1024 : name.endsWith("-plant") ? 1254 : 1536;
  return {
    src: `/images/${name}-640.webp`,
    srcset: [320, 640, 960, 1440]
      .map((width) => `/images/${name}-${width}.webp ${Math.min(width, max)}w`)
      .join(", "),
    sizes,
    loading,
    decoding: "async" as const,
  };
}
