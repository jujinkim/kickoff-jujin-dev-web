# Always-on server / 상시 서버 / 常時稼働サーバー

Writing design only. ID: `always-on-server` · Group: [hosting-models](../groups/hosting-models.md) · Queue order: 1001 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What responsibilities come with keeping a request handler running?

**Include:** Explain a listening process, request handlers, durable storage and process supervision as a separate operational concern.

**Exclude:** Uptime guarantees, provider prices and production server configuration.

**Prevent confusion:** A process that normally stays running can restart; memory is not durable storage.

**Terms (EN / KO / JA):** Always-on server / 상시 서버 / 常時稼働サーバー; Process / 프로세스 / プロセス. Also use the [group terms](../groups/hosting-models.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain a listening process, request handlers, durable storage and process supervision as a separate operational concern. Explain the distinguishing mechanism: A listening process handles incoming requests [server]. Immediately separate the nearby concept: A process that normally stays running can restart; memory is not durable storage.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: POST Save A17. Initial: listening process, empty durable store. Action: handler writes store and acknowledges; restart process. Result: saved record remains only because it was persisted externally.

### 3. Advantages and limitations

Explain the conditional benefit: The example can host custom long-lived application behavior under one runtime. Then show its boundary: The operator must choose supervision, capacity and restart recovery; the diagram alone proves none. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [static-hosting](static-hosting.md), [serverless-functions](serverless-functions.md).

Use the shared axes, in this order: **request path; execution lifetime; persistent state location; scaling responsibility; failure handling; build/runtime split**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/hosting-models.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** An application needing controlled runtime behavior and an operations owner.

**Unsuitable:** Assuming an in-memory saved list survives process replacement.

**Combine:** Serve a static frontend separately; keep durable records outside process memory.

### 6. Related reading and sources

Link existing guides: [shipping](../../../src/content/articles/en/shipping.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `features`     | A listening process handles incoming requests [server].                                             |
| `advantages`   | The example can host custom long-lived application behavior under one runtime.                      |
| `limitations`  | The operator must choose supervision, capacity and restart recovery; the diagram alone proves none. |
| `suitable`     | An application needing controlled runtime behavior and an operations owner.                         |
| `combinations` | Serve a static frontend separately; keep durable records outside process memory.                    |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                     | Exact location to consult                                 | Claim boundary                                                                                          | Checked    |
| ---------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [server](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) | An Example Node.js Application; server.listen explanation | [Verified claim and context](../sources.md#server); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What responsibilities come with keeping a request handler running?” through the fixture rather than a decorative illustration.

**Shared input:** Serve a public article page and handle a Save request for A17. Distinguish public files, executable request handlers and durable saved-record storage.

**Form and composition:** Numbered request-path diagram with browser, host, handler and store; include a failed Save response.

**Interaction/state script:** Input: POST Save A17. Initial: listening process, empty durable store. Action: handler writes store and acknowledges; restart process. Result: saved record remains only because it was persisted externally.

**Annotations, caption and topic acceptance:** Use process and store boxes with a restart boundary around only the process. Caption: Process lifetime and data lifetime differ. Accept if restart does not imply permanent loss or automatic persistence.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[server]: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
