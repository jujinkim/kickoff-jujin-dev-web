# Catalog scope, 2026-09-23

kickoff.md helps people prepare custom prompts and learn project planning, design, and technology choices before discussing or working in an external AI tool. Users do not need to know every implementation term. This review covers all current groups and guides, following the maintainer's approved scope.

Current purpose and reader-flow evidence: [product alignment review](product-alignment-review.md). This scope review records the 2026-09-23 decision; later local guidance revisions do not change the inventory below.

## Decision ownership

Users own product behavior, scope, architecture, design direction, development tools, hosting, pricing, budget, data handling and operating responsibility unless they delegate that scope. AI chooses internal data structures, algorithms, classes, document formats and release procedures within those agreements. A local feature still requires clarification when its behavior, price or data use is unspecified. Technical scope is not permission to deploy, publish or spend.

## Complete group review

| Existing area                                              | Active concepts | Treatment                                                                                                                                             |
| ---------------------------------------------------------- | --------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Architecture boundaries and dependencies                   |               3 | Retain: layered, hexagonal, clean architecture. Explain project consequences.                                                                         |
| Service decomposition                                      |               3 | Retain: monolith, modular monolith, microservices.                                                                                                    |
| Requirements expression                                    |               0 | Integrate user story, use case and job story into the requirements guide and AI documentation duties.                                                 |
| Abstract collections, sequential storage, processing order |               0 | Remove eight unwritten candidates from the registry and writing queue. AI selects implementation from behavior requirements.                          |
| Static generators, web UI tools, game engines              |               9 | Retain: toolchains affect project structure, maintenance and delivery. Discuss only the relevant platform family.                                     |
| Hosting execution models                                   |               3 | Retain: runtime needs, operating ownership and budget affect the project.                                                                             |
| Release replacement                                        |               0 | Integrate rolling, blue-green and canary planning into delivery/operations guidance. Users decide acceptable downtime, recovery, exposure and budget. |
| Columns, content arrangement                               |               6 | Retain: visible layout choices.                                                                                                                       |
| Styles                                                     |              11 | Retain: product visual direction.                                                                                                                     |
| Typeface shapes, character width                           |               5 | Retain: project typography; concrete specimens let users decide without prior terminology.                                                            |
| Revenue sources, billing, pricing, free access             |              17 | Retain: product and business decisions; discuss applicable groups only.                                                                               |
| Seller responsibility                                      |               2 | Retain when relevant to paid distribution and operating ownership.                                                                                    |
| In-app purchase types, ad formats                          |               5 | Retain when relevant to the chosen product and business model; these change user experience and entitlements.                                         |
| **Total**                                                  |          **64** | Five active roots; no pending candidates.                                                                                                             |

## Guide integration

Nine guides remain active: `srs`, `architecture`, `tools`, `static-sites`, `shipping`, `layout`, `theme`, `revenue`, `payments`.

- `srs`: desired behavior, motivation, success/failure examples, measurable acceptance and AI-authored decision records. Integrates document-format guidance and useful collection questions such as duplicate handling and ordering.
- `architecture`: project-wide roles, dependencies, rule/data ownership, contracts and recovery ownership. Integrates the useful OOAD scope; AI works out local objects and optional UML.
- `shipping`: runtime, distribution, hosting and operating constraints. AI derives release procedures, compatibility checks, verification gates and rollback plans.
- `collections`, `ooad`, `adr`: no longer separate choices or recommendations. Existing article bodies, IDs, URLs and comment identities remain accessible as references.

## Discovery and compatibility

`src/data/catalog-retirements.json` maps former categories and guides to integrated guides. The full taxonomy and six existing concept records remain as route/reference metadata. Eight unwritten data-structure records are removed from `candidates.json`; their briefs remain historical research.

Active lists, category navigation, homepage recommendations, authoring queue, related links, AI catalog, llms.txt, sitemaps and Pagefind use the same scope. Existing article URLs retain their content and comments with noindex, no Pagefind body and no old copyable request. Former category URLs lead to the integrated guide. No removal notices or retirement badges appear in the product.

API schema remains 1. Content inventory is still 246 localized published reference/article documents; 219 belong to active discovery (64 concepts plus 9 guides, three languages). The startup guideline remains v1; revision 3 made the catalog optional learning material and derives decisions from project requirements. See [the guidance review](ai-guidance-review.md). The catalog inventory and JSON structure are unchanged.

## Sources and editorial judgment

The choice of catalog scope is a maintainer/editorial decision. Sources support the integrated technical explanations, not the removal policy. Checked on 2026-09-23:

- [Microsoft architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles): responsibility separation, contracts and internal implementation boundaries.
- [NASA software requirements](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695421/SWE-050%2B-%2BSoftware%2BRequirements): observable, verifiable requirements. The indexed source passage was available; direct page retrieval timed out during this review.
- [AWS ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html): significant choices, context and consequences. The former `welcome.html` URL failed; the current process page replaces it in the integrated guide.
- [Google SRE canarying releases](https://sre.google/workbook/canarying-releases/): staged exposure and meaningful evaluation.

## Verification

Run check, build, unit/output tests and browser tests sequentially. No demo components or thumbnail inputs changed, so thumbnail capture is not required. Verify active counts, absence from search/navigation/AI output, reference URL/comment compatibility, category forwarding, retained project choices, and multilingual guide/prompt parity. Automated checks cannot establish external assistant compliance; review the ownership scenarios above separately.

### Observed results

- `npm run check`: zero errors, warnings or hints; content and formatting validation pass.
- `npm run build`: pass; Pagefind indexes 219 localized articles.
- `npm test`: 35 tests pass, including reference URLs, active AI relationships, authoring queue and isolated draft/translation output.
- Browser suite: 86 of 92 passed on the initial full run. Six test expectations still assumed the previous search inventory or a visible empty results container. After updating them and the remaining startup link, a focused rerun of all six plus four startup tests passed (10/10). All 92 distinct browser cases are covered; the final source change affects the retested startup flow, not demo implementations.
- Agent-browser: Korean homepage and catalog navigation render correctly; five root links are present; console and page-error logs are empty. Screenshot: `/tmp/jujin-catalog-scope-home.png` (local verification artifact).
- Editorial scenario review: unclear duplicate behavior remains a user question; internal collection choice does not. AI writes documentation and optional UML. Cost/availability changes remain user-owned and a release plan does not authorize deployment. External assistant behavior was not executed or certified.

Verification above covers the local build and browser behavior.
