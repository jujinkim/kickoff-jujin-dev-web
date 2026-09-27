# Architecture: boundaries and responsibilities / アーキテクチャ：境界と役割を決める / 아키텍처: 경계와 역할 정하기

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `architecture`; `planning`. Existing URLs and comment identity retained.
- Definition and selection: Assign rule and data ownership before choosing module boundaries.
- Closest options and concrete difference: Choose boundaries around rules, data ownership and likely change. Layers describe organization, ports describe external contracts, and services add deployment boundaries. These decisions can coexist. Use a modular monolith when independent deployment does not justify distributed coordination.
- Distinct situation and Why opening: Imagine building an online shop where customers choose goods, place orders, and pay. Stock, order status, and payment results must stay consistent even when the payment provider changes. Changing a payment provider should not require rewriting order rules and every screen. Yet that happens when features reach directly into each other's storage and responsibilities have no clear owner. Before drawing boxes or picking a fashionable pattern, you need to decide where a change belongs and what other parts may rely on.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/architecture.md), [KO](../../src/content/articles/ko/architecture.md), [JA](../../src/content/articles/ja/architecture.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The shop’s coordinator sequences order checks, inventory reservation and payment. Order owns confirmation; Inventory owns stock; the integration translates provider results. A timeout stays unresolved until evidence supports retry or release. The arrows show calls, not necessarily source-code imports.
- Visual structure: `ArchitectureGuide.astro` owns its markup, spacing and state. Caption: Order responsibilities and recovery path
- Initial and changed states: 1. Trace one real operation, such as confirming an order. List the steps in ordinary language: check the order, reserve stock, request payment and report the outcome. Include a failure after stock is reserved. This exposes coordination work that a success-only diagram misses. 2. Assign ownership. Order owns confirmation rules; Inventory owns stock; a payment integration contacts the provider. A checkout coordinator owns the sequence and recovery. Avoid two modules independently deciding whether the same order is confirmed. 3. Describe what crosses each boundary: identifiers, requested operation, result, and possible failure. Keep the contract small enough that callers need not know private tables or framework objects. Decide which component may change data and which must request a change through its owner. 4. Ask what may reasonably change. If the provider might change, isolate its translation and error handling. If two pieces always change together and have the same owner, an extra interface may add ceremony without solving a problem. A small app need not copy the organization chart of a large company. 5. Check the boundary with one substitute. Can the order rule run against a fake payment result? Can a provider timeout leave the order in a known state with an owner for retry or recovery? These checks expose coupling more reliably than counting folders. Have AI produce a short responsibility table and dependency sketch, then derive local classes and methods. Users confirm project-wide roles, operating constraints and behavior. They need not approve every object name. Keep the sketch alongside the scenarios and revise it when ownership changes, rather than treating an old diagram as proof that the code still follows it. Ask a teammate to trace the same failure using only the contract; clarify any step that appears to have two owners.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width:560px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="architecture"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/architecture.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: Guide compares choices in its walkthrough and supplementary selection section.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/architecture-320.png`, `artifacts/design-demos/architecture-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Microsoft: architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) (checked 2026-09-27): Encapsulation and explicit dependencies let responsibilities change behind contracts; no diagram proves runtime isolation.

## Strong teaching case — 2026-09-27

Coordinator sits above separate owners and retains unresolved-payment recovery responsibility.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
