# Monetization catalog verification

Verification scope: 24 concepts, seven categories, 72 language documents, 12 interactive demos and 12 static diagrams. Git publication is tracked separately from these local gates.

English groups reviewed before Korean/Japanese translations on 2026-09-22. Definitions, limits, fictional examples, amounts and omitted-cost assumptions agree. English body targets 70–100 words; each full overview must pass the existing 60-second budget. Translation revision 1 matches English revision 1. No native-speaker review claimed.

[Source refresh](catalog-writing/monetization-sources.md), [writing index](catalog-writing/README.md), [registration guidance](design-demos.md).

## Delivered content and implementation

- 24 concepts across revenue sources (5), billing (4), seller responsibility (2), pricing (6), access (2), purchase types (2), and ad formats (3).
- 72 English/Korean/Japanese source documents; English bodies 83–91 words. Full reading budgets including the existing 15-second visual allowance: en 48–51s, ko 37–43s, ja 38–44s.
- 24 independent Astro components: 12 interactive, 12 static. Registry mode is optional; omission retains the existing interactive lifecycle. Static figures require no component script, reset or mount readiness, and show no interaction instruction.
- 72 PNG thumbnails, 24 full visualization briefs, 16 new writing briefs, seven group reviews, source ledger and glossary updated.
- All existing candidate IDs, titles, categories and order are preserved. The six localized revenue/payments guides and pre-existing thumbnails are unchanged. New comparison peers remain in the same category; combinations use related reading.
- No payment, advertising SDK, account or storage connection. Integer hundredths keep price arithmetic exact; all amounts and policies are fictional and omitted costs are explicit.

## Executed verification

First capture used `npm run build:demo-preview`; only missing PNG checks were bypassed. Normal gates then ran sequentially:

| Gate                                                       | Observed result                                                                             |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `npm run check`                                            | PASS; 149 files, 0 errors, 0 warnings, 0 hints; 219 published documents; formatting valid   |
| `npm run build`                                            | PASS; 371 pages; Pagefind indexes 219 articles in three languages                           |
| `npm run thumbnails -- --id <id>` for each monetization ID | PASS; 72 final localized PNGs                                                               |
| `npm run build` after capture                              | PASS; final thumbnails copied into output                                                   |
| `npm test`                                                 | PASS; 31 tests including real draft-exclusion build, publication gates and output contracts |
| `npm run test:e2e`                                         | PASS; 80 tests, 5.7 minutes; full design/platform/catalog regression suite                  |

The full browser suite covers every monetization item in en/ko/ja at 320, 768 and 1440px, light/dark surroundings, no horizontal overflow, localized label contrast, visible keyboard focus, reset and JavaScript-disabled initial reading. All published titles are searchable. Eighteen dedicated monetization browser tests exercise zero/100/101 usage, seats, invalid inputs, prepaid depletion/insufficient balance/top-up, subscription cancellation/failure/retry, trial expiry/explicit conversion, repeated purchases/use and ad interruption/duplicate completion. Existing platform forced-color/reduced-motion tests and design layout/font/workspace tests also pass.

Initial verification caught hard-coded pre-extension category expectations and an inherited dark-theme eyebrow color with insufficient contrast on the authored light diagram surface. Expectations now use taxonomy data and include business groups; the diagram label color is scoped explicitly. Full rerun above passes.

A final source-attribution review pointed the base-plus-overage article directly at Stripe’s pricing-model index, whose usage row explicitly names fixed fee and overage. It changes only the source URL in three article bodies and research links; diagram code, state, text and captures are unchanged. After this citation-only edit, `npm run check` and `npm run build` passed again; `npm test` passed all 31 tests, and `npm run test:e2e -- tests/browser/monetization.spec.ts` passed all 18 tests in 15.5 seconds. Captures need no change because the cited link is outside the captured diagram.

All 72 monetization documents retain `published` after these gates. Remote deployment is outside this verification report.

## Visual evidence and review

- [Registered thumbnails](../public/thumbnails/) contain `<id>-en.png`, `<id>-ko.png`, `<id>-ja.png` for all 24 items.
- `artifacts/monetization-demos/<id>-<lang>-<width>-<theme>.png`: 432 screenshots from the full browser matrix (local ignored artifacts).
- Representative images were visually inspected for money/value lanes, seller responsibility tables, pricing and subscription panels, credit wallet, trial access, consumable inventory, feature plans and ad sequences. Narrow screens stack in reading order; text and controls remain visible. Authored solid light diagram surfaces intentionally remain light within dark site surroundings.
- An additional `agent-browser` check exercised Korean volume pricing at 101 exports, confirming 10.10 and the graduated comparison 20.10, and inspected the Japanese static feature table with no controls. No browser page errors were reported.

HTML, Markdown, Pagefind, sitemaps and the AI catalog include the release. API schema remains v1, comment identities remain stable and comparison summaries remain collapsed. No external deployment or native-speaker certification is claimed.
