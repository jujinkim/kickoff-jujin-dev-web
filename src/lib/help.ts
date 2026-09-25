export const helpText = {
  en: {
    intro:
      "kickoff.md is an information site for preparing custom prompts and learning project planning. Use this guide to copy a prompt into your external AI tool and discuss your project there.",
    flowTitle: "From kickoff.md to your external AI tool",
    flow: [
      {
        place: "kickoff.md",
        steps: [
          "Describe your service",
          "Prepare your prompt",
          "Review and copy",
        ],
      },
      {
        place: "External AI tool",
        steps: ["Paste your prompt", "Discuss the plan", "Request work"],
      },
    ],
    cards: [
      {
        id: "make-prompt",
        title: "Create and share a prompt",
        body: "Describe your service here, copy the prompt, and paste it into your external AI tool.",
      },
      {
        id: "catalog",
        title: "Understand the catalog",
        body: "Use this optional learning resource when examples help you compare choices. Open only the articles you need.",
      },
      {
        id: "agree-plan",
        title: "Agree on a plan with AI",
        body: "In your external AI tool, answer follow-up questions, compare design choices, review the plan, then request development.",
      },
    ],
    why: "Why: give your idea enough context",
    scenario:
      "Imagine a service for a neighborhood book swap. Readers list books they can lend, find a book nearby, and arrange a handoff with its owner. You want AI to help plan that service, but “build a book app” leaves out who uses it and what they need to do. AI could propose a store with payments when you only need lending.",
    goal: "Start by writing the actions you already know: listing a book, requesting a loan, and agreeing on a pickup. You can leave the name undecided and ask about unresolved rules, such as how long a loan lasts. The aim is a shared plan that you can review before development starts.",
    how: "How: move from an idea to an agreed plan",
    steps: [
      "Have an external AI tool ready separately; kickoff.md does not provide one. Open Create a prompt on kickoff.md. Enter a service description: “Neighbors list books, request loans, and arrange a pickup.” This is the only required field. The name is optional; a blank becomes “Undecided”.",
      "Add considerations such as budget, schedule, or a preferred example. Leave unknowns blank: they become “Needs clarification”, not “no constraints”. The input stays on this page and is lost when you leave or reload.",
      "Read the preview: it is a request for your external AI tool. Copy it and paste it into that tool yourself. The prompt requests the startup guidelines and AI behavior rules, the only two required site documents, and reuse of your inputs. If copying fails, select the preview and copy manually. With JavaScript off, append the three fields to the base prompt yourself, then paste the request into your external AI tool.",
      "Ask AI to confirm it has read both documents. If a URL cannot be opened, use the Markdown or AI behavior rules link on the prompt page and paste the missing text into the conversation. Continue with service details; do not assume unread rules were applied. Optional catalog access failure alone does not stop planning.",
    ],
    agree: [
      "For the book swap, AI might ask whether a loan needs the owner’s approval and what happens when a book is not returned. Answer unresolved questions. Compare options by your requirements, including those outside this site. Catalog examples are optional. Ask for a recommendation, delegate a specific choice, or explicitly defer it.",
      "A question such as ‘Should loan status be shared across devices?’ connects behavior to data storage and architecture. If the owner marks a book as lent on a phone, should a neighbor see it as unavailable on a laptop? Shared status calls for comparing shared storage and synchronization; a private record used on one device may fit local storage. Ask your external AI to explain these tradeoffs and what should happen offline. This gives you a concrete requirement to compare with the catalog examples, rather than choosing a technology by name.",
      "Ask AI to summarize the users, main actions, failure cases, constraints, decisions, and completion criteria. Check that the plan still describes lending books, and that unresolved questions are visible. Confirm the plan, then explicitly request development. Copying a prompt alone does not approve a plan or start development.",
    ],
    what: "What: a prompt starts the conversation; a catalog supports decisions",
    roles:
      "kickoff.md provides learning resources and prompts. The first prompt carries your context and asks your external AI to explore detailed requirements and compare architecture choices; it is not a finished specification. AI conversations and development happen in that external tool. The catalog is optional material for learning and comparing concepts; Project planning provides practical walkthroughs to follow through examples. Your decision list comes from the service, not the category tree. Compatible choices can coexist.",
    categories: "Compare choices by category",
    categoryIntro:
      "Browse this optional index when an example helps. Each link opens a comparison group or subcategories, with examples, limits, and related reading. Neither you nor AI needs to review every category to plan a project.",
  },
  ko: {
    intro:
      "kickoff.md는 맞춤 프롬프트 준비와 프로젝트 기획 학습을 돕는 정보 사이트입니다. 이 안내를 따라 프롬프트를 복사하고 외부 AI 도구에서 프로젝트를 논의하세요.",
    flowTitle: "kickoff.md에서 외부 AI 도구로",
    flow: [
      {
        place: "kickoff.md",
        steps: ["서비스 설명 입력", "프롬프트 준비", "확인·복사"],
      },
      {
        place: "외부 AI 도구",
        steps: ["프롬프트 붙여넣기", "기획 논의", "작업 요청"],
      },
    ],
    cards: [
      {
        id: "make-prompt",
        title: "프롬프트 만들고 전달하기",
        body: "이곳에서 서비스를 설명하고 프롬프트를 복사해 외부 AI 도구에 붙여넣으세요.",
      },
      {
        id: "catalog",
        title: "카탈로그 이해하기",
        body: "예시가 선택지 비교에 도움 될 때 참고하는 학습 자료입니다. 필요한 글만 살펴보세요.",
      },
      {
        id: "agree-plan",
        title: "AI와 기획 확정하기",
        body: "외부 AI 도구에서 후속 질문에 답하고 설계 선택지를 비교하세요. 기획을 검토한 뒤 개발을 요청하세요.",
      },
    ],
    why: "왜 필요한가: 아이디어의 맥락 전달하기",
    scenario:
      "동네에서 책을 빌려주는 서비스를 만든다고 가정해 봅시다. 독자는 빌려줄 책을 등록하고, 근처의 책을 찾고, 소유자와 전달 약속을 잡습니다. AI와 이 서비스를 기획하려는데 ‘책 앱을 만들어줘’라고만 하면 누가 무엇을 해야 하는지 빠집니다. 대여만 필요해도 AI는 결제 기능이 있는 서점을 제안할 수 있습니다.",
    goal: "이미 알고 있는 동작부터 적으세요. 책 등록, 대여 요청, 수령 약속처럼 구체적이면 됩니다. 이름은 미정으로 두고, 대여 기간처럼 정하지 않은 규칙은 질문받을 수 있습니다. 개발 전에 함께 검토할 수 있는 기획을 만드는 것이 목표입니다.",
    how: "어떻게 해결하는가: 아이디어에서 합의된 기획까지",
    steps: [
      "사용할 외부 AI 도구를 별도로 준비하세요. kickoff.md는 AI 도구를 제공하지 않습니다. kickoff.md에서 ‘프롬프트 만들기’를 열고 서비스 설명을 입력하세요. 예: ‘이웃이 책을 등록하고 대여를 요청한 뒤 수령 약속을 잡습니다.’ 필수 입력은 서비스 설명뿐입니다. 이름은 선택이며, 비워두면 ‘미정’으로 표시됩니다.",
      "예산, 일정, 마음에 드는 예시를 참고사항에 적으세요. 모르는 내용은 비워둬도 됩니다. 빈 참고사항은 ‘제약 없음’이 아닌 ‘추가 확인 필요’가 됩니다. 입력은 현재 페이지에만 남으며 이동하거나 새로고침하면 사라집니다.",
      "미리보기는 외부 AI에 전달할 요청문입니다. 읽고 복사한 뒤 사용하는 외부 AI 도구에 직접 붙여넣으세요. 필수 사이트 문서인 시작 지침·AI 행동 지침 두 개를 읽고 입력을 재사용하라는 요청이 포함됩니다. 복사가 실패하면 미리보기를 직접 선택해 복사하세요. JavaScript가 꺼져 있으면 기본 프롬프트에 세 항목을 직접 덧붙인 뒤 외부 AI 도구에 붙여넣으세요.",
      "AI가 두 문서를 읽었는지 확인하세요. URL을 열지 못하면 작성기 페이지의 Markdown 또는 AI 행동 지침 링크에서 빠진 본문을 대화에 붙여넣으세요. 서비스 정보를 이어서 전달하되, 읽지 못한 규칙이 적용됐다고 가정하지 마세요. 선택 자료인 카탈로그 접근 실패만으로 기획을 중단하지는 않습니다.",
    ],
    agree: [
      "책 대여 서비스라면 AI가 소유자의 대여 승인 여부나 책이 반납되지 않았을 때의 동작을 질문할 수 있습니다. 미결정 질문에 답하세요. 요구사항에 따라 사이트 밖 선택지도 비교합니다. 카탈로그 예시는 선택 참고자료입니다. 추천을 받거나 특정 선택을 위임하거나 명시적으로 보류하세요.",
      "‘여러 기기에서 대여 상태를 공유해야 하는가’라는 질문은 서비스 동작을 데이터 저장·아키텍처 선택으로 연결합니다. 소유자가 휴대전화에서 책을 대여 중으로 바꾸면 이웃의 노트북에서도 빌릴 수 없다고 보여야 할까요? 상태를 공유하려면 공용 저장소와 동기화 방식을 비교해야 하고, 한 기기에서만 쓰는 개인 기록이라면 로컬 저장이 맞을 수 있습니다. 외부 AI에게 장단점과 오프라인일 때의 동작을 설명하도록 요청하세요. 기술 이름부터 고르는 대신, 카탈로그 예시와 비교할 구체적인 요구사항을 얻습니다.",
      "AI에게 사용자, 주요 동작, 실패 상황, 제약, 결정 사항, 완료 조건을 정리하도록 요청하세요. 기획이 여전히 책 대여를 다루는지, 미결정 질문이 드러나 있는지 확인합니다. 기획을 확정한 뒤 명시적으로 개발을 요청하세요. 프롬프트 복사만으로 기획 승인이나 개발 시작이 되지는 않습니다.",
    ],
    what: "무엇이라 부르는가: 대화를 여는 프롬프트와 선택을 돕는 카탈로그",
    roles:
      "kickoff.md는 학습 자료와 프롬프트를 제공합니다. 첫 프롬프트는 서비스의 맥락을 전달하고 외부 AI에게 세부 요구사항을 질문하고 아키텍처 선택지를 비교하도록 요청합니다. 완성된 명세서는 아니며, AI 대화와 개발은 해당 외부 도구에서 진행합니다. 카탈로그는 개념과 선택지를 배우고 비교하는 선택 참고자료이고, ‘프로젝트 기획’은 예시를 따라 배우는 실전 안내입니다. 결정 목록은 분류표가 아닌 서비스에서 도출합니다. 양립 가능한 선택은 함께 쓸 수 있습니다.",
    categories: "분류별로 선택지 비교하기",
    categoryIntro:
      "예시가 도움 될 때 이 선택 참고 목차를 살펴보세요. 각 링크에서 비교 항목이나 하위 분류, 예시·한계·관련 글을 확인할 수 있습니다. 기획을 위해 사용자나 AI가 모든 분류를 검토할 필요는 없습니다.",
  },
  ja: {
    intro:
      "kickoff.mdは自分に合うプロンプトの準備とプロジェクト企画の学習を助ける情報サイトです。このガイドに沿ってプロンプトをコピーし、外部AIツールでプロジェクトを話し合いましょう。",
    flowTitle: "kickoff.mdから外部AIツールへ",
    flow: [
      {
        place: "kickoff.md",
        steps: ["サービスの説明を入力", "プロンプトを準備", "確認・コピー"],
      },
      {
        place: "外部AIツール",
        steps: ["プロンプトを貼り付け", "企画を相談", "作業を依頼"],
      },
    ],
    cards: [
      {
        id: "make-prompt",
        title: "プロンプトを作って渡す",
        body: "このサイトでサービスを説明し、プロンプトをコピーして外部AIツールに貼り付けましょう。",
      },
      {
        id: "catalog",
        title: "カタログを理解する",
        body: "例が選択肢の比較に役立つときに使う任意の学習資料です。必要な記事だけ読みましょう。",
      },
      {
        id: "agree-plan",
        title: "AIと企画を確定する",
        body: "外部AIツールで追加の質問に答え、設計の選択肢を比較し、企画を確認してから開発を依頼しましょう。",
      },
    ],
    why: "なぜ必要なのか：アイデアの背景を伝える",
    scenario:
      "近所で本を貸し借りするサービスを作るとします。読者は貸せる本を登録し、近くの本を探し、持ち主と受け渡しを約束します。AIと企画したくても「本のアプリを作って」だけでは、誰が何をするかが伝わりません。貸し借りだけでよいのに、AIが決済付きの書店を提案するかもしれません。",
    goal: "本の登録、貸し出しの依頼、受け取りの約束など、わかっている動作から書きましょう。名前は未定でもよく、貸出期間など決まっていない規則は質問してもらえます。開発前に一緒に確認できる企画を作ることが目標です。",
    how: "どう解決するのか：アイデアから合意した企画へ",
    steps: [
      "使用する外部AIツールは別途ご自身で用意してください。kickoff.mdはAIツールを提供しません。kickoff.mdで「プロンプトを作る」を開き、サービスの説明を入力します。例：「近所の人が本を登録し、貸し出しを依頼して受け取りを約束します」。必須なのは説明だけです。名前は任意で、空欄なら「未定」になります。",
      "予算、日程、好みの例を参考事項に書きます。不明なことは空欄でも構いません。空欄は「制約なし」ではなく「追加確認が必要」になります。入力は現在のページだけに残り、移動や再読み込みで消えます。",
      "プレビューは外部AIに渡す依頼文です。読んでコピーし、お使いの外部AIツールに自分で貼り付けます。必須のサイト文書である開始ガイドラインとAI行動規則の二つを読み、入力を再利用する依頼も含まれます。コピーに失敗したらプレビューを選択して手動でコピーします。JavaScriptが無効なら基本プロンプトに三つの項目を追記し、外部AIツールに貼り付けます。",
      "AIが二つの文書を読んだか確認します。URLを開けなければ、作成ページのMarkdownかAI行動規則のリンクから不足する本文を会話に貼り付けます。サービス情報を続けて伝え、未読の規則が適用済みだと思い込まないでください。任意のカタログにアクセスできないことだけでは企画を止めません。",
    ],
    agree: [
      "本の貸し借りなら、AIは持ち主の承認が必要か、返却されないときにどうするかを質問するかもしれません。未決定の質問に答えましょう。要件に沿ってサイト外の選択肢も比較します。カタログの例は任意です。推薦を求め、特定の判断を委任し、または明示的に保留します。",
      "「複数の端末で貸出状況を共有する必要があるか」という質問は、サービスの動作をデータ保存とアーキテクチャの選択につなげます。持ち主がスマートフォンで貸出中にしたら、近所の人のノートパソコンでも借りられないと表示すべきでしょうか。状況を共有するなら共有の保存先と同期方法の比較が必要です。一台だけで使う個人の記録ならローカル保存が合う場合もあります。外部AIに利点・制約とオフライン時の動作を説明してもらいましょう。技術名から選ぶのではなく、カタログの例と比較できる具体的な要件を得られます。",
      "ユーザー、主な動作、失敗時の扱い、制約、決定事項、完了条件をAIにまとめてもらいます。企画が本の貸し借りを扱っているか、未決定の質問が見えるか確認します。企画を確定した後、明示的に開発を依頼します。コピーだけで企画の承認や開発開始にはなりません。",
    ],
    what: "どんな考え方なのか：会話を始めるプロンプトと選択を助けるカタログ",
    roles:
      "kickoff.mdは学習資料とプロンプトを提供します。最初のプロンプトは背景を伝え、外部AIに詳しい要件を質問し、アーキテクチャの選択肢を比較するよう依頼します。完成した仕様書ではなく、AIとの会話や開発はその外部ツールで進めます。カタログは概念と選択肢を学んで比較する任意の参考資料で、「プロジェクト企画」は例に沿って学ぶ実践ガイドです。判断の一覧は分類表ではなくサービスから導きます。両立する選択は組み合わせられます。",
    categories: "分類ごとに選択肢を比較する",
    categoryIntro:
      "例が役立つときに、この任意の索引を参照してください。各リンクで比較項目や下位分類、例・限界・関連記事を確認できます。企画のためにユーザーやAIが全分類を検討する必要はありません。",
  },
};
