export const helpText = {
  en: {
    intro:
      "Turn an idea into a first prompt and agree on a plan with AI from your service requirements and constraints.",
    flow: ["Enter your idea", "Copy the prompt", "Plan with AI"],
    cards: [
      {
        id: "make-prompt",
        title: "Create and share a prompt",
        body: "Describe your service, copy the result, and paste it into your AI conversation.",
      },
      {
        id: "catalog",
        title: "Understand the catalog",
        body: "Use this optional learning resource when examples help you compare choices. Open only the articles you need.",
      },
      {
        id: "agree-plan",
        title: "Agree on a plan with AI",
        body: "Answer follow-up questions, review the plan, then request development.",
      },
    ],
    why: "Why: give your idea enough context",
    scenario:
      "Imagine a service for a neighborhood book swap. Readers list books they can lend, find a book nearby, and arrange a handoff with its owner. You want AI to help plan that service, but “build a book app” leaves out who uses it and what they need to do. AI could propose a store with payments when you only need lending.",
    goal: "Start by writing the actions you already know: listing a book, requesting a loan, and agreeing on a pickup. You can leave the name undecided and ask about unresolved rules, such as how long a loan lasts. The aim is a shared plan that you can review before development starts.",
    how: "How: move from an idea to an agreed plan",
    steps: [
      "Open Create a prompt. Enter a service description: “Neighbors list books, request loans, and arrange a pickup.” This is the only required field. The name is optional; a blank becomes “Undecided”.",
      "Add considerations such as budget, schedule, or a preferred example. Leave unknowns blank: they become “Needs clarification”, not “no constraints”. The input stays on this page and is lost when you leave or reload.",
      "Read the preview and copy it. Paste it into your own AI conversation. The prompt requests the startup guidelines and AI behavior rules, the only two required site documents, and reuse of your inputs. If copying fails, select the preview and copy manually. With JavaScript off, append the three fields to the base prompt yourself.",
      "Ask AI to confirm it has read both documents. If a URL cannot be opened, use the Markdown or AI behavior rules link on the prompt page and paste the missing text into the conversation. Continue with service details; do not assume unread rules were applied. Optional catalog access failure alone does not stop planning.",
    ],
    agree: [
      "For the book swap, AI might ask whether a loan needs the owner’s approval and what happens when a book is not returned. Answer unresolved questions. Compare options by your requirements, including those outside this site. Catalog examples are optional. Ask for a recommendation, delegate a specific choice, or explicitly defer it.",
      "Ask AI to summarize the users, main actions, failure cases, constraints, decisions, and completion criteria. Check that the plan still describes lending books, and that unresolved questions are visible. Confirm the plan, then explicitly request development. Copying a prompt alone does not approve a plan or start development.",
    ],
    what: "What: a prompt starts the conversation; a catalog supports decisions",
    roles:
      "The first prompt carries your context and a request to follow the planning process. It is not a finished specification or an AI chat hosted here. The catalog is optional learning material with examples and tradeoffs; Project planning provides longer walkthroughs. Your decision list comes from the service, not the category tree. Compatible choices can coexist.",
    categories: "Compare choices by category",
    categoryIntro:
      "Browse this optional index when an example helps. Each link opens a comparison group or subcategories, with examples, limits, and related reading. Neither you nor AI needs to review every category to plan a project.",
  },
  ko: {
    intro:
      "아이디어를 첫 프롬프트로 정리하고, 서비스 요구와 제약을 바탕으로 AI와 기획을 확정하세요.",
    flow: ["아이디어 입력", "프롬프트 복사", "AI와 기획"],
    cards: [
      {
        id: "make-prompt",
        title: "프롬프트 만들고 전달하기",
        body: "서비스를 설명하고 결과를 복사해 AI 대화에 붙여넣으세요.",
      },
      {
        id: "catalog",
        title: "카탈로그 이해하기",
        body: "예시가 선택지 비교에 도움 될 때 참고하는 학습 자료입니다. 필요한 글만 살펴보세요.",
      },
      {
        id: "agree-plan",
        title: "AI와 기획 확정하기",
        body: "후속 질문에 답하고 기획을 검토한 뒤 개발을 요청하세요.",
      },
    ],
    why: "왜 필요한가: 아이디어의 맥락 전달하기",
    scenario:
      "동네에서 책을 빌려주는 서비스를 만든다고 가정해 봅시다. 독자는 빌려줄 책을 등록하고, 근처의 책을 찾고, 소유자와 전달 약속을 잡습니다. AI와 이 서비스를 기획하려는데 ‘책 앱을 만들어줘’라고만 하면 누가 무엇을 해야 하는지 빠집니다. 대여만 필요해도 AI는 결제 기능이 있는 서점을 제안할 수 있습니다.",
    goal: "이미 알고 있는 동작부터 적으세요. 책 등록, 대여 요청, 수령 약속처럼 구체적이면 됩니다. 이름은 미정으로 두고, 대여 기간처럼 정하지 않은 규칙은 질문받을 수 있습니다. 개발 전에 함께 검토할 수 있는 기획을 만드는 것이 목표입니다.",
    how: "어떻게 해결하는가: 아이디어에서 합의된 기획까지",
    steps: [
      "‘프롬프트 만들기’를 열고 서비스 설명을 입력하세요. 예: ‘이웃이 책을 등록하고 대여를 요청한 뒤 수령 약속을 잡습니다.’ 필수 입력은 서비스 설명뿐입니다. 이름은 선택이며, 비워두면 ‘미정’으로 표시됩니다.",
      "예산, 일정, 마음에 드는 예시를 참고사항에 적으세요. 모르는 내용은 비워둬도 됩니다. 빈 참고사항은 ‘제약 없음’이 아닌 ‘추가 확인 필요’가 됩니다. 입력은 현재 페이지에만 남으며 이동하거나 새로고침하면 사라집니다.",
      "미리보기를 읽고 복사한 뒤 사용하는 AI 대화에 붙여넣으세요. 필수 사이트 문서인 시작 지침·AI 행동 지침 두 개를 읽고 입력을 재사용하라는 요청이 포함됩니다. 복사가 실패하면 미리보기를 직접 선택해 복사하세요. JavaScript가 꺼져 있으면 기본 프롬프트에 세 항목을 직접 덧붙이세요.",
      "AI가 두 문서를 읽었는지 확인하세요. URL을 열지 못하면 작성기 페이지의 Markdown 또는 AI 행동 지침 링크에서 빠진 본문을 대화에 붙여넣으세요. 서비스 정보를 이어서 전달하되, 읽지 못한 규칙이 적용됐다고 가정하지 마세요. 선택 자료인 카탈로그 접근 실패만으로 기획을 중단하지는 않습니다.",
    ],
    agree: [
      "책 대여 서비스라면 AI가 소유자의 대여 승인 여부나 책이 반납되지 않았을 때의 동작을 질문할 수 있습니다. 미결정 질문에 답하세요. 요구사항에 따라 사이트 밖 선택지도 비교합니다. 카탈로그 예시는 선택 참고자료입니다. 추천을 받거나 특정 선택을 위임하거나 명시적으로 보류하세요.",
      "AI에게 사용자, 주요 동작, 실패 상황, 제약, 결정 사항, 완료 조건을 정리하도록 요청하세요. 기획이 여전히 책 대여를 다루는지, 미결정 질문이 드러나 있는지 확인합니다. 기획을 확정한 뒤 명시적으로 개발을 요청하세요. 프롬프트 복사만으로 기획 승인이나 개발 시작이 되지는 않습니다.",
    ],
    what: "무엇이라 부르는가: 대화를 여는 프롬프트와 선택을 돕는 카탈로그",
    roles:
      "첫 프롬프트는 서비스의 맥락과 기획 절차를 따르라는 요청을 전달합니다. 완성된 명세서나 이 사이트에서 제공하는 AI 채팅은 아닙니다. 카탈로그는 예시와 장단점을 담은 선택 학습 자료이며, ‘프로젝트 기획’은 더 긴 실용적인 절차를 제공합니다. 결정 목록은 분류표가 아닌 서비스에서 도출합니다. 양립 가능한 선택은 함께 쓸 수 있습니다.",
    categories: "분류별로 선택지 비교하기",
    categoryIntro:
      "예시가 도움 될 때 이 선택 참고 목차를 살펴보세요. 각 링크에서 비교 항목이나 하위 분류, 예시·한계·관련 글을 확인할 수 있습니다. 기획을 위해 사용자나 AI가 모든 분류를 검토할 필요는 없습니다.",
  },
  ja: {
    intro:
      "アイデアを最初のプロンプトにまとめ、サービスの要件と制約からAIと企画を確定しましょう。",
    flow: ["アイデアを入力", "プロンプトをコピー", "AIと企画"],
    cards: [
      {
        id: "make-prompt",
        title: "プロンプトを作って渡す",
        body: "サービスを説明し、結果をコピーしてAIとの会話に貼り付けましょう。",
      },
      {
        id: "catalog",
        title: "カタログを理解する",
        body: "例が選択肢の比較に役立つときに使う任意の学習資料です。必要な記事だけ読みましょう。",
      },
      {
        id: "agree-plan",
        title: "AIと企画を確定する",
        body: "追加の質問に答え、企画を確認してから開発を依頼しましょう。",
      },
    ],
    why: "なぜ必要なのか：アイデアの背景を伝える",
    scenario:
      "近所で本を貸し借りするサービスを作るとします。読者は貸せる本を登録し、近くの本を探し、持ち主と受け渡しを約束します。AIと企画したくても「本のアプリを作って」だけでは、誰が何をするかが伝わりません。貸し借りだけでよいのに、AIが決済付きの書店を提案するかもしれません。",
    goal: "本の登録、貸し出しの依頼、受け取りの約束など、わかっている動作から書きましょう。名前は未定でもよく、貸出期間など決まっていない規則は質問してもらえます。開発前に一緒に確認できる企画を作ることが目標です。",
    how: "どう解決するのか：アイデアから合意した企画へ",
    steps: [
      "「プロンプトを作る」を開き、サービスの説明を入力します。例：「近所の人が本を登録し、貸し出しを依頼して受け取りを約束します」。必須なのは説明だけです。名前は任意で、空欄なら「未定」になります。",
      "予算、日程、好みの例を参考事項に書きます。不明なことは空欄でも構いません。空欄は「制約なし」ではなく「追加確認が必要」になります。入力は現在のページだけに残り、移動や再読み込みで消えます。",
      "プレビューを読んでコピーし、使っているAIとの会話に貼り付けます。必須のサイト文書である開始ガイドラインとAI行動規則の二つを読み、入力を再利用する依頼も含まれます。コピーに失敗したらプレビューを選択して手動でコピーします。JavaScriptが無効なら基本プロンプトに三つの項目を追記します。",
      "AIが二つの文書を読んだか確認します。URLを開けなければ、作成ページのMarkdownかAI行動規則のリンクから不足する本文を会話に貼り付けます。サービス情報を続けて伝え、未読の規則が適用済みだと思い込まないでください。任意のカタログにアクセスできないことだけでは企画を止めません。",
    ],
    agree: [
      "本の貸し借りなら、AIは持ち主の承認が必要か、返却されないときにどうするかを質問するかもしれません。未決定の質問に答えましょう。要件に沿ってサイト外の選択肢も比較します。カタログの例は任意です。推薦を求め、特定の判断を委任し、または明示的に保留します。",
      "ユーザー、主な動作、失敗時の扱い、制約、決定事項、完了条件をAIにまとめてもらいます。企画が本の貸し借りを扱っているか、未決定の質問が見えるか確認します。企画を確定した後、明示的に開発を依頼します。コピーだけで企画の承認や開発開始にはなりません。",
    ],
    what: "どんな考え方なのか：会話を始めるプロンプトと選択を助けるカタログ",
    roles:
      "最初のプロンプトはサービスの背景と企画の手順に従う依頼を伝えます。完成した仕様書や、このサイト内のAIチャットではありません。カタログは例と利点・制約を示す任意の学習資料で、「プロジェクト企画」はより詳しい実践手順を示します。判断の一覧は分類表ではなくサービスから導きます。両立する選択は組み合わせられます。",
    categories: "分類ごとに選択肢を比較する",
    categoryIntro:
      "例が役立つときに、この任意の索引を参照してください。各リンクで比較項目や下位分類、例・限界・関連記事を確認できます。企画のためにユーザーやAIが全分類を検討する必要はありません。",
  },
};
