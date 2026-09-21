# Local writing-design verification

Historical design-pack snapshot. For the subsequent seven-style publication, see [styles release review](styles-review.md) and [current verification](../verification.md).

Checked on **2026-09-21**. This report covers local planning documents and the existing site's regression gates. It does not certify future article prose, translations, visualizations or a live deployment.

## Coverage and integrity

- Exactly 58 article designs map one-to-one to the 58 candidate IDs; exactly 19 group designs map to their comparison groups. No extra or missing candidate design.
- Compared candidate metadata with Git HEAD: IDs, categories, en/ko/ja titles, comparison peers, guide relationships, array order and writing order are unchanged. All 58 scopes now state their specific subject, exclusions and likely confusion.
- Each design contains all six article-section plans, all five comparison fields, a reader question, scope boundaries, suitable/unsuitable conditions, concrete input/initial state/action/result, evidence locations and check date, multilingual terms, and a visualization contract.
- All 58 visualization contracts include mobile layout, keyboard behavior, non-color distinctions, alternative description, Markdown equivalent, caption and topic-specific acceptance conditions. These are specifications; no visualization was implemented or runtime-tested.
- Source ledger contains 54 retained references. Original-page passages were inspected through the browsing tool or direct HTTP retrieval. Failed retrievals and successful alternatives are recorded separately. No failed response supplies evidence.
- Styles were prepared and cross-reviewed first. Remaining designs follow the existing candidate queue. Group matrices use shared examples and distinguish compatible concepts from exclusive choices.
- Local document links and source-ledger anchors were checked. No TODO, TBD or FIXME remains in the writing designs.

## Editorial trace checks

- Styles retain the same reading-card content and Save action. Minimalism changes redundant ornament, while flat design changes surface treatment. Neither is made synonymous with the other.
- Requirement examples distinguish saving a link from storing offline content. Stories, use cases and job stories can support the same need.
- Architecture figures distinguish source imports, runtime calls and deployment enclosures. A modular monolith remains a monolith; neither dictates its internal architecture.
- Data-structure examples preserve their contracts: list `[A17,B04,A17]`, set size 2, map replacement under A17, stack output C/B/A, queue A/B/C, priority queue B/A/C under an explicitly authored tie rule.
- Array insertion shifts C99; linked-list insertion separates finding a node from rewiring references. No operation trace is presented as an elapsed-time benchmark.
- Release examples separate traffic recovery from data recovery. Canary counts and thresholds are illustrative; missing observations do not mean success.
- Masonry placement was traced with shortest-column/tie-left rules: totals `(120,0)`, `(120,200)`, `(260,200)`, `(260,380)`, `(380,380)`, `(540,380)`. The final tie places F on the left. Mobile/source order remains A–F.
- Width specimens use schematic units: proportional `3×4 + 3×10 = 42`, monospace `6×8 = 48`. They do not claim real font measurements or universal Unicode cell widths.
- Billing arithmetic was traced: one-time `30+0+0=30`, subscription `12×3=36`, usage `(100+300+600)×0.02=20`. Tax, fees, refunds and differing entitlements are explicitly outside these arithmetic assumptions.
- Revenue source, billing schedule and seller responsibility remain independent axes. MoR diagrams state contract scope and retained product duties; no universal tax or legal guarantee is used.

## Required project gates

| Command            | Result                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `npm run check`    | Passed: 47 Astro files, zero errors/warnings/hints; content and formatting checks passed.                                |
| `npm run build`    | Passed: 36 published source documents; Pagefind indexed 36 pages across three languages.                                 |
| `npm test`         | Passed: 17 tests, including isolated draft/publication builds and scaffold overwrite protection.                         |
| `npm run test:e2e` | Passed: 11 tests against built output, including search, pending candidates, keyboard flows and mobile/desktop overflow. |

The generated site has 173 HTML pages in total because navigation, categories and legacy redirects are also routes. That does not increase the published article or search-document count.

## Preserved public and authoring boundaries

Built `/ai/catalog.json` remains `schemaVersion: 1`, with 12 guide identities and 36 translations. All 58 candidate names remain `준비 중` on their Korean group pages. None has a source article or published concept route. Existing article sources, the single-candidate scaffold generator, content schema and API implementation are unchanged.

The authoring guide now links this pack. No article body, translation draft, visualization implementation, commit, push or deployment was created. There is no unresolved editorial choice blocking writing within the stated scopes. Future work remains English group drafting/review, dated source refresh, translation and visualization implementation/acceptance.
