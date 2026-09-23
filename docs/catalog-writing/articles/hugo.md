# Hugo / Hugo / Hugo

Original writing design; implemented article and demo: [review](../../platform-demos-review.md). ID: `hugo` · Group: [static-generators](../groups/static-generators.md) · Queue order: 701 · Checked: 2026-09-22.

## Reader question and scope

**Question:** What does a template-driven static build do with Markdown content?

**Include:** Explain Hugo content, templates and generated static assets using the three-article site.

**Exclude:** Comparative speed numbers, plugin catalogs and Go application development.

**Prevent confusion:** Hugo is written in Go; content authors do not need to turn articles into Go programs.

**Terms (EN / KO / JA):** Hugo / Hugo / Hugo; Content file / 콘텐츠 파일 / コンテンツファイル. Also use the [group terms](../groups/static-generators.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain Hugo content, templates and generated static assets using the three-article site. Explain the distinguishing mechanism: Static generation with a template system [hugo]. Immediately separate the nearby concept: Hugo is written in Go; content authors do not need to turn articles into Go programs.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: three Markdown files, site configuration and templates. Initial: no built files. Action: run the generator. Result: index, article HTML and assets ready for a static host.

### 3. Advantages and limitations

Explain the conditional benefit: The proposed site has one build step and no article-rendering process at request time. Then show its boundary: Template learning and separately supplied browser interactivity remain project work. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [astro](astro.md), [jekyll](jekyll.md).

Use the shared axes, in this order: **content input; template model; build environment; output artifact; optional interactivity; deployment boundary**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/static-generators.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A documentation or publication workflow centered on content files.

**Unsuitable:** Expecting server-side per-user behavior from generated files alone.

**Combine:** Use static hosting and optional JavaScript widgets; keep private data behind an API.

### 6. Related reading and sources

Link existing guides: [static-sites](../../../src/content/articles/en/static-sites.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                          |
| -------------- | -------------------------------------------------------------------------------------- |
| `features`     | Static generation with a template system [hugo].                                       |
| `advantages`   | The proposed site has one build step and no article-rendering process at request time. |
| `limitations`  | Template learning and separately supplied browser interactivity remain project work.   |
| `suitable`     | A documentation or publication workflow centered on content files.                     |
| `combinations` | Use static hosting and optional JavaScript widgets; keep private data behind an API.   |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                      | Exact location to consult | Claim boundary                                                                                        | Checked    |
| --------------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| [hugo](https://gohugo.io/about/introduction/) | Introduction; Features    | [Verified claim and context](../sources.md#hugo); apply only to this mechanism, not general rankings. | 2026-09-22 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What does a template-driven static build do with Markdown content?” through the fixture rather than a decorative illustration.

**Shared input:** Build a three-article reading site from Markdown: index, article pages, shared header and optional browser-side Save control. Build output is static HTML/assets; user-specific persistence is a separate service.

**Form and composition:** Source files → template/build step → generated files → static host → browser, with optional API drawn separately.

**Interaction/state script:** Input: three Markdown files, site configuration and templates. Initial: no built files. Action: run the generator. Result: index, article HTML and assets ready for a static host.

**Annotations, caption and topic acceptance:** Label content, template and output directories by role, avoiding version-specific folder recipes. Caption: Templates resolve before visitors request pages. Accept if diagram keeps build tool off the request path.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[hugo]: https://gohugo.io/about/introduction/
