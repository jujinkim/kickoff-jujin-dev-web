# Astro / Astro / Astro

Writing design only. ID: `astro` · Group: [static-generators](../groups/static-generators.md) · Queue order: 700 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How does Astro turn content into pages while adding selected interactive UI?

**Include:** Explain content-oriented component rendering and optional interactive islands in a static build.

**Exclude:** Server-adapter setup, latest-version ranking and benchmark promises.

**Prevent confusion:** Astro is not limited to static output; an island is not a separate website.

**Terms (EN / KO / JA):** Astro / Astro / Astro; Island / 아일랜드 / アイランド. Also use the [group terms](../groups/static-generators.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain content-oriented component rendering and optional interactive islands in a static build. Explain the distinguishing mechanism: Content rendering with opt-in client interactivity [astro]. Immediately separate the nearby concept: Astro is not limited to static output; an island is not a separate website.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: three Markdown records and a shared layout. Initial: source-only project. Action: build pages and attach one optional Save island. Result: three readable article pages and index; Save behavior requires its own client/service design.

### 3. Advantages and limitations

Explain the conditional benefit: The example can keep article text static and isolate the Save control. Then show its boundary: Cross-island state and personalized persistence need explicit design. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [hugo](hugo.md), [jekyll](jekyll.md).

Use the shared axes, in this order: **content input; template model; build environment; output artifact; optional interactivity; deployment boundary**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/static-generators.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A content catalog with a few interactive controls.

**Unsuitable:** Assuming a static build can privately store each reader’s saves without another service.

**Combine:** Use React, Vue or Svelte for an island and static hosting for generated pages.

### 6. Related reading and sources

Link existing guides: [static-sites](../../../src/content/articles/en/static-sites.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                  |
| -------------- | ------------------------------------------------------------------------------ |
| `features`     | Content rendering with opt-in client interactivity [astro].                    |
| `advantages`   | The example can keep article text static and isolate the Save control.         |
| `limitations`  | Cross-island state and personalized persistence need explicit design.          |
| `suitable`     | A content catalog with a few interactive controls.                             |
| `combinations` | Use React, Vue or Svelte for an island and static hosting for generated pages. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                 | Exact location to consult              | Claim boundary                                                                                         | Checked    |
| -------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| [astro](https://docs.astro.build/en/concepts/why-astro/) | Features; Content-driven; Server-first | [Verified claim and context](../sources.md#astro); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How does Astro turn content into pages while adding selected interactive UI?” through the fixture rather than a decorative illustration.

**Shared input:** Build a three-article reading site from Markdown: index, article pages, shared header and optional browser-side Save control. Build output is static HTML/assets; user-specific persistence is a separate service.

**Form and composition:** Source files → template/build step → generated files → static host → browser, with optional API drawn separately.

**Interaction/state script:** Input: three Markdown records and a shared layout. Initial: source-only project. Action: build pages and attach one optional Save island. Result: three readable article pages and index; Save behavior requires its own client/service design.

**Annotations, caption and topic acceptance:** Mark which output contains HTML and which optional chunk supplies interactivity. Caption: Content output and interactive code have separate roles. Accept if all article text remains available without the island.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[astro]: https://docs.astro.build/en/concepts/why-astro/
