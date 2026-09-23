# Microservices / 마이크로서비스 / マイクロサービス

Research brief; concise article and static diagram implemented. See [release review](../../service-split-review.md). ID: `microservices` · Group: [service-split](../groups/service-split.md) · Queue order: 302 · Checked: 2026-09-21.

## Reader question and scope

**Question:** When does independent deployment justify network boundaries?

**Include:** Explain independently deployable capability services, explicit contracts and service-owned data.

**Exclude:** Universal service sizes, automatic scalability and vendor orchestration tutorials.

**Prevent confusion:** A service is not merely a class named Service; distributed deployment alone does not create independence.

**Terms (EN / KO / JA):** Microservices / 마이크로서비스 / マイクロサービス; Service contract / 서비스 계약 / サービス契約. Also use the [group terms](../groups/service-split.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain independently deployable capability services, explicit contracts and service-owned data. Explain the distinguishing mechanism: Capability services can release independently [micro]. Immediately separate the nearby concept: A service is not merely a class named Service; distributed deployment alone does not create independence.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: library v2 tag request. Initial: catalog v1, library v1, billing v1. Action: deploy only library v2 under a compatible contract. Result: other services stay v1; simulate catalog timeout and show explicit retry/failure.

### 3. Advantages and limitations

Explain the conditional benefit: Library can release a compatible tag feature without rebuilding billing in this scenario. Then show its boundary: Remote failures and cross-service data changes require explicit handling. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [monolith](monolith.md), [modular-monolith](modular-monolith.md).

Use the shared axes, in this order: **deployment unit; module boundaries; communication; data ownership; failure boundary; operational effort**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/service-split.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** Teams with stable capability boundaries and a reason for independent releases.

**Unsuitable:** A small application split before ownership and operations are understood.

**Combine:** Use a modular monolith for remaining capabilities and ports inside individual services.

### 6. Related reading and sources

Link existing guides: [architecture](../../../src/content/articles/en/architecture.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                             |
| -------------- | ----------------------------------------------------------------------------------------- |
| `features`     | Capability services can release independently [micro].                                    |
| `advantages`   | Library can release a compatible tag feature without rebuilding billing in this scenario. |
| `limitations`  | Remote failures and cross-service data changes require explicit handling.                 |
| `suitable`     | Teams with stable capability boundaries and a reason for independent releases.            |
| `combinations` | Use a modular monolith for remaining capabilities and ports inside individual services.   |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                      | Exact location to consult                                                                                     | Claim boundary                                                                                           | Checked    |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| [micro](https://martinfowler.com/articles/microservices.html) | Opening definition; Monoliths and Microservices; Componentization via Services; Decentralized Data Management | [Verified claim and context](../sources.md#micro); apply only to this mechanism, not general rankings.   | 2026-09-21 |
| [modular](https://martinfowler.com/bliki/MonolithFirst.html)  | Modular design discussion and note 1; concluding cautions                                                     | [Verified claim and context](../sources.md#modular); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “When does independent deployment justify network boundaries?” through the fixture rather than a decorative illustration.

**Shared input:** A reading application has catalog, saved-library and billing capabilities. A change adds a library tag without changing billing behavior. Use one team initially, then consider independent ownership.

**Form and composition:** Boxes for capabilities inside deployment enclosures; annotate in-process versus network calls and who owns each store.

**Interaction/state script:** Input: library v2 tag request. Initial: catalog v1, library v1, billing v1. Action: deploy only library v2 under a compatible contract. Result: other services stay v1; simulate catalog timeout and show explicit retry/failure.

**Annotations, caption and topic acceptance:** Draw three deployment boxes and labeled network calls; include timeout path. Caption: Independent releases introduce remote failure cases. Accept if cross-service calls are never drawn as guaranteed local returns.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Published implementation and verification are recorded in the linked release review.

[micro]: https://martinfowler.com/articles/microservices.html
