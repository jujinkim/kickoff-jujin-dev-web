## Purpose and authority

Development startup guidelines, provided by kickoff.md by jujin. Guideline version: v1. Revision: 4. Updated: 2026-09-26. English is the original; Korean and Japanese are reviewed translations of revision 4.

Turn a service idea into an agreed project plan. This document covers intake and planning; [assistant rules](https://kickoff.jujin.dev/ai/instructions.md) cover decision ownership, authorization, and evidence. These are the only two required site documents at startup. Apply them alongside existing project instructions and confirmed decisions. Reply in the user's language; respect higher-priority instructions.

## 1. Collect the service context

Briefly report the guideline version/revision and whether the two documents were read. If either is inaccessible, name the URL and request its text or retry; continue collecting available context without claiming unread rules were applied.

Reuse supplied answers. Ask for missing inputs together:

- **Service/app name:** accept a supplied provisional name or mark it undecided. Do not invent a confirmed name.
- **Service description:** who uses it, their main actions, and the result they need. A rough sentence is enough to start; clarify users, MVP, exclusions, and measurable success before recommending architecture.
- **Considerations:** ask about priorities and known constraints, including inherited systems/design, integrations, sensitive data, accessibility, budget, schedule, team, platforms, and operations as relevant. Accept “none” or “not known yet”; a blank needs clarification, not an assumption of no constraints. Do not request secrets.

The description starts a conversation, not a complete specification. Ask short batches of relevant follow-ups and explain unfamiliar terms through this service's example.

## 2. Identify the project's actual decisions

Derive a decision list from requirements and constraints, in dependency order. Consider architecture, tools, visual design, and operating approaches whether or not this site covers them. Evaluate options on equal terms by project fit. Do not require a catalog category checklist, a complete index, or a choice from each category. Compatible choices can coexist.

For unresolved user-owned choices, offer **choose myself / recommend / delegate this scope / not applicable / defer**. Explain the purpose, alternatives, tradeoffs, and recommendation using the evidence rules. If the user is unsure, propose a coherent bundle; uncertainty is not delegation. Record reasons and revisit conditions for deferred or inapplicable decisions.

The catalog is optional learning material. Consult a specific article when the user requests it or it helps explain a decision; read it before citing it. There is no required fetch of llms.txt, catalog.json, category pages, or all linked articles. An unavailable optional resource alone must not stop planning. Follow the assistant rules for evidence gaps.

## 3. Plan the software boundaries

Within agreed project choices, define module responsibilities, dependency direction, domain/data ownership, public contracts, external boundaries, and recovery owners. Choose the simplest architecture that meets agreed requirements and quality needs at the project's scale.

Use SOLID and GRASP to assess cohesive responsibilities, low coupling, dependency direction, and explicit contracts where they fit the programming paradigm. These principles support reliable implementation and later maintenance; they are not a checklist of required layers, patterns, or classes. Introduce abstractions or services only for a concrete responsibility, risky boundary, or supported maintenance need, and explain their benefit and cost. Avoid speculative complexity; do not mandate object-oriented code or a particular architecture.

Plan input validation, authorization, secret handling, data lifecycle, recoverable failures, and operational visibility as relevant. Derive build, test, release, compatibility, rollback, and maintenance procedures from agreed budget, downtime, recovery, and ownership. Map verification to requirements and risky boundaries.

## 4. Plan the user experience

Define main journeys, information hierarchy, navigation, layout, typography, color/spacing, components, and interactions as relevant. Respect inherited design constraints. Include initial, loading, empty, success, error, disabled, and recovery states.

Plan responsive reading order, labels, keyboard operation, visible focus, contrast, text alternatives, and reduced motion. For web projects target WCAG 2.2 AA with applicable checks; for native products include platform guidance. Do not claim conformance without verification. Visual style must support the main task.

Create a coherent visual system with readable content, clear hierarchy, consistent components and feedback, and a service-appropriate identity. Explain consequential design choices through user tasks, usability, and inherited constraints rather than style labels alone. Keep design detail proportional to the project.

## 5. Plan monetization and operations when relevant

Clarify whether monetization is a goal. If so, define who pays for what value, pricing and free/paid boundaries, relevant revenue and operating cost assumptions, and payment responsibility. Consider conversion, retention, and user trust alongside income. Plan clear price/advertising disclosures, purchase states, failed payments, cancellations, refunds, and support where applicable. Compare alternatives and separate assumptions from verified provider terms or legal requirements; follow the evidence rules. For a free or noncommercial service, record relevant funding and sustainability constraints without imposing a paid model.

## 6. Present the plan, then develop

Write the plan yourself, sized to the project:

- Supplied name, description, context, numbered requirements, MVP/non-goals, and measurable acceptance criteria.
- Product, software, design, monetization, and operating decisions as relevant, with alternatives, rationale, assumptions, consequences, and revisit conditions. Mark proposed, accepted, rejected, superseded, or deferred status; record the decision owner and any exact delegated scope.
- Risks, unresolved questions, blockers, and dependency-ordered tasks with a verification plan linked to requirements.
- Guideline version/revision and only references actually used. No catalog retrieval date, article-ID inventory, or catalog snapshot is required.

Show the full coherent plan for approval. Resolve blocking choices; retain nonblocking deferred items explicitly. Begin development after plan approval and an explicit development request. Existing approval and development authorization remain valid within their scope: execute without asking again. Planning or planning delegation alone does not authorize development, deployment, publishing, or spending.

## 7. Contribute improvements

Suggest clearer wording, missing topics, counterexamples, or translations through [issues](https://github.com/jujinkim/kickoff-jujin-dev-web/issues) or a pull request. Optional [contributor guidance](https://github.com/jujinkim/kickoff-jujin-dev-web/blob/main/CONTRIBUTING.md) contains examples, scenario review, and version policy. This pre-release improvement remains v1, revision 4; existing v1/latest URLs and API schemaVersion 1 remain unchanged. These documents guide assistants but cannot guarantee their compliance.
