# Static site generators / 정적 사이트 생성기 / 静的サイトジェネレーター

Group ID: `static-generators` · Checked: 2026-09-22 · Original comparison contract; [implemented release review](../../platform-demos-review.md).

## Shared case and comparison contract

Build a three-article reading site from Markdown: index, article pages, shared header and optional browser-side Save control. Build output is static HTML/assets; user-specific persistence is a separate service.

**Comparison axes, fixed order:** content input; template model; build environment; output artifact; optional interactivity; deployment boundary.

**Boundary:** Compare static-generation workflows, not every framework capability. Astro also supports server rendering; none of these tools is itself the hosting service. No invented build-time benchmark.

**Visual family:** Source files → template/build step → generated files → static host → browser, with optional API drawn separately.

**Core terms (EN / KO / JA):** Build time / 빌드 시점 / ビルド時; Template / 템플릿 / テンプレート; Static output / 정적 산출물 / 静的出力.

## Sibling review matrix

Rows share comparison dimensions and assumptions; published articles use distinct situations. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                           | Distinguishing feature                                                | Conditional advantage                                                                  | Limitation                                                                                     | Suitable context                                                            | Combination                                                                            |
| ------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [Astro / Astro / Astro](../articles/astro.md)     | Content rendering with opt-in client interactivity [astro].           | The example can keep article text static and isolate the Save control.                 | Cross-island state and personalized persistence need explicit design.                          | A content catalog with a few interactive controls.                          | Use React, Vue or Svelte for an island and static hosting for generated pages.         |
| [Hugo / Hugo / Hugo](../articles/hugo.md)         | Static generation with a template system [hugo].                      | The proposed site has one build step and no article-rendering process at request time. | Template learning and separately supplied browser interactivity remain project work.           | A documentation or publication workflow centered on content files.          | Use static hosting and optional JavaScript widgets; keep private data behind an API.   |
| [Jekyll / Jekyll / Jekyll](../articles/jekyll.md) | Static content transformation through a Ruby-based workflow [jekyll]. | The example can reuse layouts across article files.                                    | Build dependencies must be maintained; dynamic personalization is outside the static artifact. | A team already comfortable with a content-and-template publishing workflow. | Build with CI, host generated files statically, and add a separate Save API if needed. |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[astro]: https://docs.astro.build/en/concepts/why-astro/
[hugo]: https://gohugo.io/about/introduction/
[jekyll]: https://jekyllrb.com/docs/
