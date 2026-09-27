// Keep generated PNG originals and their public URLs; serve small derivatives.
import sharp from "sharp";
import { readdir, stat, writeFile } from "node:fs/promises";
const directory = "public/images";
const report = [];
for (const file of (await readdir(directory)).filter((f) =>
  f.endsWith(".png"),
)) {
  const input = `${directory}/${file}`;
  const variants = [];
  for (const width of [320, 640, 960, 1440]) {
    const output = `${directory}/${file.replace(/\.png$/, "")}-${width}.webp`;
    const result = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6 })
      .toFile(output);
    variants.push({ file: output, width: result.width, bytes: result.size });
  }
  report.push({ original: file, bytes: (await stat(input)).size, variants });
}
await writeFile(
  `${directory}/optimized.json`,
  JSON.stringify(report, null, 2) + "\n",
);
console.log(
  JSON.stringify(
    report.map((r) => ({
      file: r.original,
      original: r.bytes,
      mobile: r.variants[1].bytes,
      reduction: `${(100 * (1 - r.variants[1].bytes / r.bytes)).toFixed(1)}%`,
    })),
    null,
    2,
  ),
);
