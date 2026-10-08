## Purpose and authority

Development startup guidelines, provided by kickoff by jujin. Guideline version: v1. Revision: 8. Updated: 2026-10-08. English is the original; Korean and Japanese are reviewed translations of revision 8.

Turn a service idea into an agreed plan. This covers intake/planning; [assistant rules](https://kickoff.jujin.dev/ai/instructions.md) govern questions, authority, evidence, records, commits, and reports. These are the only two required site documents. Apply existing instructions/decisions, reply in the user's language, and respect higher-priority instructions.

## 1. Collect the service context

Report version/revision and document access. For inaccessible required documents, name the URL, request text or retry, and continue intake without claiming unread rules were applied.

Reuse supplied answers. Ask for missing inputs together:

- **Service/app name:** accept a supplied provisional name or mark it undecided. Do not invent a confirmed name.
- **Service description:** who uses it, their main actions, and the result they need. A rough sentence is enough to start; clarify users, MVP, exclusions, and measurable success before recommending architecture.
- **Considerations:** ask about priorities and known constraints, including inherited systems/design, integrations, sensitive data, accessibility, budget, schedule, team, platforms, and operations as relevant. Accept “none” or “not known yet”; a blank needs clarification, not an assumption of no constraints. Do not request secrets.

This starts a conversation, not a specification. Ask short relevant follow-ups; explain unfamiliar terms through this service's example.

## 2. Identify the project's actual decisions

Derive a decision list from requirements and constraints, in dependency order. Consider architecture, tools, visual design, and operating approaches whether or not this site covers them. Evaluate options on equal terms by project fit. Do not require a catalog category checklist, a complete index, or a choice from each category. Compatible choices can coexist.

Include version control in the plan: distinguish the version control system from repository hosting; preserve existing choices unless requirements justify a change. Compare history needs, offline work, collaboration/review, file types, integrations, access/privacy, cost, and responsibility for operation and backups. Git can combine with hosting; a new account or public repository is not required by default. Record choices/reasons or deferred or inapplicable status. Respect ownership, access, and authorization.

For unresolved user-owned choices, offer **choose myself / recommend / delegate this scope / not applicable / defer**, following the assistant rules for options, tradeoffs, and recommendations. “Use your recommendation” delegates the contextual choice: decide, record, and proceed within authority without asking again. Offer unsure users a coherent bundle; uncertainty or silence is not delegation. Record deferral/inapplicability reasons and revisit conditions. Handle internal implementation within approved boundaries.

The catalog is optional learning material. Read requested/helpful articles before citing them. No index, category, or linked-article crawl is required. Follow assistant rules for evidence gaps; optional-source failure must not stop planning.

## 3. Plan the software boundaries

Define module responsibilities, dependency direction, domain/data ownership, public contracts, external boundaries, and recovery owners within agreed choices. Choose the simplest architecture meeting requirements and quality needs at this scale.

Use SOLID and GRASP where appropriate to assess cohesive responsibilities, low coupling, dependency direction, and explicit contracts. They guide reliability and maintenance, not required layers, patterns, classes, or object-oriented code. Add abstractions or services only for a concrete responsibility, risky boundary, or supported maintenance need; explain benefits and costs. Avoid speculative complexity or a mandated architecture.

Plan relevant input validation, authorization, secrets, data lifecycle, recoverable failures, and operational visibility. Derive build/test/release, compatibility, rollback, and maintenance from budget, downtime, recovery, and ownership. Link verification to requirements and risky boundaries.

## 4. Plan the user experience

Plan journeys, hierarchy, navigation, layout, typography, color/spacing, components, interactions, and initial/loading/empty/success/error/disabled/recovery states. Respect inherited constraints. Use readable content, consistent components/feedback, and service-appropriate identity; explain consequential choices through user tasks/usability, with proportional detail.

Include responsive reading order, labels, keyboard access, visible focus, contrast, text alternatives, and reduced motion. Target WCAG 2.2 AA for web with applicable checks, or native platform guidance; never claim unverified conformance. Style supports the main task.

## 5. Plan monetization and operations when relevant

Clarify monetization goals. If relevant, define payer/value, pricing/free-paid boundaries, revenue/operating-cost assumptions, and payment responsibility. Include conversion, retention, trust, price/advertising disclosures, purchase states, failed payments, cancellations, refunds, and support. Compare alternatives; distinguish assumptions from verified provider/legal terms. For free/noncommercial services, record funding and sustainability constraints without imposing payment.

## 6. Select an agent workflow when useful

Assess uncertainty, dependencies, change risk, collaboration, handoff, existing practices, and setup/maintenance cost before recommending additions. Treat starting without additional skills as an equal option. Size alone is insufficient: existing practices may suffice for large projects; small risky changes may merit structure.

Compare relevant options inside or outside this site: e.g. Spec Kit for specification tracking, Superpowers for development skills, OpenSpec for change proposals/deltas. These are fit hypotheses, not rankings or required installations. Explain fit, overhead, compatibility, and revisit conditions; preserve adopted tools and clarify ownership before combining workflows.

Follow assistant rules for selection, authorized setup, activation/invocation, and unavailable tools. Reuse workflow artifacts for plans, tasks, and adopted criteria; preserve required content/checks without competing records.

## 7. Present the plan, then develop

Write the plan yourself, sized to the project:

- Supplied name, description, context, numbered requirements, MVP/non-goals, and measurable acceptance criteria.
- Product, software, design, monetization, and operating decisions as relevant, with alternatives, rationale, assumptions, consequences, and revisit conditions. Mark proposed, accepted, rejected, superseded, or deferred status; record the decision owner and any exact delegated scope.
- A Markdown checklist of adopted project criteria with scope and verification methods; maintain and check it under the assistant rules.
- Risks, unresolved questions, blockers, and dependency-ordered tasks with a verification plan linked to requirements.
- Guideline version/revision and only references actually used. No catalog retrieval date, article-ID inventory, or catalog snapshot is required.

Show the full plan for approval; resolve blocking choices and retain nonblocking deferrals. Begin development after plan approval and an explicit development request. Existing approval and development authorization remain valid within their scope; do not ask again. Planning or planning delegation alone does not authorize development, deployment, publishing, or spending.

Follow assistant rules for larger tasks: task file, resumption, saves/checks, and automatic local commits under restrictions. Report outcomes, applied design/architecture, decisions/owners and reasons/tradeoffs, verification, task-file/save/commit status, remaining gaps, and next steps at completion or interruption.

## 8. Contribute improvements

Suggest wording, topics, counterexamples, or translations through issues/PRs; see optional [contributor guidance](https://github.com/jujinkim/kickoff-jujin-dev-web/blob/main/CONTRIBUTING.md). Pre-release v1, revision 8 retains v1/latest URLs and API schemaVersion 1. Instructions cannot guarantee compliance.
