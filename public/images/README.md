# Demo image provenance

Created 2026-09-26 with the built-in imagegen tool for kickoff.md. No input image or
third-party photograph was used. These are fictional illustrative assets, not
photographic evidence of a real place or a tested recipe. No stock-photo license
or third-party attribution is attached. Keep this provenance with reuse; repository
and generation-service terms apply. No exclusive copyright claim is made.

- `lake-walk.png`: 1536 × 1024 PNG; used by Glassmorphism and the fictional photo
  subscription album. Original output: `exec-01d07a2c-3548-4ce1-9447-38fda940fcac.png`.
- `tomato-pasta.png`: 1536 × 1024 PNG; used by the sidebar recipe browser.
  Original output: `exec-b8664347-db73-439d-aedf-96b0b3087ca2.png`.

## Prompts

Lake:

> Use case: photorealistic-natural. Asset type: local website demo background, wide landscape photograph. Primary request: an original editorial travel photograph of a quiet mountain lake surrounded by pine trees, a walking path curves along shoreline from foreground to distance, misty blue mountains beyond, soft early morning light. Composition: 3:2 landscape, lake water and mountain on left and middle, pine trees along right edge; full bleed photograph to sit behind real HTML frosted-glass route information cards. Natural rich forest greens, pale sky, blue lake, fine photographic textures, believable scale. No text, logos, UI, borders, people or watermark.

Recipe:

> Use case: photorealistic-natural. Asset type: original editorial food photograph for a recipe browser. Primary request: a white shallow ceramic bowl with fresh tomato basil pasta, a few cherry tomatoes and basil leaves alongside, warm ivory linen tablecloth on a pale wood kitchen table. Composition landscape 3:2, overhead three-quarter angle, bowl dominates frame, natural side-window light and soft shadows. Rich tomato red, fresh green basil, appetizing real textures, refined independent cooking magazine photography. No text, labels, hands, packaging, logo or watermark. Not a website screenshot; photograph only.

Font provenance and OFL license files: `../fonts/manifest.json`, `../fonts/*-OFL.txt`.
No external font stylesheet is required by the shared shell.

## Expansion assets — 2026-09-27

Generated with the built-in imagegen tool, without input images. These are fictional
illustrations rendered as photographs, not evidence of a real place or botanical
identification. Same reuse conditions as the assets above. No UI text is embedded.

| File               | Original output                               | Prompt                                                                                                                                                    |
| ------------------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| beach-diary.png    | exec-79149226-a485-4917-80e0-f07919e4d9d7.png | Original editorial photograph of a quiet sandy beach, turquoise shallow sea, gentle foam, dune grasses, open blue sky, soft morning light. Landscape 3:2. |
| harbor-diary.png   | exec-d12e341b-73f0-48fa-9f8d-27fc4151b26f.png | Original editorial photograph of a small coastal harbor, colorful wooden fishing boats, stone quay, pastel buildings, evening reflections. Portrait 2:3.  |
| fern-plant.png     | exec-e803addd-ccc7-422d-954f-1e36570bdf76.png | Boston fern with arching green fronds in a plain terracotta pot on an ivory shelf. Square, whole plant, soft daylight, realistic texture.                 |
| monstera-plant.png | exec-4676e909-34f4-49b5-a59f-34f11cdf547e.png | Young Monstera deliciosa, three broad split glossy leaves, plain cream ceramic pot, pale shelf. Square, whole plant, soft daylight, realistic texture.    |
| rosemary-plant.png | exec-072b8a51-9555-40d7-9853-675366d8008a.png | Compact rosemary bush, needlelike green leaves, terracotta pot, pale shelf. Square, whole plant, soft daylight, realistic texture.                        |

All prompts use `photorealistic-natural`, request website assets, and prohibit
people, text, labels, logos, UI and watermarks; plant prompts prohibit other plants.
Original generation folder: `01a0de61-669a-7b73-b42e-ae9237cbc112`.

## Delivery derivatives — 2026-09-27

Original generated PNGs and public URLs are retained for provenance and compatibility.
Article screens serve WebP derivatives at 320/640/960/1440 target widths, capped at
the source dimensions. `scripts/optimize-demo-images.mjs` uses Sharp, quality 72,
effort 6, no enlargement. `optimized.json` records exact byte counts and dimensions.
`src/components/demos/photos.ts` supplies matching width descriptors and lazy
loading; the first photo in Liquid Glass is eager and hidden photos are lazy.
The optical layer reuses the selected photo; it creates no new image request.

Catalog previews use 720px-wide WebP at quality 74. The thumbnail generator retains
full PNG captures and their existing URLs as review/compatibility assets. Pages
request WebP only. New formats inherit the original generation provenance and
usage conditions above.
