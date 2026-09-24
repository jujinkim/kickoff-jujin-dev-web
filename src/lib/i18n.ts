export const languages = ["en", "ko", "ja"] as const;
export type Lang = (typeof languages)[number];
export const languageNames = { en: "English", ko: "한국어", ja: "日本語" };
import taxonomy from "../data/categories.json";
import { activeTaxonomy } from "./catalog";
export const categories = activeTaxonomy
  .filter((c) => !c.parent)
  .map((c) => c.id);
export const categoryNames: Record<
  Lang,
  Record<string, string>
> = Object.fromEntries(
  languages.map((lang) => [
    lang,
    Object.fromEntries(taxonomy.map((c) => [c.id, c.names[lang]])),
  ]),
) as Record<Lang, Record<string, string>>;
export const strings = {
  en: {
    start: "Create a prompt",
    help: "How to use",
    navigation: "Main navigation",
    createPrompt: "Create a prompt for AI",
    guidesIntro:
      "Practical walkthroughs for learning project planning through examples of behavior, structure, and constraints.",
    catalogIntro:
      "Learning resources for understanding and comparing concepts and choices. Choose a category to explore examples and tradeoffs.",
    catalog: "Catalog",
    guides: "Project planning",
    pending: "Coming soon",
    ai: "Instructions for AI",
    aiRules: "AI behavior rules",
    about: "About",
    theme: "Dark mode",
    skip: "Skip to content",
    eyebrow: "Learning resources for project planning and design",
    hero: "Understand the design.\nGive AI a clear request.",
    intro:
      "Learn and compare planning, architecture, and technology choices through examples. Describe the service you want to build and prepare a first prompt to discuss its design with the AI tool you use.",
    siteNotice:
      "This site provides learning resources and prompts. AI conversations and development take place in the external AI tool you use.",
    browse: "Explore the catalog",
    learn: "A good place to start",
    recent: "Freshly revised",
    categories: "Choose the direction of your project.",
    all: "All topics",
    search: "Search the full text",
    searchHint: "Try requirements, layout, or subscription…",
    preview: "Examples",
    thumbnail: "Cards",
    list: "List",
    views: "Catalog view",
    empty: "No matches. Try another term or category.",
    searchError: "Search could not load. Browse the catalog below or retry.",
    results: "results",
    read: "Open field note",
    updated: "Updated",
    toc: "On this page",
    copy: "Copy instructions",
    copied: "Copied",
    copyError: "Copy failed. Select and copy the text below.",
    markdown: "Read Markdown (English)",
    promptLanguage:
      "AI reference Markdown is in English. Write your own requests and project descriptions in your preferred language.",
    related: "Keep exploring",
    comments: "Discuss this idea",
    commentsNote:
      "Comments are shared across languages. GitHub login required to post.",
    commentsPending:
      "Comments will open after the GitHub integration is connected.",
    stale:
      "Translation needs an update. Check the English original for the latest revision.",
    missing: "Not translated — read English",
    original: "English original",
    footer:
      "Learning resources and prompts. Discuss and build with your external AI tool.",
    count: "field notes",
    back: "Back to catalog",
    aiIntro:
      "Instructions to share with your external AI tool for planning, architecture comparisons, and detailed design questions.",
    aiWarning:
      "Publishing files does not make an AI obey them. Tell it to read, apply, and report what it could not access.",
    aboutIntro:
      "Learn project planning, design, and technology choices through examples, and prepare prompts for your external AI tool.",
    startIntro:
      "Add what you know about your service. Prepare a request here, then paste it into your external AI tool to discuss requirements and design choices.",
    next: "Next step",
    notFound: "This shelf is empty.",
    home: "Go home",
    prompt: "Project instructions",
    guide: "Read the rules",
    source: "Source & edits",
  },
  ko: {
    start: "프롬프트 만들기",
    help: "이용 가이드",
    navigation: "주 메뉴",
    createPrompt: "AI에게 던질 프롬프트 만들기",
    guidesIntro:
      "프로젝트의 동작·구조·제약을 예시로 따라 배우는 실전 기획 안내입니다.",
    catalogIntro:
      "개념과 선택지를 배우고 비교하는 자료입니다. 카테고리를 선택해 예시와 장단점을 살펴보세요.",
    catalog: "카탈로그",
    guides: "프로젝트 기획",
    pending: "준비 중",
    ai: "AI용 지침",
    aiRules: "AI 행동 지침",
    about: "소개",
    theme: "다크 모드",
    skip: "본문으로 이동",
    eyebrow: "프로젝트 기획·설계를 위한 학습 자료",
    hero: "설계를 이해하고,\nAI에게 구체적으로 요청하세요.",
    intro:
      "기획·아키텍처·기술 선택을 예시로 배우고 비교하는 사이트입니다. 만들고 싶은 서비스를 정리해, 사용하는 AI와 설계를 논의할 첫 프롬프트를 준비하세요.",
    siteNotice:
      "이곳에서는 학습 자료와 프롬프트를 제공합니다. AI 대화와 개발은 사용하는 외부 AI 도구에서 진행합니다.",
    browse: "카탈로그 둘러보기",
    learn: "여기서 시작하세요",
    recent: "최근 손본 글",
    categories: "프로젝트의 방향을 정하세요.",
    all: "전체 분류",
    search: "본문 검색",
    searchHint: "요구사항, 레이아웃, 구독…",
    preview: "예시",
    thumbnail: "카드",
    list: "리스트",
    views: "카탈로그 보기",
    empty: "결과가 없습니다. 검색어나 분류를 바꿔보세요.",
    searchError:
      "검색을 불러오지 못했습니다. 아래 목록을 보거나 다시 시도하세요.",
    results: "개 결과",
    read: "글 읽기",
    updated: "수정",
    toc: "이 글의 순서",
    copy: "지시문 복사",
    copied: "복사 완료",
    copyError: "복사 실패. 아래 글을 선택해 복사하세요.",
    markdown: "Markdown 읽기 (영어)",
    promptLanguage:
      "AI가 읽는 Markdown은 영어입니다. 직접 입력하는 요청과 프로젝트 설명은 편한 언어로 작성하세요.",
    related: "이어서 살펴보기",
    comments: "이 선택에 관한 이야기",
    commentsNote:
      "세 언어가 댓글을 공유합니다. 작성하려면 GitHub 로그인이 필요합니다.",
    commentsPending: "GitHub 연결을 마치면 댓글이 열립니다.",
    stale: "번역 갱신이 필요합니다. 최신 내용은 영어 원문을 확인하세요.",
    missing: "미번역 — 영어로 읽기",
    original: "영어 원문",
    footer:
      "학습 자료와 프롬프트를 제공합니다. 설계 논의와 개발은 외부 AI 도구에서 진행하세요.",
    count: "편의 글",
    back: "카탈로그로",
    aiIntro:
      "사용하는 외부 AI에 전달할 지침입니다. 기획 절차와 아키텍처 비교, 세부 설계 질문을 요청하세요.",
    aiWarning:
      "파일을 공개한다고 AI가 따르지는 않습니다. 읽고 적용할 절차와 접근 실패 보고를 직접 지시하세요.",
    aboutIntro:
      "프로젝트 기획·설계와 기술 선택을 예시로 배우고, 외부 AI에 전달할 프롬프트를 준비하는 사이트입니다.",
    startIntro:
      "서비스에 관해 정한 내용을 입력하세요. 여기서 요청문을 준비한 뒤 외부 AI 도구에 붙여넣어 요구사항과 설계 선택을 논의합니다.",
    next: "다음 단계",
    notFound: "이 칸은 비어 있습니다.",
    home: "홈으로",
    prompt: "프로젝트 지침",
    guide: "행동 규칙 읽기",
    source: "원본·수정 제안",
  },
  ja: {
    start: "プロンプトを作る",
    help: "使い方ガイド",
    navigation: "メインメニュー",
    createPrompt: "AIに渡すプロンプトを作る",
    guidesIntro:
      "プロジェクトの動作・構成・制約の例に沿って企画を学ぶ実践ガイドです。",
    catalogIntro:
      "概念と選択肢を学び、比較するための資料です。カテゴリーを選び、例と利点・制約を見てみましょう。",
    catalog: "カタログ",
    guides: "プロジェクト企画",
    pending: "準備中",
    ai: "AI向け指示",
    aiRules: "AI行動規則",
    about: "このサイト",
    theme: "ダークモード",
    skip: "本文へ移動",
    eyebrow: "プロジェクトの企画・設計を学ぶ資料",
    hero: "設計を理解して、\nAIに具体的に依頼しましょう。",
    intro:
      "企画・アーキテクチャ・技術の選択を例から学び、比較するサイトです。作りたいサービスを整理し、お使いのAIと設計を話し合う最初のプロンプトを準備しましょう。",
    siteNotice:
      "このサイトでは学習資料とプロンプトを提供します。AIとの会話や開発は、お使いの外部AIツールで進めます。",
    browse: "カタログを見る",
    learn: "まずはここから",
    recent: "最近の改訂",
    categories: "プロジェクトの方向を決めましょう。",
    all: "すべての分類",
    search: "本文を検索",
    searchHint: "要件、レイアウト、サブスクリプション…",
    preview: "実例",
    thumbnail: "カード",
    list: "リスト",
    views: "表示形式",
    empty: "見つかりません。検索語や分類を変えてください。",
    searchError:
      "検索を読み込めませんでした。下の一覧を使うか、再試行してください。",
    results: "件",
    read: "記事を読む",
    updated: "更新",
    toc: "この記事の目次",
    copy: "指示をコピー",
    copied: "コピーしました",
    copyError: "コピー失敗。下の文章を選択してコピーしてください。",
    markdown: "Markdownを読む（英語）",
    promptLanguage:
      "AIが読むMarkdownは英語です。ご自身の依頼やプロジェクトの説明は、使いやすい言語で入力してください。",
    related: "続けて読む",
    comments: "この選択を話し合う",
    commentsNote: "コメントは全言語で共有。投稿にはGitHubログインが必要です。",
    commentsPending: "GitHub連携の完了後にコメントを利用できます。",
    stale: "翻訳の更新が必要です。最新情報は英語の原文を確認してください。",
    missing: "未翻訳 — 英語で読む",
    original: "英語の原文",
    footer:
      "学習資料とプロンプトを提供します。設計の相談と開発は外部AIツールで進めましょう。",
    count: "記事",
    back: "カタログへ",
    aiIntro:
      "お使いの外部AIに渡す指示です。企画の手順、アーキテクチャの比較、詳しい設計の質問を依頼しましょう。",
    aiWarning:
      "ファイルの公開だけではAIの遵守を保証できません。読む手順、適用、アクセス失敗の報告を指示してください。",
    aboutIntro:
      "プロジェクトの企画・設計と技術の選択を例から学び、外部AIに渡すプロンプトを準備するサイトです。",
    startIntro:
      "サービスについて決めた内容を入力してください。ここで依頼文を準備し、外部AIツールに貼り付けて要件と設計の選択肢を話し合います。",
    next: "次の一歩",
    notFound: "この棚は空です。",
    home: "ホームへ",
    prompt: "プロジェクトの指示",
    guide: "行動規則を読む",
    source: "原稿・修正提案",
  },
};
