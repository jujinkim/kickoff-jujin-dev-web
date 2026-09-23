# Godot / Godot / Godot

Original writing design; implemented article and demo: [review](../../platform-demos-review.md). ID: `godot` · Group: [game-engines](../groups/game-engines.md) · Queue order: 900 · Checked: 2026-09-22.

## Reader question and scope

**Question:** How do nodes and reusable scenes compose a collectible game?

**Include:** Explain node trees, saved scenes, instances and the main-scene entry point.

**Exclude:** Engine benchmarking, platform export guarantees and licensing terms.

**Prevent confusion:** A saved scene is reusable composition, not only a full game level.

**Terms (EN / KO / JA):** Godot / Godot / Godot; Scene tree / 씬 트리 / シーンツリー. Also use the [group terms](../groups/game-engines.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain node trees, saved scenes, instances and the main-scene entry point. Explain the distinguishing mechanism: Nodes form scenes that can be instanced [godot]. Immediately separate the nearby concept: A saved scene is reusable composition, not only a full game level.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: player, floor, camera, collectible scene. Initial: score 0 and one collectible. Action: player reaches the collectible and authored collision logic runs. Result: score 1 and collectible removed.

### 3. Advantages and limitations

Explain the conditional benefit: The collectible composition can be reused without rebuilding its node tree manually. Then show its boundary: Input, collision behavior and exported builds still need project-specific checks. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [unity](unity.md), [unreal-engine](unreal-engine.md).

Use the shared axes, in this order: **scene/world unit; object composition; behavior authoring; resource reuse; play/test loop; export validation**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/game-engines.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A team wanting explicit scene composition for a small prototype.

**Unsuitable:** Assuming editor playback proves every target export works.

**Combine:** Use separate player and collectible scenes; apply modular code boundaries inside gameplay.

### 6. Related reading and sources

Link existing guides: [tools](../../../src/content/articles/en/tools.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                              |
| -------------- | ------------------------------------------------------------------------------------------ |
| `features`     | Nodes form scenes that can be instanced [godot].                                           |
| `advantages`   | The collectible composition can be reused without rebuilding its node tree manually.       |
| `limitations`  | Input, collision behavior and exported builds still need project-specific checks.          |
| `suitable`     | A team wanting explicit scene composition for a small prototype.                           |
| `combinations` | Use separate player and collectible scenes; apply modular code boundaries inside gameplay. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                                           | Exact location to consult             | Claim boundary                                                                                         | Checked    |
| -------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| [godot](https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html) | Nodes; Scenes; Setting the main scene | [Verified claim and context](../sources.md#godot); apply only to this mechanism, not general rankings. | 2026-09-22 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How do nodes and reusable scenes compose a collectible game?” through the fixture rather than a decorative illustration.

**Shared input:** A tiny 3D scene contains a player, floor, camera and collectible. Touching the collectible changes score 0→1 and removes the collectible. Use placeholder geometry; compare composition and workflow, not image quality.

**Form and composition:** Object/scene composition diagram beside input→collision→score workflow. Author a schematic, not a fake editor screenshot.

**Interaction/state script:** Input: player, floor, camera, collectible scene. Initial: score 0 and one collectible. Action: player reaches the collectible and authored collision logic runs. Result: score 1 and collectible removed.

**Annotations, caption and topic acceptance:** Show reusable collectible subtree and its instance inside Main. Caption: A scene can be both a reusable part and a game entry. Accept if score behavior is labeled authored logic, not automatic node behavior.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[godot]: https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html
