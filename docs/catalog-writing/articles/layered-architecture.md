# Layered architecture / 계층형 아키텍처 / レイヤードアーキテクチャ

Research brief; concise article and static diagram implemented. See [release review](../../boundaries-review.md). ID: `layered-architecture` · Group: [boundaries](../groups/boundaries.md) · Queue order: 200 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How do presentation, business rules and persistence divide a save operation?

**Include:** Explain logical presentation, application and data layers with explicit allowed dependencies.

**Exclude:** Infrastructure tier sizing and distributed-service decomposition.

**Prevent confusion:** A layer is not a server tier; folder names do not enforce boundaries.

**Terms (EN / KO / JA):** Layered architecture / 계층형 아키텍처 / レイヤードアーキテクチャ; Layer / 계층 / レイヤー. Also use the [group terms](../groups/boundaries.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain logical presentation, application and data layers with explicit allowed dependencies. Explain the distinguishing mechanism: Responsibility layers constrain dependencies [layers]. Immediately separate the nearby concept: A layer is not a server tier; folder names do not enforce boundaries.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: SaveArticle(A17). Initial: no save. Action: presentation calls application, application calls persistence. Result: stored save returned to presentation; replace UI without relocating validation.

### 3. Advantages and limitations

Explain the conditional benefit: The team can locate validation and persistence responsibilities consistently. Then show its boundary: Pass-through layers add ceremony; bypasses need a documented policy. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [hexagonal-architecture](hexagonal-architecture.md), [clean-architecture](clean-architecture.md).

Use the shared axes, in this order: **responsibility boundary; source dependency direction; runtime calls; replaceable edge; test seam; added indirection**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/boundaries.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A small application with stable responsibilities.

**Unsuitable:** Adding layers that only relay every call unchanged.

**Combine:** Use dependency inversion at persistence boundaries; deploy the layers inside a modular monolith.

### 6. Related reading and sources

Link existing guides: [architecture](../../../src/content/articles/en/architecture.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `features`     | Responsibility layers constrain dependencies [layers].                                           |
| `advantages`   | The team can locate validation and persistence responsibilities consistently.                    |
| `limitations`  | Pass-through layers add ceremony; bypasses need a documented policy.                             |
| `suitable`     | A small application with stable responsibilities.                                                |
| `combinations` | Use dependency inversion at persistence boundaries; deploy the layers inside a modular monolith. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                                        | Exact location to consult                                        | Claim boundary                                                                                          | Checked    |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [layers](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) | N-tier architecture style opening; When to use this architecture | [Verified claim and context](../sources.md#layers); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How do presentation, business rules and persistence divide a save operation?” through the fixture rather than a decorative illustration.

**Shared input:** SaveArticle receives reader ID and article ID, rejects invalid input, records a save and returns Saved. Compare HTTP UI and command-line entry, plus memory and database storage. Keep deployment as one process.

**Form and composition:** Dependency diagram with solid arrows for imports, dashed arrows for runtime calls and a dotted deployment enclosure.

**Interaction/state script:** Input: SaveArticle(A17). Initial: no save. Action: presentation calls application, application calls persistence. Result: stored save returned to presentation; replace UI without relocating validation.

**Annotations, caption and topic acceptance:** Name three boxes and label imports separately from call returns. Caption: Logical layers can share one deployment. Accept if no box is mistaken for a required machine.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Published implementation and verification are recorded in the linked release review.

[layers]: https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier
