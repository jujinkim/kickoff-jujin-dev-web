export const languages = ["en", "ko", "ja"] as const;
export type Lang = (typeof languages)[number];
export const languageNames = { en: "English", ko: "한국어", ja: "日本語" };
export const siteName = "kickoff";
export const siteTitle = `${siteName} by jujin`;
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
    browseSubjects: "Browse by subject",
    examplesTitle: "See the idea in action",
    fieldGuide: "A field guide for your next project",
    featuredCaption: "Example: a photo walk over frosted glass",
    examplesIntro: "Explore examples, compare choices, make a plan.",
    builderNotice: "kickoff does not provide an AI service.",
    start: "Create a prompt",
    help: "How to use",
    navigation: "Main navigation",
    createPrompt: "Create a custom prompt",
    guidesIntro:
      "Practical walkthroughs for learning project planning through examples of behavior, structure, and constraints.",
    catalogIntro:
      "Learning resources for understanding and comparing concepts and choices. Choose a category to explore examples and tradeoffs.",
    catalog: "Catalog",
    guides: "Project planning",
    pending: "Coming soon",
    ai: "Instructions for external AI",
    aiRules: "AI behavior rules",
    about: "About",
    theme: "Dark mode",
    skip: "Skip to content",
    eyebrow: "Custom prompts and project planning resources",
    hero: "Your first task for AI, with a prompt that fits your project.",
    intro:
      "Describe what you want to make. Prepare a prompt that asks your external AI to clarify requirements, agree on a plan, and verify the work. Learn and compare planning, design, and technology choices through examples.",
    siteDescription:
      "Prepare a prompt with your service idea and requests to clarify requirements, plan, and verify work. kickoff provides no AI service; copy your prompt into your external AI tool. Learn project planning through examples.",
    promptValue: {
      title: "Why prepare your prompt here?",
      intro:
        "Your service description carries what you want to make. kickoff adds requests for how to work together: clarify requirements, explain choices, agree on a plan, and verify work. Review those guidelines before you copy.",
      exampleTitle: "Your idea + working guidelines",
      inputLabel: "The service you describe",
      exampleDescription:
        "Neighbors list books they can lend, request a loan, and check when each book is due back.",
      addedLabel: "Requests kickoff adds",
      requests: [
        "Ask about missing requirements and constraints.",
        "Explain options and recommend by project fit.",
        "Agree on a plan before development; verify and report the work.",
      ],
      fullPrompt: "Read the actual generated prompt",
      exampleNote:
        "A prompt composition example. The conversation takes place in your external AI tool.",
      benefits: [
        {
          title: "Turn unknowns into questions",
          body: "Ask your external AI to clarify unresolved details, such as the budget or loan period. Blank considerations are marked as needing clarification.",
        },
        {
          title: "Understand why a choice fits",
          body: "Ask for realistic options, tradeoffs, and a recommendation based on your service's requirements and constraints.",
        },
        {
          title: "Know what was checked",
          body: "Ask to agree on the plan before development and receive a report of applied decisions, actual checks, and remaining work.",
        },
      ],
      limits:
        "These are instructions for your external AI. How it reads and follows them depends on the tool and model you use.",
      readRules: "See the instructions behind the prompt",
    },
    siteNotice:
      "kickoff does not provide an AI service. Prepare your prompt here, then copy and paste it into the external AI tool you use to continue the conversation and work.",
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
    copied: "Copied. Paste the text into your external AI tool to continue.",
    planModeHint:
      "Recommended: Start in Plan mode if your external AI tool supports it. This is optional.",
    dismissNotification: "Dismiss notification",
    copyError:
      "Copy failed. Select and copy the text above manually, then paste it into your external AI tool to continue.",
    promptHandoff:
      "This is a request for your external AI tool. Review the text, then copy and paste it into that tool to continue.",
    followupHandoff:
      "Use this follow-up request in your external AI tool, in a conversation where you have already shared your project context. Review it against your agreed choices before pasting.",
    copyNoScript:
      "JavaScript is off. Select and copy the text above manually, then paste it into your external AI tool to continue.",
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
    count: "field notes",
    back: "Back to catalog",
    aiIntro:
      "For an existing project in your external AI tool, add these instructions to guide planning and work. kickoff does not provide an AI service.",
    aiWarning:
      "Publishing files does not make an AI obey them. Tell it to read, apply, and report what it could not access.",
    aboutIntro:
      "kickoff is an information site for preparing custom prompts for your external AI tool and learning project planning, design, and technology choices through examples.",
    startIntro:
      "Describe your service. The prompt adds requests to clarify requirements, plan, and verify work. Review it, then copy it into your external AI tool.",
    next: "Next step",
    notFound: "This shelf is empty.",
    home: "Go home",
    prompt: "Project instructions",
    guide: "Read the rules",
    source: "Source & edits",
    applyTitle: "Apply this to your project",
    applyNew: "Starting a project? Describe it to prepare your first prompt.",
    applyExisting:
      "Already talking with external AI? Share this article link and explain why the choice fits your project and which tradeoff matters. Ask how it applies to your agreed requirements.",
    articleLink: "Article link",
    contribute: "Corrections and contribution guidelines",
    aboutParagraphs: [
      "For people with a project idea and developers comparing choices: describe who will use your service and what they need to do. No technical vocabulary is required to start.",
      "Prepare a custom first prompt in your browser, then paste it into an external AI tool you arrange separately. Discuss missing requirements, compare choices, agree on a plan, and request work within that scope.",
      "Use the catalog to understand a choice through a short example. Follow Project planning guides for a practical method. Bring a useful article link and your reasons back to the external conversation.",
    ],
    searchScope: "Search within",
    searchReset: "Clear search and filters",
    searchBroader: "Browse the parent category",
    searchOther: "Try another resource type",
  },
  ko: {
    browseSubjects: "분야별로 찾아보기",
    examplesTitle: "화면으로 이해하는 개념",
    fieldGuide: "다음 프로젝트를 위한 도감",
    featuredCaption: "예제: 반투명 패널로 보는 사진 산책",
    examplesIntro: "예제를 보고, 선택지를 비교하고, 계획을 세워보세요.",
    builderNotice: "kickoff는 AI 서비스를 제공하지 않습니다.",
    start: "프롬프트 만들기",
    help: "이용 가이드",
    navigation: "주 메뉴",
    createPrompt: "맞춤 프롬프트 만들기",
    guidesIntro:
      "프로젝트의 동작·구조·제약을 예시로 따라 배우는 실전 기획 안내입니다.",
    catalogIntro:
      "개념과 선택지를 배우고 비교하는 자료입니다. 카테고리를 선택해 예시와 장단점을 살펴보세요.",
    catalog: "카탈로그",
    guides: "프로젝트 기획",
    pending: "준비 중",
    ai: "외부 AI용 지침",
    aiRules: "AI 행동 지침",
    about: "소개",
    theme: "다크 모드",
    skip: "본문으로 이동",
    eyebrow: "맞춤 프롬프트와 프로젝트 기획 학습 자료",
    hero: "AI에게 맡길 첫 작업, 내 프로젝트에 맞는 프롬프트로.",
    intro:
      "하고 싶은 일을 적으세요. 외부 AI에게 요구 확인부터 기획·검증까지 요청하는 프롬프트를 준비합니다. 기획·설계·기술 선택은 예시로 배우고 비교할 수 있습니다.",
    siteDescription:
      "서비스 아이디어에 요구 확인·기획·검증을 요청하는 지침을 담아 프롬프트를 준비하세요. kickoff는 AI 서비스를 제공하지 않습니다. 외부 AI 도구에 복사해 전달하고, 프로젝트 기획도 예시로 배우세요.",
    promptValue: {
      title: "왜 여기서 프롬프트를 만들까요?",
      intro:
        "서비스 설명에는 만들고 싶은 일을 담습니다. kickoff는 함께 일할 방식을 요청하는 지침을 더합니다. 요구 확인, 선택 이유, 기획 합의, 결과 검증까지 어떤 요청이 담기는지 복사 전에 확인하세요.",
      exampleTitle: "내 아이디어 + 함께 일할 기준",
      inputLabel: "내가 설명하는 서비스",
      exampleDescription:
        "이웃이 빌려줄 책을 등록하고, 대여를 요청하며, 책마다 반납일을 확인하는 서비스입니다.",
      addedLabel: "kickoff가 함께 담는 요청",
      requests: [
        "빠진 요구사항과 제약은 질문해줘.",
        "선택지를 설명하고 프로젝트에 맞는 안을 추천해줘.",
        "기획을 합의한 뒤 개발하고, 작업을 검증·보고해줘.",
      ],
      fullPrompt: "실제로 만들어지는 전체 프롬프트 보기",
      exampleNote:
        "프롬프트 구성 예시입니다. 실제 대화는 사용하는 외부 AI 도구에서 진행합니다.",
      benefits: [
        {
          title: "빈칸은 질문으로",
          body: "예산이나 대여 기간처럼 미정인 조건을 외부 AI가 질문하도록 요청합니다. 빈 참고사항은 ‘추가 확인 필요’로 표시합니다.",
        },
        {
          title: "선택에는 이유를",
          body: "서비스의 요구와 제약에 맞춰 현실적인 선택지, 장단점, 추천 이유를 설명하도록 요청합니다.",
        },
        {
          title: "완료에는 확인을",
          body: "기획을 함께 확정한 뒤 개발하고, 적용한 결정·실제 검증·남은 일을 보고하도록 요청합니다.",
        },
      ],
      limits:
        "외부 AI에 전달하는 지침입니다. 읽고 적용하는 방식은 사용하는 도구와 모델에 따라 달라집니다.",
      readRules: "프롬프트에 담기는 지침 읽기",
    },
    siteNotice:
      "kickoff는 AI 서비스를 제공하지 않습니다. 이곳에서 프롬프트를 준비하고, 복사한 내용을 사용하는 외부 AI 도구에 붙여넣어 대화와 작업을 진행하세요.",
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
    copied: "복사 완료. 외부 AI 도구에 붙여넣어 진행하세요.",
    planModeHint:
      "권장: 지원하는 외부 AI 도구에서는 Plan mode로 시작하세요. 필수는 아닙니다.",
    dismissNotification: "알림 닫기",
    copyError:
      "복사 실패. 위 글을 직접 선택해 복사한 뒤 외부 AI 도구에 붙여넣어 진행하세요.",
    promptHandoff:
      "외부 AI에 전달할 요청문입니다. 내용을 확인하고 복사한 뒤 사용하는 외부 AI 도구에 붙여넣어 진행하세요.",
    followupHandoff:
      "프로젝트 맥락을 이미 공유한 외부 AI 도구의 대화에서 사용하는 후속 요청입니다. 합의한 선택에 맞는지 확인한 뒤 붙여넣으세요.",
    copyNoScript:
      "JavaScript가 꺼져 있습니다. 위 글을 직접 선택해 복사한 뒤 외부 AI 도구에 붙여넣어 진행하세요.",
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
    count: "편의 글",
    back: "카탈로그로",
    aiIntro:
      "이미 외부 AI 도구에서 진행 중인 프로젝트에 기획·작업 지침을 추가하는 경로입니다. kickoff는 AI 서비스를 제공하지 않습니다.",
    aiWarning:
      "파일을 공개한다고 AI가 따르지는 않습니다. 읽고 적용할 절차와 접근 실패 보고를 직접 지시하세요.",
    aboutIntro:
      "kickoff는 외부 AI에 전달할 맞춤 프롬프트를 준비하고 프로젝트 기획·설계·기술 선택을 예시로 배우는 정보 사이트입니다.",
    startIntro:
      "서비스를 설명하세요. 요구 확인·기획·검증을 요청하는 지침이 프롬프트에 함께 담깁니다. 내용을 확인한 뒤 외부 AI 도구에 복사해 전달하세요.",
    next: "다음 단계",
    notFound: "이 칸은 비어 있습니다.",
    home: "홈으로",
    prompt: "프로젝트 지침",
    guide: "행동 규칙 읽기",
    source: "원본·수정 제안",
    applyTitle: "내 프로젝트에 적용하기",
    applyNew:
      "프로젝트를 처음 시작하나요? 설명을 입력해 첫 프롬프트를 준비하세요.",
    applyExisting:
      "이미 외부 AI와 대화 중이라면 이 글의 링크와 내 프로젝트에 맞는 이유, 중요하게 보는 장단점을 전달하세요. 합의한 요구사항에 어떻게 적용할지 요청하세요.",
    articleLink: "이 글 링크",
    contribute: "수정 제안·기여 안내",
    aboutParagraphs: [
      "프로젝트 아이디어가 있는 비전문가와 선택지를 비교하는 개발자를 위한 사이트입니다. 누가 서비스를 사용하고 무엇을 해야 하는지 설명해 보세요. 기술 용어를 몰라도 시작할 수 있습니다.",
      "브라우저에서 첫 맞춤 프롬프트를 준비한 뒤, 별도로 준비한 외부 AI 도구에 붙여넣으세요. 빠진 요구사항을 논의하고 선택지를 비교해 기획을 확정한 다음, 합의한 범위의 작업을 요청합니다.",
      "카탈로그에서는 짧은 예시로 선택지를 이해하고, 프로젝트 기획 가이드에서는 실전 절차를 따라 배웁니다. 도움이 된 글의 링크와 선택 이유를 외부 AI 대화에 전달하세요.",
    ],
    searchScope: "검색 범위",
    searchReset: "검색어·필터 해제",
    searchBroader: "상위 분류 둘러보기",
    searchOther: "다른 자료 유형 살펴보기",
  },
  ja: {
    browseSubjects: "分野から探す",
    examplesTitle: "画面で理解するアイデア",
    fieldGuide: "次のプロジェクトのための図鑑",
    featuredCaption: "作例：すりガラス越しの写真散歩",
    examplesIntro: "作例を見て、選択肢を比べ、計画を立てましょう。",
    builderNotice: "kickoffはAIサービスを提供していません。",
    start: "プロンプトを作る",
    help: "使い方ガイド",
    navigation: "メインメニュー",
    createPrompt: "自分に合うプロンプトを作る",
    guidesIntro:
      "プロジェクトの動作・構成・制約の例に沿って企画を学ぶ実践ガイドです。",
    catalogIntro:
      "概念と選択肢を学び、比較するための資料です。カテゴリーを選び、例と利点・制約を見てみましょう。",
    catalog: "カタログ",
    guides: "プロジェクト企画",
    pending: "準備中",
    ai: "外部AI向け指示",
    aiRules: "AI行動規則",
    about: "このサイト",
    theme: "ダークモード",
    skip: "本文へ移動",
    eyebrow: "自分に合うプロンプトとプロジェクト企画の学習資料",
    hero: "AIに任せる最初の作業を、自分のプロジェクトに合うプロンプトで。",
    intro:
      "作りたいものを書いてみましょう。外部AIに要件の確認から企画・検証まで依頼するプロンプトを準備します。企画・設計・技術の選択は、例から学び比較できます。",
    siteDescription:
      "サービスのアイデアに、要件の確認・企画・検証を依頼する指示を添えてプロンプトを準備しましょう。kickoffはAIサービスを提供しません。外部AIツールへコピーして渡し、プロジェクト企画も例から学べます。",
    promptValue: {
      title: "ここでプロンプトを作る理由は？",
      intro:
        "サービスの説明には、作りたいものを書きます。kickoffは、一緒に進める方法を依頼する指示を加えます。要件の確認、選択の理由、企画への合意、結果の検証まで、どんな依頼が含まれるかコピー前に確認できます。",
      exampleTitle: "アイデア + 一緒に進める基準",
      inputLabel: "自分が説明するサービス",
      exampleDescription:
        "近所の人が貸せる本を登録し、貸出を申し込み、本ごとの返却日を確認するサービスです。",
      addedLabel: "kickoffが添える依頼",
      requests: [
        "不足する要件や制約について質問してください。",
        "選択肢を説明し、プロジェクトに合う案を推薦してください。",
        "企画に合意してから開発し、作業を検証・報告してください。",
      ],
      fullPrompt: "実際に生成されるプロンプト全文を見る",
      exampleNote:
        "プロンプト構成の例です。実際の会話は、お使いの外部AIツールで行います。",
      benefits: [
        {
          title: "未定のことは質問へ",
          body: "予算や貸出期間など、未定の条件について外部AIに質問を依頼します。空欄の参考事項は「追加確認が必要」と表示します。",
        },
        {
          title: "選択には理由を",
          body: "サービスの要件と制約に沿って、現実的な選択肢、利点と欠点、推薦の理由を説明するよう依頼します。",
        },
        {
          title: "完了には確認を",
          body: "企画に合意してから開発し、採用した判断・実際の検証・残作業を報告するよう依頼します。",
        },
      ],
      limits:
        "外部AIに渡す指示です。読み方や適用のしかたは、お使いのツールとモデルによって異なります。",
      readRules: "プロンプトに含まれる指示を読む",
    },
    siteNotice:
      "kickoffはAIサービスを提供していません。ここでプロンプトを準備し、コピーした内容をお使いの外部AIツールに貼り付けて、会話や作業を進めてください。",
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
    copied: "コピーしました。外部AIツールに貼り付けて進めてください。",
    planModeHint:
      "推奨：対応する外部AIツールではPlan modeで始めてください。必須ではありません。",
    dismissNotification: "通知を閉じる",
    copyError:
      "コピー失敗。上の文章を選択して手動でコピーし、外部AIツールに貼り付けて進めてください。",
    promptHandoff:
      "外部AIに渡す依頼文です。内容を確認してコピーし、お使いの外部AIツールに貼り付けて進めてください。",
    followupHandoff:
      "プロジェクトの背景をすでに共有した外部AIツールとの会話で使う、追加の依頼です。合意済みの選択に合うか確認してから貼り付けてください。",
    copyNoScript:
      "JavaScriptが無効です。上の文章を選択して手動でコピーし、外部AIツールに貼り付けて進めてください。",
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
    count: "記事",
    back: "カタログへ",
    aiIntro:
      "すでに外部AIツールで進めているプロジェクトに、企画・作業の指示を追加するためのページです。kickoffはAIサービスを提供していません。",
    aiWarning:
      "ファイルの公開だけではAIの遵守を保証できません。読む手順、適用、アクセス失敗の報告を指示してください。",
    aboutIntro:
      "kickoffは外部AIに渡す自分に合ったプロンプトを準備し、プロジェクトの企画・設計・技術の選択を例から学ぶ情報サイトです。",
    startIntro:
      "サービスを説明しましょう。要件の確認・企画・検証を依頼する指示がプロンプトに加わります。内容を確認してから外部AIツールへコピーして渡してください。",
    next: "次の一歩",
    notFound: "この棚は空です。",
    home: "ホームへ",
    prompt: "プロジェクトの指示",
    guide: "行動規則を読む",
    source: "原稿・修正提案",
    applyTitle: "自分のプロジェクトに活かす",
    applyNew:
      "これからプロジェクトを始めますか？説明を入力して最初のプロンプトを準備しましょう。",
    applyExisting:
      "すでに外部AIと会話中なら、この記事のリンクと自分のプロジェクトに合う理由、重視する利点や制約を伝えましょう。合意した要件にどう適用するか依頼してください。",
    articleLink: "この記事のリンク",
    contribute: "修正提案・貢献ガイド",
    aboutParagraphs: [
      "プロジェクトのアイデアを持つ非専門家と、選択肢を比較する開発者のためのサイトです。誰がサービスを使い、何をするのか説明してみましょう。技術用語を知らなくても始められます。",
      "ブラウザーで自分に合う最初のプロンプトを準備し、別途用意した外部AIツールに貼り付けます。不足する要件を話し合い、選択肢を比較して企画を確定し、合意した範囲の作業を依頼します。",
      "カタログでは短い例から選択肢を理解し、プロジェクト企画ガイドでは実践の手順を学べます。役立つ記事のリンクと選ぶ理由を外部AIとの会話に持ち帰りましょう。",
    ],
    searchScope: "検索範囲",
    searchReset: "検索語・絞り込みを解除",
    searchBroader: "上位の分類を見る",
    searchOther: "別の資料の種類を見る",
  },
};
