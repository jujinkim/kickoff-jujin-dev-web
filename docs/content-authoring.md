# Catalog and guide authoring

This guide describes the authoring workflow. The first seven styles are documented in the [styles release review](catalog-writing/styles-review.md); the other 51 candidates remain planned.

## Shared data and routes

- `src/data/categories.json` is the single taxonomy: stable language-independent ID, nullable parent, localized names/descriptions, sibling order. Roots are navigation shelves; concepts belong to one leaf comparison group.
- `src/data/candidates.json` holds 58 initial candidates: stable ID, leaf category, en/ko/ja titles, scope, comparison peers, related guide IDs, writing order. Public pending names and the writing queue use this file.
- `npm run content:new -- --list` shows writing order and computed English status. No file means `planned`; existing `draft` or `published` frontmatter determines subsequent states. Public pages expose only published text; an untranslated or draft candidate still displays its fixed candidate name as coming soon, with no article link.
- Concepts: `/{lang}/catalog/{articleId}/`; categories: `/{lang}/catalog/categories/{categoryId}/`; guides: `/{lang}/guides/{articleId}/`. Replace final slash with `.md` for article Markdown.
- Legacy guide `/catalog/{articleId}/` routes are noindex static redirects with canonical guide links. Legacy Markdown serves the same source and declares the new canonical. IDs, comments and translation identity do not change.
- `/ai/catalog.json` schema version 1 includes `kind`, taxonomy hierarchy and published comparison summaries. Candidates are not articles. Draft bodies never enter HTML, Markdown, Pagefind, sitemap, llms.txt or AI article lists.

## Generate draft scaffolds

```sh
npm run content:new -- --id brutalism
npm run content:new -- --list
```

Creates English source and Korean/Japanese draft scaffolds, all `status: draft`. Refuses the entire operation if any target already exists. No LLM call, body generation or automatic publishing. Template implementation: `scripts/content-new.mjs` and localized sections in `scripts/catalog-data.mjs`.

Concept template:

1. Definition
2. Features and examples
3. Advantages and limitations
4. Comparison within the category
5. Selection and combination conditions
6. Related reading and sources

Title is the concept name. Frontmatter `comparison` requires `features`, `advantages`, `limitations`, `suitable`, `combinations`. The shared component renders these exact summaries in the article and category table; do not maintain a second conflicting summary. `aiPrompt` and the existing `example` preview are optional for concepts. Guides retain their existing sections, prompts and previews.

## Generation brief

Start with the [catalog writing designs](catalog-writing/README.md): 19 group briefs, 58 candidate briefs, a shared multilingual glossary, and a verified source ledger. Each brief maps to the six sections above and specifies its example, comparison points, evidence locations, and required accessible visualization. These are local preparation materials, not published articles. Review the group's English originals before Korean/Japanese translation; refresh dated sources when drafting. The existing generator still scaffolds one selected candidate at a time.

Read candidate scope, all sibling candidate IDs, related guides, and current project instructions before drafting. Cover one concept only. Distinguish it from homonyms and nearby abstractions. Use the same five comparison dimensions for all siblings, with explicit context and concrete examples. Describe costs and limitations alongside benefits. Explain when choices can coexist: a typeface width, visual style and layout are independent axes; styles can combine. Do not invent mutually exclusive choices or include individual font products.

Verify original authors and official sources before asserting attribution, definitions or product capabilities. Check volatile product/service claims at writing time and record `checked` plus dated source context; avoid unsupported pricing/version claims. Separate source-backed facts from author judgment and conditional advice. Include primary source links and a concrete textual/code example. Never fill comparison tables from candidate titles alone.

Write and review English first; Korean/Japanese preserve scope, evidence and caveats. Keep `articleId`, `kind`, `category`, `related` and preview choice consistent across translations. `sourceRevision` identifies reviewed English revision. Set `published` only after editorial review; placeholders must not remain.

Start with the complete styles group: brutalism, neobrutalism, glassmorphism, neumorphism, skeuomorphism, flat design and minimalism. Draft and review the group together, including cross-comparison and combination conditions, before advancing to other groups. Remaining order comes from candidate `order`.

Use `related` IDs to link published concepts and guides. Rendering adds incoming relationships so a concept linked to a guide appears back on that guide. Draft relationships never render. References to an unissued peer stay prose or candidate metadata until that peer is published; do not create broken body links.

## Gates

Run `npm run check`, `npm run build`, `npm test`, `npm run test:e2e`. Tests exercise taxonomy failures, scaffold overwrite protection, guide aliases, and isolated concept publication/draft exclusion. Publication fixtures live in a temporary copy and are removed after verification. Browser tests target built `dist`, not development output.
