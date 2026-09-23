# Job story / 잡 스토리 / ジョブストーリー

Historical writing design. ID: `job-story` · Group: [requirements](../groups/requirements.md) · Queue order: 102 · Checked: 2026-09-21.

Implemented in three languages on 2026-09-22; [visualization brief](../../design-briefs/job-story.md), [source refresh](../requirements-sources.md) and [review](../../requirements-review.md). The six-section outline below remains research reference; the article uses the current three-section format.

## Reader question and scope

**Question:** How do we describe why someone saves a link without prescribing a button?

**Include:** Explain situation, motivation and expected outcome using an interrupted commute.

**Exclude:** Complete jobs-to-be-done theory and claims that roles never matter.

**Prevent confusion:** A job story is not an acceptance test or a job vacancy description.

**Terms (EN / KO / JA):** Job story / 잡 스토리 / ジョブストーリー; Desired outcome / 기대 결과 / 望む成果. Also use the [group terms](../groups/requirements.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain situation, motivation and expected outcome using an interrupted commute. Explain the distinguishing mechanism: Situation and motivation precede the proposed solution [jobs]. Immediately separate the nearby concept: A job story is not an acceptance test or a job vacancy description.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: an interrupted reading session. Initial: reader may lose the page. Statement: When my journey interrupts reading, I want to keep a way back so I can finish later. Action: evaluate saving a link. Result: a candidate solution, with offline reading explicitly unpromised.

### 3. Advantages and limitations

Explain the conditional benefit: The team can consider reminders or saving before selecting a UI. Then show its boundary: The statement alone does not settle permissions or failure handling. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [user-story](user-story.md), [use-case](use-case.md).

Use the shared axes, in this order: **focus of description; unit of work; preconditions; failure coverage; acceptance evidence; complementary artifacts**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/requirements.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** Discovery when the same person needs different behavior in different situations.

**Unsuitable:** Using assumed motivations as if observed user research.

**Combine:** Pair with user-story delivery slices and a use-case failure narrative.

### 6. Related reading and sources

Link existing guides: [srs](../../../src/content/articles/en/srs.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                    |
| -------------- | -------------------------------------------------------------------------------- |
| `features`     | Situation and motivation precede the proposed solution [jobs].                   |
| `advantages`   | The team can consider reminders or saving before selecting a UI.                 |
| `limitations`  | The statement alone does not settle permissions or failure handling.             |
| `suitable`     | Discovery when the same person needs different behavior in different situations. |
| `combinations` | Pair with user-story delivery slices and a use-case failure narrative.           |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                       | Exact location to consult                                | Claim boundary                                                                                        | Checked    |
| ------------------------------------------------------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| [jobs](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/) | Enter the Job Story; Designing A Profile View, steps 1–5 | [Verified claim and context](../sources.md#jobs); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How do we describe why someone saves a link without prescribing a button?” through the fixture rather than a decorative illustration.

**Shared input:** A commuter wants to save article A17 before losing connectivity and find it later. Saving a link does not promise offline content; duplicate saves and failed persistence must be discussed.

**Form and composition:** Three annotated textual panels with role/context/goal or main/alternate flows highlighted; no decorative UML required.

**Interaction/state script:** Input: an interrupted reading session. Initial: reader may lose the page. Statement: When my journey interrupts reading, I want to keep a way back so I can finish later. Action: evaluate saving a link. Result: a candidate solution, with offline reading explicitly unpromised.

**Annotations, caption and topic acceptance:** Annotate situation, motivation and outcome; place solution below, not inside the need. Caption: Context explains the desired progress. Accept if the statement permits more than one solution.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[jobs]: https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/
