import type { Lang } from "./i18n";

// Promote only a reviewed release. Versioned URLs remain pinned.
export const startupVersion = "v1";
export const startupText = {
  en: {
    title: "Development startup guidelines",
    intro:
      "Start with your service idea and constraints. Work through the decisions, agree on a plan, then develop.",
    read: "Read guidelines {version}",
    versions: "Guideline versions",
    contribute: "Contribute on GitHub",
    history:
      "v1 · revision 3 · 2026-09-24 — Two required documents, decisions from requirements, and optional catalog reading. History: v1 · revision 2 · 2026-09-23 — Project choices, AI-owned implementation and documentation, and operating constraints. v1 · revision 1 · 2026-09-22 — Initial release: context, catalog choices, software and design baselines, plan approval, and contributions.",
  },
  ko: {
    title: "개발 시작 지침 문서",
    intro:
      "서비스 아이디어와 제약에서 시작해 필요한 결정을 검토하고, 기획을 확정한 뒤 개발합니다.",
    read: "지침 {version} 읽기",
    versions: "지침 버전",
    contribute: "GitHub에서 함께 기여하기",
    history:
      "v1 · 리비전 3 · 2026-09-24 — 필수 문서 두 개, 요구 기반 결정, 카탈로그 선택 참고. 이전: v1 · 리비전 2 · 2026-09-23 — 프로젝트 선택, AI의 내부 구현·문서 작성, 운영 제약. v1 · 리비전 1 · 2026-09-22 — 첫 버전: 서비스 정보, 카탈로그 선택, SW·디자인 기본 지침, 기획 확정, 공동 기여.",
  },
  ja: {
    title: "開発開始ガイドライン",
    intro:
      "サービスの案と制約から必要な判断を検討し、計画を確定してから開発します。",
    read: "ガイドライン{version}を読む",
    versions: "ガイドラインの版",
    contribute: "GitHubで共同改善する",
    history:
      "v1 · リビジョン3 · 2026-09-24 — 必須文書は二つ、要件から判断を導き、カタログ参照は任意に。履歴：v1 · リビジョン2 · 2026-09-23 — 全体の選択、AIによる内部実装・文書作成、運用制約。v1 · リビジョン1 · 2026-09-22 — 初版：背景、カタログ選択、ソフトウェア・デザイン指針、計画承認、共同改善。",
  },
};
export function startupPrompt(lang: Lang, version = "latest") {
  const url = `https://kickoff.jujin.dev/ai/startup/${version}.md`;
  const rules = "https://kickoff.jujin.dev/ai/instructions.md";
  return {
    en: `Read ${url} and ${rules}, then begin project planning from my service requirements and constraints. Preserve confirmed decisions and existing authorization. Use catalog articles only when I request them or they help explain a decision.`,
    ko: `${url} 와 ${rules} 를 읽고, 서비스 요구와 제약에서 프로젝트 기획을 시작해줘. 확정된 결정과 기존 권한은 보존해줘. 카탈로그 글은 내가 요청하거나 결정의 이해에 도움이 될 때만 참고해줘.`,
    ja: `${url} と ${rules} を読み、サービスの要件と制約から企画を始めてください。確定済みの判断と既存の権限を維持してください。カタログ記事は私が依頼した場合や判断の理解に役立つ場合だけ参照してください。`,
  }[lang];
}
