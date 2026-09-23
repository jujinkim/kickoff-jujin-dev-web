# Serverless functions / 서버리스 함수 / サーバーレス関数

Original writing design; implemented article and demo: [review](../../platform-demos-review.md). ID: `serverless-functions` · Group: [hosting-models](../groups/hosting-models.md) · Queue order: 1002 · Checked: 2026-09-22.

## Reader question and scope

**Question:** What moves to the platform when a request invokes a managed handler?

**Include:** Explain event-triggered function execution and external durable state with provider-bounded behavior.

**Exclude:** Universal cold-start durations, limits, prices and all serverless compute variants.

**Prevent confusion:** Serverless means managed infrastructure, not absent servers or automatic business correctness.

**Terms (EN / KO / JA):** Serverless functions / 서버리스 함수 / サーバーレス関数; Invocation / 호출 실행 / 呼び出し実行. Also use the [group terms](../groups/hosting-models.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain event-triggered function execution and external durable state with provider-bounded behavior. Explain the distinguishing mechanism: Events or API calls invoke managed handlers [functions]. Immediately separate the nearby concept: Serverless means managed infrastructure, not absent servers or automatic business correctness.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: two Save events for A17. Initial: empty durable store. Action: separate handler invocations write under the same reader/article key. Result: one saved record under the authored idempotency rule.

### 3. Advantages and limitations

Explain the conditional benefit: The example delegates server provisioning for the Save handler to the platform. Then show its boundary: Execution lifecycle and retries need provider-specific design; durable data cannot rely on an assumed warm instance. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [static-hosting](static-hosting.md), [always-on-server](always-on-server.md).

Use the shared axes, in this order: **request path; execution lifetime; persistent state location; scaling responsibility; failure handling; build/runtime split**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/hosting-models.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** An event-oriented API with a clear external persistence contract.

**Unsuitable:** A design requiring unspecified permanent process memory across invocations.

**Combine:** Pair with static hosting and a durable store; handle duplicate Save requests by ID.

### 6. Related reading and sources

Link existing guides: [shipping](../../../src/content/articles/en/shipping.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| `features`     | Events or API calls invoke managed handlers [functions].                                                             |
| `advantages`   | The example delegates server provisioning for the Save handler to the platform.                                      |
| `limitations`  | Execution lifecycle and retries need provider-specific design; durable data cannot rely on an assumed warm instance. |
| `suitable`     | An event-oriented API with a clear external persistence contract.                                                    |
| `combinations` | Pair with static hosting and a durable store; handle duplicate Save requests by ID.                                  |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                               | Exact location to consult             | Claim boundary                                                                                             | Checked    |
| ---------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------- |
| [functions](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) | What is AWS Lambda?; Lambda Functions | [Verified claim and context](../sources.md#functions); apply only to this mechanism, not general rankings. | 2026-09-22 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What moves to the platform when a request invokes a managed handler?” through the fixture rather than a decorative illustration.

**Shared input:** Serve a public article page and handle a Save request for A17. Distinguish public files, executable request handlers and durable saved-record storage.

**Form and composition:** Numbered request-path diagram with browser, host, handler and store; include a failed Save response.

**Interaction/state script:** Input: two Save events for A17. Initial: empty durable store. Action: separate handler invocations write under the same reader/article key. Result: one saved record under the authored idempotency rule.

**Annotations, caption and topic acceptance:** Show two invocation boxes and one store, without claiming actual timing. Caption: Invocation lifetime is not durable-state lifetime. Accept if duplicate handling is labeled application logic.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[functions]: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
