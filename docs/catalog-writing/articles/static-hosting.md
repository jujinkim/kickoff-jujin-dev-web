# Static hosting / 정적 호스팅 / 静的ホスティング

Original writing design; implemented article and demo: [review](../../platform-demos-review.md). ID: `static-hosting` · Group: [hosting-models](../groups/hosting-models.md) · Queue order: 1000 · Checked: 2026-09-22.

## Reader question and scope

**Question:** What can a host do by serving files prepared beforehand?

**Include:** Explain serving HTML, CSS and JavaScript files and separating per-user writes into an API.

**Exclude:** Provider plans, caching guarantees and assertions that static means noninteractive.

**Prevent confusion:** Browser-side interaction is possible; private persistence is not supplied by static files.

**Terms (EN / KO / JA):** Static hosting / 정적 호스팅 / 静的ホスティング; Prebuilt file / 사전 생성 파일 / 事前生成ファイル. Also use the [group terms](../groups/hosting-models.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain serving HTML, CSS and JavaScript files and separating per-user writes into an API. Explain the distinguishing mechanism: Prebuilt files are published for requests [static]. Immediately separate the nearby concept: Browser-side interaction is possible; private persistence is not supplied by static files.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: GET article and POST save A17. Initial: files deployed, API separate. Action: GET returns HTML; Save calls API. Result: readable page and explicit API acknowledgement or failure.

### 3. Advantages and limitations

Explain the conditional benefit: Public reading does not need application rendering on each request. Then show its boundary: Personalized writes need another execution and storage path. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [always-on-server](always-on-server.md), [serverless-functions](serverless-functions.md).

Use the shared axes, in this order: **request path; execution lifetime; persistent state location; scaling responsibility; failure handling; build/runtime split**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/hosting-models.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Public documentation and article pages.

**Unsuitable:** Placing secrets or private saved lists in public build artifacts.

**Combine:** Use Astro, Hugo or Jekyll output with a server or function API for Save.

### 6. Related reading and sources

Link existing guides: [shipping](../../../src/content/articles/en/shipping.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                            |
| -------------- | ------------------------------------------------------------------------ |
| `features`     | Prebuilt files are published for requests [static].                      |
| `advantages`   | Public reading does not need application rendering on each request.      |
| `limitations`  | Personalized writes need another execution and storage path.             |
| `suitable`     | Public documentation and article pages.                                  |
| `combinations` | Use Astro, Hugo or Jekyll output with a server or function API for Save. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                                          | Exact location to consult | Claim boundary                                                                                          | Checked    |
| ------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [static](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) | About GitHub Pages        | [Verified claim and context](../sources.md#static); apply only to this mechanism, not general rankings. | 2026-09-22 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What can a host do by serving files prepared beforehand?” through the fixture rather than a decorative illustration.

**Shared input:** Serve a public article page and handle a Save request for A17. Distinguish public files, executable request handlers and durable saved-record storage.

**Form and composition:** Numbered request-path diagram with browser, host, handler and store; include a failed Save response.

**Interaction/state script:** Input: GET article and POST save A17. Initial: files deployed, API separate. Action: GET returns HTML; Save calls API. Result: readable page and explicit API acknowledgement or failure.

**Annotations, caption and topic acceptance:** Separate solid file-delivery path from labeled API path. Caption: Static delivery can coexist with dynamic actions. Accept if no private state is shown inside public assets.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[static]: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
