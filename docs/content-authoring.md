# Catalog and guide authoring

This guide describes the authoring workflow. Design implementation follows [Design demos](design-demos.md). 64 concepts and 9 guides are active in three languages; no candidates remain pending. See [catalog scope](catalog-scope.md). Current counts and release reviews live in the [writing index](catalog-writing/README.md). The earlier [styles review](catalog-writing/styles-review.md) is historical.

## Shared data and routes

- `src/data/categories.json` is the single taxonomy: stable language-independent ID, nullable parent, localized names/descriptions, sibling order. Roots are navigation shelves; concepts belong to one leaf comparison group.
- `src/data/candidates.json` holds 70 existing concept records (64 active, 6 reference-only): stable ID, leaf category, en/ko/ja titles, scope, comparison peers, related guide IDs, writing order. Public pending names and the writing queue filter this file through `src/data/catalog-retirements.json`. Retired categories and guide IDs point to an active integrated guide; their existing paths and comment identities remain intact. The eight unwritten data-structure records were removed.
- `npm run content:new -- --list` shows active writing order and computed English status. Retired concepts cannot be scaffolded. No file means `planned`; existing `draft` or `published` frontmatter determines subsequent states. Public pages expose only published text; an untranslated or draft candidate still displays its fixed candidate name as coming soon, with no article link.
- Concepts: `/{lang}/catalog/{articleId}/`; categories: `/{lang}/catalog/categories/{categoryId}/`; guides: `/{lang}/guides/{articleId}/`. Article Markdown uses `/en/catalog/{articleId}.md` or `/en/guides/{articleId}.md` for every UI language. Existing localized Markdown URLs serve the English original; keep translated sources for HTML.
- Legacy guide `/catalog/{articleId}/` routes are noindex static redirects with canonical guide links. Legacy Markdown serves the same source and declares the new canonical. IDs, comments and translation identity do not change.
- `/ai/catalog.json` schema version 1 includes `kind`, taxonomy hierarchy and published comparison summaries. Candidates are not articles. Draft bodies never enter HTML, Markdown, Pagefind, sitemap, llms.txt or AI article lists.

## Generate draft scaffolds

```sh
npm run content:new -- --id brutalism
npm run content:new -- --list
```

Creates English source and Korean/Japanese draft scaffolds, all `status: draft`. Refuses the entire operation if any target already exists. No LLM call, body generation or automatic publishing. Template implementation: `scripts/content-new.mjs` and localized sections in `scripts/catalog-data.mjs`.

## Shared editorial rule: Why → How → What

This rule applies to **all guide and catalog articles**, including existing reference articles and every English/Korean/Japanese translation. Write from the reader's goal, not from an inventory of terminology. The intended flow is: **“I want this result, or I have this problem → here is how to address it → this approach is called this concept.”** A heading rename or mechanical paragraph shuffle is not enough.

Use these three level-two sections, in order; guides may use level-three subsections or numbered steps within them:

| Role | English heading             | Korean heading    | Japanese heading   |
| ---- | --------------------------- | ----------------- | ------------------ |
| Why  | Why: the goal or problem    | 왜 필요한가       | なぜ必要なのか     |
| How  | How: work toward a solution | 어떻게 해결하는가 | どう解決するのか   |
| What | What: the concept           | 무엇이라 부르는가 | どんな考え方なのか |

1. **Why:** answer **“Why is this technique needed?”** first. Before the problem, introduce a familiar setting: what the example app, page, or service is for, who uses it, and which ordinary actions they need. Then show a specific action going wrong or becoming difficult, the desired outcome, and why that difficulty calls for this approach. Do not start with an unexplained person, app name, or implementation detail. A generic goal disconnected from the technique is insufficient. Explain what the reader needs to improve before introducing terminology. “This exists, so try it” is not a motivation.
2. **How:** connect that problem to a concrete approach. Show inputs, actions, observable results, failure handling, and a way to check success. Use the illustration or interactive demo here, after the problem is established. The text must work without the visual or JavaScript.
3. **What:** name and define the approach just demonstrated. Explain its boundaries, costs, alternatives, and when to reconsider it. Avoid presenting a conditional option as a universal prescription.

Choose a distinct, familiar situation for each article, including siblings in
the same comparison group. Keep the article's problem, worked result, visual,
caption, comparison summary, and translations about that situation. Opaque
fixture codes are not reader-facing examples; name the person, item, and action.
When revising an opening, read the English Why and How together before translating:
the setup should make the later worked example unsurprising. Preserve that
setup, problem, and result in Korean and Japanese without padding short concepts.

Before approving a Why section, check its opening in this order:

1. Can a new reader tell what the imagined app, page, or service does and who uses it before a named example actor or failure appears?
2. Does it name the ordinary actions needed in that setting, then show a specific problem with one of those actions? A bare app name or a generic wish is not enough.
3. Does How continue the same situation and show a result that answers that problem? Do the visual, caption, comparison summary, and all three translations agree?

For example, do not open with “Jun saves Borrowing Rules” before explaining the
library guide. A usable opening in each language is:

- EN: “Imagine building a library guide. Readers find borrowing rules and save useful pages. If the page itself validates and stores every save, a second entry point duplicates those checks.”
- KO: “도서관 안내 앱을 만든다고 가정해 봅시다. 독자는 대출 규칙을 찾아보고 필요한 글을 저장합니다. 화면이 검증과 저장을 모두 맡으면 다른 입력 경로에서 같은 규칙을 복사해야 합니다.”
- JA: “図書館の案内アプリを作るとします。読者は貸出ルールを探し、役立つ記事を保存します。画面だけで検証と保存を担うと、別の入口で同じ規則を複製することになります。”

Adapt the scene to each article; do not reuse this library example across a
comparison group. A concise concept can combine setup and problem in one
paragraph. Replace repetitive lead-in text instead of exceeding its reading
budget.

**Guides are practical walkthroughs, about 2–3 minutes each.** Expand the reasoning and method: a worked scenario, actionable steps, why those steps matter, a common mistake or failure case, and an observable completion check. Readers should know what to do next without having to learn internal implementation vocabulary. AI writes appropriate documentation and chooses internal details within agreed product behavior. Add useful detail, never repeated filler to meet a word count.

**Catalog concepts remain short introductions, about one minute.** Keep one problem, one concrete solution/example, and the definition with a meaningful tradeoff. Their purpose is recognizing and comparing a choice; the related guide provides the longer procedure. Optional comparison tables, related reading, and reusable AI prompts remain disclosure panels.

The editorial estimate uses title, summary, and body at 180 words/minute or 600 CJK characters/minute, plus 15 seconds for a visual. Published guides must fall within **120–180 seconds**; published concepts must stay at **60 seconds or less**. These estimates are not a guarantee of anyone's reading speed. Translations preserve the same decisions, examples, caveats, and practical depth; check each language independently. Source URLs and optional panels do not pad the budget.

Frontmatter `comparison` retains `features`, `advantages`, `limitations`, `suitable`, `combinations`, each a brief clause derived from the body. Guides retain their preview and reusable `aiPrompt`; the prompt is separate from the body.

## Generation brief

Start with the [catalog writing designs](catalog-writing/README.md): group and candidate briefs, a shared multilingual glossary, and source ledgers with release-specific refreshes. Historical briefs specify evidence and comparison research; their section order and length are superseded by the shared editorial rule above. These are local preparation materials, not published articles. Review the group's English originals before Korean/Japanese translation; refresh dated sources when drafting. The existing generator still scaffolds one selected candidate at a time.

Read candidate scope, all sibling candidate IDs, related guides, and current project instructions before drafting. Cover one concept only. Distinguish it from homonyms and nearby abstractions. Use the same five comparison dimensions for all siblings, with explicit context and concrete examples. Describe costs and limitations alongside benefits. Explain when choices can coexist: a typeface width, visual style and layout are independent axes; styles can combine. Do not invent mutually exclusive choices or include individual font products.

Verify original authors and official sources before asserting attribution, definitions or product capabilities. Check volatile product/service claims at writing time and record `checked` plus dated source context; avoid unsupported pricing/version claims. Separate source-backed facts from author judgment and conditional advice. Include primary source links and a concrete textual/code example. Never fill comparison tables from candidate titles alone.

Write and review English first; Korean/Japanese preserve scope, evidence and caveats. Keep `articleId`, `kind`, `category`, `related` and preview choice consistent across translations. `sourceRevision` identifies reviewed English revision. Set `published` only after editorial review; placeholders must not remain.

The active design, platform/hosting, monetization, architecture-boundary and service-decomposition groups are complete. Select new topics by project-level impact: product behavior, overall structure or visual direction, toolchain, operating responsibility and business choices. Internal data structures, object details, document formats and rollout mechanics belong to AI implementation guidance. For new designs, use [the demo brief](templates/design-demo-brief.md) and [implementation workflow](design-demos.md). Review related concepts together; remaining writing order comes from candidate `order`.

Use `related` IDs to link published concepts and guides. Rendering adds incoming relationships among active entries so a concept linked to a guide appears back on that guide. Reference-only articles do not appear in recommendations, AI relationships, Pagefind, sitemaps or selection menus. Draft relationships never render. References to an unissued peer stay prose or candidate metadata until that peer is published; do not create broken body links.

## Gates

Run `npm run check`, `npm run build`, `npm test`, `npm run test:e2e`. Tests exercise taxonomy failures, scaffold overwrite protection, guide aliases, and isolated concept publication/draft exclusion. Publication fixtures live in a temporary copy and are removed after verification. Browser tests target built `dist`, not development output.
