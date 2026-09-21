# Svelte / Svelte / Svelte

Writing design only. ID: `svelte` · Group: [web-ui](../groups/web-ui.md) · Queue order: 802 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What role does compilation play in an interactive component?

**Include:** Explain compiled declarative components and a Save state transition.

**Exclude:** Comparative bundle claims, framework routing and legacy-to-current migration.

**Prevent confusion:** Svelte and SvelteKit have different scopes; compiler use does not mean zero runtime work.

**Terms (EN / KO / JA):** Svelte / Svelte / Svelte; Compiler / 컴파일러 / コンパイラー. Also use the [group terms](../groups/web-ui.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain compiled declarative components and a Save state transition. Explain the distinguishing mechanism: Component declarations are compiled for web UI [svelte]. Immediately separate the nearby concept: Svelte and SvelteKit have different scopes; compiler use does not mean zero runtime work.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: card component and title. Initial: unsaved compiled component. Action: Save changes component state. Result: rendered label becomes Saved; persistence is not implied.

### 3. Advantages and limitations

Explain the conditional benefit: The example can express UI and state near each other. Then show its boundary: Build setup and application services still need design. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [react](react.md), [vue](vue.md).

Use the shared axes, in this order: **component expression; state update; event handling; build/runtime responsibility; shared state; surrounding application needs**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/web-ui.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A team choosing a compiler-based component workflow.

**Unsuitable:** Choosing from unsupported claims of always-smaller bundles.

**Combine:** Use in an Astro island or a separately chosen application framework.

### 6. Related reading and sources

Link existing guides: [tools](../../../src/content/articles/en/tools.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                        |
| -------------- | -------------------------------------------------------------------- |
| `features`     | Component declarations are compiled for web UI [svelte].             |
| `advantages`   | The example can express UI and state near each other.                |
| `limitations`  | Build setup and application services still need design.              |
| `suitable`     | A team choosing a compiler-based component workflow.                 |
| `combinations` | Use in an Astro island or a separately chosen application framework. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                          | Exact location to consult             | Claim boundary                                                                                          | Checked    |
| ------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [svelte](https://svelte.dev/docs/svelte/overview) | Overview opening and compiler example | [Verified claim and context](../sources.md#svelte); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What role does compilation play in an interactive component?” through the fixture rather than a decorative illustration.

**Shared input:** A reading-card component receives title Field notes and has a Save button. Initial saved=false; activation sets true and renders Saved. Two cards need independent state, then a shared saved-count example.

**Form and composition:** Component source → event → state → rendered label workflow, with a separate build/compiler box where relevant.

**Interaction/state script:** Input: card component and title. Initial: unsaved compiled component. Action: Save changes component state. Result: rendered label becomes Saved; persistence is not implied.

**Annotations, caption and topic acceptance:** Separate compile stage from browser event/state stage. Caption: Compilation prepares the component; user events still change runtime state. Accept if no diagram implies compilation handles future clicks.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[svelte]: https://svelte.dev/docs/svelte/overview
