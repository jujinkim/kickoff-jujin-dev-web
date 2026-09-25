## Purpose and authority

Development startup guidelines, provided by kickoff.md by jujin. Guideline version: v1. Revision: 3. Updated: 2026-09-24. English is the original; Korean and Japanese are reviewed translations of revision 3.

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

Within agreed project choices, define module responsibilities, dependency direction, domain/data ownership, public contracts, external boundaries, and recovery owners. Explain the fit to project scale; avoid speculative layers and abstractions. Apply SOLID and GRASP responsibility/dependency principles where appropriate to the programming paradigm, without mandating object-oriented code or a particular architecture.

Plan input validation, authorization, secret handling, data lifecycle, recoverable failures, and operational visibility as relevant. Derive build, test, release, compatibility, rollback, and maintenance procedures from agreed budget, downtime, recovery, and ownership. Map verification to requirements and risky boundaries.

## 4. Plan the user experience

Define main journeys, information hierarchy, navigation, layout, typography, color/spacing, components, and interactions as relevant. Respect inherited design constraints. Include initial, loading, empty, success, error, disabled, and recovery states.

Plan responsive reading order, labels, keyboard operation, visible focus, contrast, text alternatives, and reduced motion. For web projects target WCAG 2.2 AA with applicable checks; for native products include platform guidance. Do not claim conformance without verification. Visual style must support the main task.

## 5. Present the plan, then develop

Write the plan yourself, sized to the project:

- Supplied name, description, context, numbered requirements, MVP/non-goals, and measurable acceptance criteria.
- Software and design decisions with alternatives, rationale, assumptions, consequences, and revisit conditions. Mark proposed, accepted, rejected, superseded, or deferred status; record the decision owner and any exact delegated scope.
- Risks, unresolved questions, blockers, and dependency-ordered tasks with a verification plan linked to requirements.
- Guideline version/revision and only references actually used. No catalog retrieval date, article-ID inventory, or catalog snapshot is required.

Show the full coherent plan for approval. Resolve blocking choices; retain nonblocking deferred items explicitly. Begin development after plan approval and an explicit development request. Existing approval and development authorization remain valid within their scope: execute without asking again. Planning or planning delegation alone does not authorize development, deployment, publishing, or spending.

## 6. Contribute improvements

Suggest clearer wording, missing topics, counterexamples, or translations through [issues](https://github.com/jujinkim/kickoff-jujin-dev-web/issues) or a pull request. Optional [contributor guidance](https://github.com/jujinkim/kickoff-jujin-dev-web/blob/main/CONTRIBUTING.md) contains examples, scenario review, and version policy. This pre-release improvement remains v1, revision 3; existing v1/latest URLs and API schemaVersion 1 remain unchanged. These documents guide assistants but cannot guarantee their compliance.
