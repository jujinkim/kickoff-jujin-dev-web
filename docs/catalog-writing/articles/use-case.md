# Use case / 유스케이스 / ユースケース

Writing design only. ID: `use-case` · Group: [requirements](../groups/requirements.md) · Queue order: 101 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How do we capture success and failure paths for saving an article?

**Include:** Describe actor goal, preconditions, main scenario and extensions for persistent saving.

**Exclude:** Exhaustive UI wireframes, database schema and quality-requirement specifications.

**Prevent confusion:** A use-case diagram is not the complete behavioral narrative.

**Terms (EN / KO / JA):** Use case / 유스케이스 / ユースケース; Main success scenario / 기본 성공 시나리오 / 主成功シナリオ. Also use the [group terms](../groups/requirements.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Describe actor goal, preconditions, main scenario and extensions for persistent saving. Explain the distinguishing mechanism: Goal-based interaction paths with failure extensions [use-cases]. Immediately separate the nearby concept: A use-case diagram is not the complete behavioral narrative.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: signed-in reader, A17. Initial: storage available, no save. Action: main flow requests save → validate article → persist → acknowledge. Extension: persistence fails → report unsaved → retry. Result: acknowledged saves exist exactly once.

### 3. Advantages and limitations

Explain the conditional benefit: The example exposes persistence failure before implementation. Then show its boundary: Long narratives need slicing to become small delivery increments. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [user-story](user-story.md), [job-story](job-story.md).

Use the shared axes, in this order: **focus of description; unit of work; preconditions; failure coverage; acceptance evidence; complementary artifacts**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/requirements.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A save flow involving identity, storage and retries.

**Unsuitable:** Writing every button detail when the goal and boundaries remain unsettled.

**Combine:** Slice the successful path into user stories; retain job context as rationale.

### 6. Related reading and sources

Link existing guides: [srs](../../../src/content/articles/en/srs.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                 |
| -------------- | ----------------------------------------------------------------------------- |
| `features`     | Goal-based interaction paths with failure extensions [use-cases].             |
| `advantages`   | The example exposes persistence failure before implementation.                |
| `limitations`  | Long narratives need slicing to become small delivery increments.             |
| `suitable`     | A save flow involving identity, storage and retries.                          |
| `combinations` | Slice the successful path into user stories; retain job context as rationale. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                              | Exact location to consult                       | Claim boundary                                                                                             | Checked    |
| --------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------- |
| [use-cases](https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf) | PDF page 4 (slides 7–8); page 10 (slides 19–20) | [Verified claim and context](../sources.md#use-cases); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How do we capture success and failure paths for saving an article?” through the fixture rather than a decorative illustration.

**Shared input:** A commuter wants to save article A17 before losing connectivity and find it later. Saving a link does not promise offline content; duplicate saves and failed persistence must be discussed.

**Form and composition:** Three annotated textual panels with role/context/goal or main/alternate flows highlighted; no decorative UML required.

**Interaction/state script:** Input: signed-in reader, A17. Initial: storage available, no save. Action: main flow requests save → validate article → persist → acknowledge. Extension: persistence fails → report unsaved → retry. Result: acknowledged saves exist exactly once.

**Annotations, caption and topic acceptance:** Show numbered main flow and a labeled branch from persist to failure. Caption: One goal, multiple outcomes. Accept when failure does not show false success.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[use-cases]: https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf
