# Web UI development tools / 웹 UI 개발 도구 / Web UI開発ツール

Group ID: `web-ui` · Checked: 2026-09-22 · Original comparison contract; [implemented release review](../../platform-demos-review.md).

## Shared case and comparison contract

A reading-card component receives title Field notes and has a Save button. Initial saved=false; activation sets true and renders Saved. Two cards need independent state, then a shared saved-count example.

**Comparison axes, fixed order:** component expression; state update; event handling; build/runtime responsibility; shared state; surrounding application needs.

**Boundary:** UI tools are not automatically full routing, storage or hosting solutions. Compare one identical behavior; do not infer speed from syntax length.

**Visual family:** Component source → event → state → rendered label workflow, with a separate build/compiler box where relevant.

**Core terms (EN / KO / JA):** Component / 컴포넌트 / コンポーネント; State / 상태 / 状態; Event / 이벤트 / イベント.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                           | Distinguishing feature                                         | Conditional advantage                                           | Limitation                                                           | Suitable context                                         | Combination                                                                          |
| ------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [React / React / React](../articles/react.md)     | Components and state express changing UI [react].              | The card behavior can be reused with different titles.          | Persistence and cross-card ownership are separate decisions.         | A component UI needing explicit shared-state ownership.  | Embed as an Astro island; lift shared count state to a common parent when needed.    |
| [Vue / Vue / Vue](../articles/vue.md)             | Templates and reactive state can share a component file [vue]. | The example keeps markup, logic and styles together for review. | Shared state and external persistence still need explicit ownership. | A team preferring template-oriented component authoring. | Use as an Astro island; pass data through props and communicate changes with events. |
| [Svelte / Svelte / Svelte](../articles/svelte.md) | Component declarations are compiled for web UI [svelte].       | The example can express UI and state near each other.           | Build setup and application services still need design.              | A team choosing a compiler-based component workflow.     | Use in an Astro island or a separately chosen application framework.                 |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[react]: https://react.dev/learn
[svelte]: https://svelte.dev/docs/svelte/overview
[vue]: https://vuejs.org/guide/introduction.html
