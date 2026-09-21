# User story / 사용자 스토리 / ユーザーストーリー

Writing design only. ID: `user-story` · Group: [requirements](../groups/requirements.md) · Queue order: 100 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How do we express a small increment of value without pretending one sentence is a specification?

**Include:** Explain a user-valued save increment, the role–goal–benefit sentence and supporting acceptance conversation.

**Exclude:** Full SRS structure and mandatory Scrum practice.

**Prevent confusion:** A story is not a UI task or the whole use case.

**Terms (EN / KO / JA):** User story / 사용자 스토리 / ユーザーストーリー; Increment / 증분 / インクリメント. Also use the [group terms](../groups/requirements.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain a user-valued save increment, the role–goal–benefit sentence and supporting acceptance conversation. Explain the distinguishing mechanism: User-valued increment with supporting conversation [stories]. Immediately separate the nearby concept: A story is not a UI task or the whole use case.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: A17 and signed-in reader. Initial: unsaved. Action: Save. Result: one saved-link entry; repeat Save produces no duplicate. Story: As a reader, I want to save a link so I can return to it. Acceptance adds persistence failure feedback.

### 3. Advantages and limitations

Explain the conditional benefit: The team can negotiate a small deliverable around a visible outcome. Then show its boundary: The short statement leaves failure and quality conditions unstated unless discussed. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [use-case](use-case.md), [job-story](job-story.md).

Use the shared axes, in this order: **focus of description; unit of work; preconditions; failure coverage; acceptance evidence; complementary artifacts**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/requirements.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Planning one reviewable saved-link increment.

**Unsuitable:** Using one sentence as a complete offline synchronization specification.

**Combine:** Use a use case to expose failure branches and a job story to explain motivation.

### 6. Related reading and sources

Link existing guides: [srs](../../../src/content/articles/en/srs.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                        |
| -------------- | ------------------------------------------------------------------------------------ |
| `features`     | User-valued increment with supporting conversation [stories].                        |
| `advantages`   | The team can negotiate a small deliverable around a visible outcome.                 |
| `limitations`  | The short statement leaves failure and quality conditions unstated unless discussed. |
| `suitable`     | Planning one reviewable saved-link increment.                                        |
| `combinations` | Use a use case to expose failure branches and a job story to explain motivation.     |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                              | Exact location to consult                       | Claim boundary                                                                                             | Checked    |
| --------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------- |
| [stories](https://agilealliance.org/glossary/user-stories/)           | What is User Stories?; Common Pitfalls          | [Verified claim and context](../sources.md#stories); apply only to this mechanism, not general rankings.   | 2026-09-21 |
| [use-cases](https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf) | PDF page 4 (slides 7–8); page 10 (slides 19–20) | [Verified claim and context](../sources.md#use-cases); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How do we express a small increment of value without pretending one sentence is a specification?” through the fixture rather than a decorative illustration.

**Shared input:** A commuter wants to save article A17 before losing connectivity and find it later. Saving a link does not promise offline content; duplicate saves and failed persistence must be discussed.

**Form and composition:** Three annotated textual panels with role/context/goal or main/alternate flows highlighted; no decorative UML required.

**Interaction/state script:** Input: A17 and signed-in reader. Initial: unsaved. Action: Save. Result: one saved-link entry; repeat Save produces no duplicate. Story: As a reader, I want to save a link so I can return to it. Acceptance adds persistence failure feedback.

**Annotations, caption and topic acceptance:** Label role, action, value and two acceptance examples. Caption: Sentence starts the discussion; acceptance makes this increment reviewable. Accept only if saved-link and offline-copy promises remain separate.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[stories]: https://agilealliance.org/glossary/user-stories/
