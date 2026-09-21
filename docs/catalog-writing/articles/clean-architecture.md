# Clean architecture / 클린 아키텍처 / クリーンアーキテクチャ

Writing design only. ID: `clean-architecture` · Group: [boundaries](../groups/boundaries.md) · Queue order: 202 · Checked: 2026-09-21.

## Reader question and scope

**Question:** Which code may know about the database and which must stay independent?

**Include:** Explain inward source dependencies, use-case orchestration, entities and boundary data for saving.

**Exclude:** Mandatory four-folder recipes and framework implementation tutorials.

**Prevent confusion:** Runtime calls can travel outward through interfaces while source dependencies remain inward.

**Terms (EN / KO / JA):** Clean architecture / 클린 아키텍처 / クリーンアーキテクチャ; Dependency inversion / 의존성 역전 / 依存性逆転. Also use the [group terms](../groups/boundaries.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain inward source dependencies, use-case orchestration, entities and boundary data for saving. Explain the distinguishing mechanism: Source dependencies point toward policy [clean]. Immediately separate the nearby concept: Runtime calls can travel outward through interfaces while source dependencies remain inward.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: HTTP save DTO for A17. Initial: no domain save. Action: controller maps input → use case → repository interface → database adapter. Result: simple output DTO, no ORM row crosses into policy.

### 3. Advantages and limitations

Explain the conditional benefit: Save rules can be reviewed without framework-specific records. Then show its boundary: Boundary models and mapping introduce maintenance cost. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [layered-architecture](layered-architecture.md), [hexagonal-architecture](hexagonal-architecture.md).

Use the shared axes, in this order: **responsibility boundary; source dependency direction; runtime calls; replaceable edge; test seam; added indirection**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/boundaries.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Business policy expected to outlive UI and persistence choices.

**Unsuitable:** A tiny script whose only logic is passing framework data through.

**Combine:** Use hexagonal ports at outer edges and deploy as a monolith or services.

### 6. Related reading and sources

Link existing guides: [architecture](../../../src/content/articles/en/architecture.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                            |
| -------------- | ------------------------------------------------------------------------ |
| `features`     | Source dependencies point toward policy [clean].                         |
| `advantages`   | Save rules can be reviewed without framework-specific records.           |
| `limitations`  | Boundary models and mapping introduce maintenance cost.                  |
| `suitable`     | Business policy expected to outlive UI and persistence choices.          |
| `combinations` | Use hexagonal ports at outer edges and deploy as a monolith or services. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                              | Exact location to consult                                                  | Claim boundary                                                                                         | Checked    |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| [clean](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) | The Dependency Rule; Crossing boundaries; What data crosses the boundaries | [Verified claim and context](../sources.md#clean); apply only to this mechanism, not general rankings. | 2026-09-21 |
| [hex](https://alistair.cockburn.us/hexagonal-architecture)                            | Intent; Motivation; ports and adapters explanation                         | [Verified claim and context](../sources.md#hex); apply only to this mechanism, not general rankings.   | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “Which code may know about the database and which must stay independent?” through the fixture rather than a decorative illustration.

**Shared input:** SaveArticle receives reader ID and article ID, rejects invalid input, records a save and returns Saved. Compare HTTP UI and command-line entry, plus memory and database storage. Keep deployment as one process.

**Form and composition:** Dependency diagram with solid arrows for imports, dashed arrows for runtime calls and a dotted deployment enclosure.

**Interaction/state script:** Input: HTTP save DTO for A17. Initial: no domain save. Action: controller maps input → use case → repository interface → database adapter. Result: simple output DTO, no ORM row crosses into policy.

**Annotations, caption and topic acceptance:** Draw inward import arrows and separate dashed execution arrows. Caption: Dependency direction is not call direction. Accept if no inner object names an outer framework type.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[clean]: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
