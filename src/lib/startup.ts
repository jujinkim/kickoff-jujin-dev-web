import type { Lang } from "./i18n";

// Promote only a reviewed release. Versioned URLs remain pinned.
export const startupVersion = "v1";

export const agentWorkflowPrompt = {
  en: "Assess whether extra agent skills or workflow tools are useful, using uncertainty, dependencies, change risk, collaboration, handoff, existing practices, and setup cost. Compare starting without extra skills, Spec Kit, and suitable alternatives; explain fit and tradeoffs. After I accept or delegate the selection, install/configure needed components in my external agent within existing installation authorization, verify availability, and invoke the selected workflow through its supported mechanism. Reuse existing setup and records. If tools are unavailable, provide manual next steps and report what remains unverified.",
  ko: "불확실성·의존 관계·변경 위험·협업·인수인계·기존 작업 방식·설치 비용을 살펴 추가 에이전트 스킬이나 작업 도구가 필요한지 판단해줘. 추가 스킬 없이 시작하기, Spec Kit, 적합한 대안을 비교하고 적합성·장단점을 설명해줘. 내가 선택을 수락하거나 위임하면 기존 설치 승인 범위 안에서 필요한 구성만 외부 AI 에이전트에 설치·설정하고, 사용 가능 여부를 검증한 뒤 지원하는 방식으로 호출해줘. 기존 설치와 기록을 재사용해줘. 도구를 사용할 수 없으면 수동 진행 방법과 미검증 사항을 알려줘.",
  ja: "不確実性・依存関係・変更リスク・共同作業・引継ぎ・既存の方法・導入費用から、追加のエージェントスキルや作業ツールが必要か判断してください。追加スキルなし、Spec Kit、適切な代案を比較し、適合性と利点・欠点を説明してください。私が選択を受け入れるか委任したら、既存の導入許可の範囲で必要な構成だけを外部AIエージェントに導入・設定し、利用可能か検証してから対応する方式で呼び出してください。既存の導入と記録を再利用してください。ツールを使えなければ手動の次の手順と未検証の事項を伝えてください。",
};

// Keep the same workflow request in startup, generated, fallback, and project prompts.
export const workflowPrompt = {
  en: "For unresolved user-owned choices, ask with realistic options, pros/cons, and a recommendation justified by project requirements and constraints. If I delegate with ‘use your recommendation’, decide and record within that context without asking again; continue within existing authorization and handle internal implementation yourself. Maintain a Markdown checklist of adopted project criteria; read relevant items before changes and verify actual results afterward, following the assistant rules. For larger tasks, maintain a task file, save each unit, verify it, and automatically commit locally after checks pass, subject to existing restrictions; follow the rules for remote actions or missing repository/write tools. On completion or interruption, report actual outcomes, applied design/architecture and key decisions with reasons and tradeoffs, user-confirmed versus delegated choices, checks, task-file location, save/commit status, and remaining work.",
  ko: "사용자가 정할 미결정 선택은 현실적인 선택지·장단점과 프로젝트 요구·제약에 근거한 추천안을 함께 질문해줘. ‘알아서 추천대로 해줘’라고 위임하면 해당 문맥 안에서 재확인 없이 결정·기록하고, 기존 승인 범위까지 진행하며 내부 구현은 스스로 처리해줘. 채택한 프로젝트 기준을 Markdown 체크리스트로 유지하고, 수정 전 관련 항목을 읽고 수정 후 실제 결과를 검증해줘. 세부 절차는 AI 행동 지침을 따라줘. 큰 작업은 작업 파일을 갱신하며 단위별 저장·검증 후 기존 금지 규칙을 지켜 자동 로컬 커밋해줘. 원격 작업이나 저장소·쓰기 도구가 없는 경우는 지침을 따라줘. 완료·중단 시 실제 결과, 적용한 디자인·아키텍처와 주요 결정의 이유·절충점, 사용자 확정과 위임받은 선택의 구분, 검증, 작업 문서 위치, 저장·커밋 상태, 남은 작업을 보고해줘.",
  ja: "ユーザーが決める未決定事項は、現実的な選択肢・利点と欠点、要件と制約に基づく推薦案を添えて質問してください。「推薦どおりに任せます」と委任したら、その文脈の範囲で聞き直さず判断・記録し、既存の許可範囲で進め、内部実装は自分で処理してください。採用したプロジェクト基準をMarkdownチェックリストとして維持し、変更前に関連項目を読み、変更後に実際の結果を検証してください。詳細はAI行動規則に従ってください。大きな作業は作業ファイルを更新し、単位ごとに保存・検証して検証通過後に既存の禁止規則を守って自動でローカルコミットしてください。リモート操作やリポジトリ・書込みツールがない場合は指示に従ってください。完了・中断時は実際の成果、適用したデザイン・構成と主要な判断の理由・トレードオフ、ユーザー確定と委任された判断の区別、検証、作業文書の場所、保存・コミット状態、残作業を報告してください。",
};

export const startupText = {
  en: {
    title: "Development startup guidelines",
    intro:
      "Reference guidelines from kickoff for your external AI tool. Copy the request into that tool to work through your service idea and constraints, compare whether extra agent workflows are useful, agree on a plan, then request development.",
    read: "Read guidelines {version}",
    versions: "Guideline versions",
    contribute: "Contribute on GitHub",
    history:
      "v1 · revision 8 · 2026-10-08 — Fit-based agent workflows, starting without extra skills, and verified external-agent setup. History: v1 · revision 7 · 2026-10-01 — Markdown project checklists and relevant checks before and after changes. v1 · revision 6 · 2026-09-28 — Reasoned questions and scoped delegation, task records and local commits, and completion reports. v1 · revision 5 · 2026-09-27 — Version control systems and repository hosting in planning and prompts. v1 · revision 4 · 2026-09-26 — Proportionate architecture, SOLID/GRASP as judgment criteria, quality across software/design/monetization/operations, and maintenance handoff. v1 · revision 3 · 2026-09-24 — Two required documents, decisions from requirements, and optional catalog reading. v1 · revision 2 · 2026-09-23 — Project choices, AI-owned implementation and documentation, and operating constraints. v1 · revision 1 · 2026-09-22 — Initial release: context, catalog choices, software and design baselines, plan approval, and contributions.",
  },
  ko: {
    title: "개발 시작 지침 문서",
    intro:
      "kickoff가 제공하는 외부 AI용 참고 지침입니다. 요청문을 복사해 사용하는 외부 AI 도구에서 서비스 아이디어와 제약, 추가 스킬·작업 도구의 필요를 검토하고, 기획을 확정한 뒤 개발을 요청하세요.",
    read: "지침 {version} 읽기",
    versions: "지침 버전",
    contribute: "GitHub에서 함께 기여하기",
    history:
      "v1 · 리비전 8 · 2026-10-08 — 필요에 맞는 AI 작업 방식, 추가 스킬 없이 시작하기, 외부 에이전트 설치·호출 검증. 이전: v1 · 리비전 7 · 2026-10-01 — Markdown 프로젝트 체크리스트와 수정 전후 관련 항목 점검. v1 · 리비전 6 · 2026-09-28 — 근거 있는 질문과 범위별 위임, 작업 기록·로컬 커밋, 완료 보고. v1 · 리비전 5 · 2026-09-27 — 기획·프롬프트에 버전 관리 시스템과 저장소 호스팅 포함. v1 · 리비전 4 · 2026-09-26 — 규모에 맞는 아키텍처, 판단 기준으로서의 SOLID/GRASP, 소프트웨어·디자인·수익화·운영 품질, 유지보수 인계. v1 · 리비전 3 · 2026-09-24 — 필수 문서 두 개, 요구 기반 결정, 카탈로그 선택 참고. v1 · 리비전 2 · 2026-09-23 — 프로젝트 선택, AI의 내부 구현·문서 작성, 운영 제약. v1 · 리비전 1 · 2026-09-22 — 첫 버전: 서비스 정보, 카탈로그 선택, SW·디자인 기본 지침, 기획 확정, 공동 기여.",
  },
  ja: {
    title: "開発開始ガイドライン",
    intro:
      "kickoffが提供する外部AI向けの参考ガイドラインです。依頼文をコピーしてお使いの外部AIツールでサービスの案と制約、追加スキル・作業ツールの必要性を検討し、計画を確定してから開発を依頼してください。",
    read: "ガイドライン{version}を読む",
    versions: "ガイドラインの版",
    contribute: "GitHubで共同改善する",
    history:
      "v1 · リビジョン8 · 2026-10-08 — 必要に合うAI作業方式、追加スキルなしの開始、外部エージェントの導入・呼出し検証。履歴：v1 · リビジョン7 · 2026-10-01 — Markdownプロジェクトチェックリストと変更前後の関連項目の確認。v1 · リビジョン6 · 2026-09-28 — 根拠付きの質問と範囲を限定した委任、作業記録・ローカルコミット、完了報告。v1 · リビジョン5 · 2026-09-27 — 計画・プロンプトにバージョン管理システムとリポジトリホスティングを追加。v1 · リビジョン4 · 2026-09-26 — 規模に合う構成、判断基準としてのSOLID/GRASP、ソフトウェア・デザイン・収益化・運用の品質、保守の引き継ぎ。v1 · リビジョン3 · 2026-09-24 — 必須文書は二つ、要件から判断を導き、カタログ参照は任意に。v1 · リビジョン2 · 2026-09-23 — 全体の選択、AIによる内部実装・文書作成、運用制約。v1 · リビジョン1 · 2026-09-22 — 初版：背景、カタログ選択、ソフトウェア・デザイン指針、計画承認、共同改善。",
  },
};
export function startupPrompt(lang: Lang, version = "latest") {
  const url = `https://kickoff.jujin.dev/ai/startup/${version}.md`;
  const rules = "https://kickoff.jujin.dev/ai/instructions.md";
  const prompt = {
    en: `Read ${url} and ${rules}, then begin project planning from my service requirements and constraints. Preserve confirmed decisions and existing authorization. Include version control systems and repository hosting in planning; preserve existing choices and resolve only what is still undecided. Use catalog articles only when I request them or they help explain a decision.`,
    ko: `${url} 와 ${rules} 를 읽고, 서비스 요구와 제약에서 프로젝트 기획을 시작해줘. 확정된 결정과 기존 권한은 보존해줘. 버전 관리 시스템과 저장소 호스팅도 기획에 포함하고, 기존 선택을 유지하며 미결정 사항만 다뤄줘. 카탈로그 글은 내가 요청하거나 결정의 이해에 도움이 될 때만 참고해줘.`,
    ja: `${url} と ${rules} を読み、サービスの要件と制約から企画を始めてください。確定済みの判断と既存の権限を維持してください。バージョン管理システムとリポジトリホスティングも計画に含め、既存の選択を維持して未決定事項だけを検討してください。カタログ記事は私が依頼した場合や判断の理解に役立つ場合だけ参照してください。`,
  }[lang];
  return `${prompt} ${agentWorkflowPrompt[lang]} ${workflowPrompt[lang]}`;
}
