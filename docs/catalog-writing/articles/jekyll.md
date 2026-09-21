# Jekyll / Jekyll / Jekyll

Writing design only. ID: `jekyll` · Group: [static-generators](../groups/static-generators.md) · Queue order: 702 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How do content and templates become a blog-aware static site?

**Include:** Explain the Ruby-based Jekyll build workflow and Markdown/template inputs.

**Exclude:** Hosted-platform plugin restrictions and Ruby version installation advice.

**Prevent confusion:** Jekyll generation and GitHub Pages hosting are distinct choices.

**Terms (EN / KO / JA):** Jekyll / Jekyll / Jekyll; Front matter / 프런트매터 / フロントマター. Also use the [group terms](../groups/static-generators.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain the Ruby-based Jekyll build workflow and Markdown/template inputs. Explain the distinguishing mechanism: Static content transformation through a Ruby-based workflow [jekyll]. Immediately separate the nearby concept: Jekyll generation and GitHub Pages hosting are distinct choices.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: three Markdown articles with metadata and templates. Initial: source files. Action: build using the project’s Ruby dependencies. Result: static article pages and index, without a Ruby process serving each request.

### 3. Advantages and limitations

Explain the conditional benefit: The example can reuse layouts across article files. Then show its boundary: Build dependencies must be maintained; dynamic personalization is outside the static artifact. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [astro](astro.md), [hugo](hugo.md).

Use the shared axes, in this order: **content input; template model; build environment; output artifact; optional interactivity; deployment boundary**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/static-generators.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A team already comfortable with a content-and-template publishing workflow.

**Unsuitable:** Choosing it solely because hosting supposedly requires it.

**Combine:** Build with CI, host generated files statically, and add a separate Save API if needed.

### 6. Related reading and sources

Link existing guides: [static-sites](../../../src/content/articles/en/static-sites.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `features`     | Static content transformation through a Ruby-based workflow [jekyll].                          |
| `advantages`   | The example can reuse layouts across article files.                                            |
| `limitations`  | Build dependencies must be maintained; dynamic personalization is outside the static artifact. |
| `suitable`     | A team already comfortable with a content-and-template publishing workflow.                    |
| `combinations` | Build with CI, host generated files statically, and add a separate Save API if needed.         |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                             | Exact location to consult                 | Claim boundary                                                                                          | Checked    |
| ------------------------------------ | ----------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [jekyll](https://jekyllrb.com/docs/) | Quickstart steps 1–5; opening description | [Verified claim and context](../sources.md#jekyll); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How do content and templates become a blog-aware static site?” through the fixture rather than a decorative illustration.

**Shared input:** Build a three-article reading site from Markdown: index, article pages, shared header and optional browser-side Save control. Build output is static HTML/assets; user-specific persistence is a separate service.

**Form and composition:** Source files → template/build step → generated files → static host → browser, with optional API drawn separately.

**Interaction/state script:** Input: three Markdown articles with metadata and templates. Initial: source files. Action: build using the project’s Ruby dependencies. Result: static article pages and index, without a Ruby process serving each request.

**Annotations, caption and topic acceptance:** Distinguish build environment from static serving. Caption: Ruby builds pages; the host serves output files. Accept if optional hosting integration is not presented as mandatory.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[jekyll]: https://jekyllrb.com/docs/
