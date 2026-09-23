# Architecture guide infographic

- Stable ID: `architecture`; guide in English, Korean and Japanese.
- Definition: Architecture assigns responsibility, contracts and dependencies so change and failure have clear owners.
- Nearest neighbor: layered architecture describes a particular dependency organization; this guide asks who owns project-wide decisions.
- Distinguishing visual features: checkout coordinator above three responsibility cards, followed by success and timeout outcomes.
- Situation: an online shop confirms one order, reserves stock, then waits for a payment provider. An unresolved timeout needs a recovery owner.
- Mode: `static`; no controls, state, JavaScript or simulated payment.
- Observable result: a teammate can name the owner of order validation, stock reservation, provider translation and recovery without guessing from folders.
- Mobile order: coordinator, Order, Inventory, Payment integration, outcomes. Cards become one column below 560px of figure width.
- Accessibility: semantic ordered list; number and name convey sequence without color; no tab stops; text remains in DOM with JavaScript off.
- Capture: `[data-demo="architecture"]` in `src/data/design-demos.json`; localized thumbnails.
- Sources checked 2026-09-23: [Microsoft architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) supports separating concerns; [Microsoft saga pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/saga) supports explicit coordination and failure recovery. Order, inventory and payment policy is an authored example, not a prescribed architecture.
- Comparison summary: guide has no comparison metadata. The existing prompt still asks for project-wide roles, contracts and failure owners.
- Verification: normal sequential repository gates, three localized thumbnails, mobile/desktop themes and JavaScript-off browser review.
