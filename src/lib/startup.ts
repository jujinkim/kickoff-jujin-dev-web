import type { Lang } from "./i18n";

// Promote only a reviewed release. Versioned URLs remain pinned.
export const startupVersion = "v1";
export const startupText = {
  en: {
    title: "Development startup guidelines",
    intro:
      "Start with your service idea. Compare the catalog, agree on a plan, then develop.",
    read: "Read guidelines {version}",
    versions: "Guideline versions",
    contribute: "Contribute on GitHub",
    history:
      "v1 · revision 1 · 2026-09-22 — Initial release: context, catalog choices, software and design baselines, plan approval, and contributions.",
  },
  ko: {
    title: "개발 시작 지침 문서",
    intro:
      "서비스 아이디어에서 시작해 카탈로그를 비교하고, 기획을 확정한 뒤 개발합니다.",
    read: "지침 {version} 읽기",
    versions: "지침 버전",
    contribute: "GitHub에서 함께 기여하기",
    history:
      "v1 · 리비전 1 · 2026-09-22 — 첫 버전: 서비스 정보, 카탈로그 선택, SW·디자인 기본 지침, 기획 확정, 공동 기여.",
  },
  ja: {
    title: "開発開始ガイドライン",
    intro: "サービスの案からカタログを比較し、計画を確定してから開発します。",
    read: "ガイドライン{version}を読む",
    versions: "ガイドラインの版",
    contribute: "GitHubで共同改善する",
    history:
      "v1 · リビジョン1 · 2026-09-22 — 初版：背景、カタログ選択、ソフトウェア・デザイン指針、計画承認、共同改善。",
  },
};
export function startupPrompt(lang: Lang, version = "latest") {
  const url = `https://jujin.dev/${lang}/start/${version}.md`;
  return {
    en: `Read ${url} and begin the project planning kickstart. Confirm and prepare.`,
    ko: `${url} 을 읽고, 프로젝트 기획 킥스타트를 시작한다. 확인 후, 준비하라.`,
    ja: `${url} を読み、プロジェクト企画のキックスタートを始める。確認して準備せよ。`,
  }[lang];
}
