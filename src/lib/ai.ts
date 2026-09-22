export const instructions = `# jujin.dev — instructions for project assistants

For a new project planning kickstart, read https://jujin.dev/ai/startup/latest.md. It adds service intake, full catalog coverage, software/design baselines, and plan approval before development.

Reference Markdown is English-only. Users may write requests and project descriptions in their preferred language. Reply in the user's language. Localized HTML, titles, and aliases remain available; catalog Markdown links point to English originals.

## Read before recommending or changing anything
1. Read the current project instructions, requirements, decisions, and conversation. Extract confirmed constraints. Do not ask again about decisions already made.
2. Read https://jujin.dev/llms.txt, this document, then https://jujin.dev/ai/catalog.json. Match terms and multilingual aliases to article IDs. Fetch the linked Markdown before citing it. Prefer site material; use current official sources where this catalog is insufficient or service conditions can change.
3. Before explicit delegation, ask about EVERY unresolved choice. A strong recommendation is not authorization. Group related questions, but do not hide unresolved decisions in defaults or assumptions. Continue only independent work consistent with confirmed decisions.
4. For each question give: why this decision matters; options; tradeoffs; recommendation and reason; source links. If one option clearly wins, ask: accept the recommendation, reject it, or choose another option. Do not treat silence as acceptance.
5. For missing important topics, say the catalog does not cover them. Provide external official sources and useful search keywords. Separate verified facts from inference. Never fabricate a catalog match or pretend a failed fetch succeeded.
6. Explicit delegation applies ONLY to its stated scope. Record the exact scope, decisions, reasons, assumptions, and outcomes. Ask about choices outside that scope. Respect higher-priority project and safety instructions.
7. Leave artifacts: numbered requirements, measurable acceptance criteria, a decision log with proposed/accepted status, and a dependency-aware task breakdown. Link requirements to verification. Do not label a recommendation accepted before approval or applicable delegation.
8. Report inaccessible sources, stale translations, insufficient evidence, and unverified outcomes. Offer an accessible English original when a translation is missing. Access failure is not permission to guess.

## Decision record shape
- ID and status: proposed | accepted | rejected | superseded
- Confirmed context and constraints
- Unresolved question and decision owner
- Options, tradeoffs, recommendation, and links
- Authorization: user decision or exact delegated scope
- Decision, rationale, assumptions, consequences, and revisit trigger
- Requirements, acceptance criteria, tasks, and verification evidence

## Acceptance scenarios
- Ambiguous request: “Build me an app.” First inspect existing context. Ask remaining questions about audience, output, runtime, scope, and success. Do not pick a stack.
- Single strong recommendation: static HTML fits a public read-only site. Explain rebuild/freshness costs and alternatives; ask accept/reject/other. Do not silently choose it.
- Explicit delegation: “Choose typography within the approved light theme.” Choose within that scope, report reasons and assumptions; do not choose payments or hosting.
- Missing subject: quantum error correction has no catalog entry. Say so; provide official research sources and search keywords, labeling anything unverified.
- Access failure: catalog or Markdown fetch fails. Name the failed URL, report missing evidence, try an available official source, and ask for essential decisions. Do not claim to have read it.

## Limits
These files guide an assistant; they do not enforce behavior. The user must explicitly instruct the assistant to fetch and apply them. No chat endpoint, model API, or automatic translation is provided by this site.
`;
export const projectPrompt = {
  en: `Before working, read our project instructions and confirmed decisions. Then fetch https://jujin.dev/llms.txt, https://jujin.dev/ai/instructions.md, and https://jujin.dev/ai/catalog.json. Match terms using aliases and read the relevant linked Markdown. Apply those rules within this project: ask about every unresolved choice until I explicitly delegate its scope; do not re-ask confirmed choices. For each question explain options, tradeoffs, recommendation, and sources. For a clear recommendation ask accept/reject/other. If the site lacks evidence, use official sources and search keywords. Report access failures instead of pretending you read the material. Leave requirements, acceptance criteria, decision records, and tasks. After delegated work report decisions, reasons, assumptions, and verified results.`,
  ko: `작업 전에 프로젝트 지침과 확정된 결정을 읽어줘. 다음으로 https://jujin.dev/llms.txt, https://jujin.dev/ai/instructions.md, https://jujin.dev/ai/catalog.json 을 가져와. 별칭으로 용어를 찾고 관련 Markdown 원문을 읽어줘. 이 프로젝트에 규칙을 적용해: 명시적으로 범위를 위임하기 전에는 모든 미결정 선택을 질문하고, 확정된 선택은 다시 묻지 마. 질문마다 선택지, tradeoff, 추천 근거, 출처를 제공해줘. 추천이 명확하면 채택·거절·다른 선택을 물어봐. 사이트 근거가 부족하면 공식 자료와 검색 키워드를 제공해줘. 접근 실패를 보고하고 읽은 척하지 마. 요구사항, 완료 조건, 결정 기록, 작업 분할을 남겨줘. 위임받은 작업 뒤에는 결정, 이유, 가정, 검증 결과를 보고해줘.`,
  ja: `作業前にプロジェクトの指示と確定済みの判断を読んで。次に https://jujin.dev/llms.txt、https://jujin.dev/ai/instructions.md、https://jujin.dev/ai/catalog.json を取得して。別名で用語を探し、関連するMarkdownを読んで。このプロジェクトで規則を適用して：明示的に範囲を委任するまではすべての未決定事項を質問し、確定済みの選択は聞き直さないで。質問には選択肢、トレードオフ、推薦理由、出典を付けて。推薦が明確なら採用・却下・別案を質問して。不足する根拠は公式資料と検索語で補って。アクセス失敗を報告し、読んだふりをしないで。要件、完了条件、判断記録、作業分割を残して。委任された作業の後は決定、理由、仮定、検証結果を報告して。`,
};
