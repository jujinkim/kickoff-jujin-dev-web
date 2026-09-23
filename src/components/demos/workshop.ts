import type { Lang } from "../../lib/i18n";
import { local } from "./shared";
/** Each visual treatment shows a separate, familiar three-step project. */
export function workshop(lang: Lang, id: string) {
  const t = local(lang);
  const projects: Record<
    string,
    { title: string; goal: string; tasks: string[] }
  > = {
    brutalism: {
      title: t("Repair day", "수리 행사", "修理の日"),
      goal: t(
        "Open a clear schedule for neighborhood repairs.",
        "동네 수리 행사 일정을 분명히 알립니다.",
        "地域の修理会の予定を明確に伝えます。",
      ),
      tasks: [
        t("List repair stations", "수리 부스 적기", "修理ブースを記す"),
        t("Set opening time", "시작 시간 정하기", "開始時刻を決める"),
        t("Mark the entrance", "입구 표시하기", "入口を示す"),
      ],
    },
    neobrutalism: {
      title: t("School fair", "학교 축제", "学校祭"),
      goal: t(
        "Help families find the fair's next activity.",
        "가족들이 축제의 다음 활동을 찾게 합니다.",
        "家族が次の催しを見つけられるようにします。",
      ),
      tasks: [
        t("Name the stalls", "부스 이름 정하기", "出店名を決める"),
        t("Plan a route", "동선 그리기", "順路を描く"),
        t("Check signs", "안내판 확인", "案内板を確認"),
      ],
    },
    glassmorphism: {
      title: t("Photo walk", "사진 산책", "写真散歩"),
      goal: t(
        "Keep route controls legible over a photo map.",
        "사진 지도 위 경로 조작을 읽기 쉽게 둡니다.",
        "写真地図の上でも経路操作を読みやすくします。",
      ),
      tasks: [
        t("Choose a route", "경로 고르기", "経路を選ぶ"),
        t("Pin viewpoints", "촬영 지점 표시", "撮影地点を記す"),
        t("Check meeting spot", "만날 곳 확인", "集合場所を確認"),
      ],
    },
    neumorphism: {
      title: t("Daily stretches", "매일 스트레칭", "毎日のストレッチ"),
      goal: t(
        "Show which gentle routine was pressed and completed.",
        "누른 동작과 마친 동작을 구분합니다.",
        "押した動作と終えた動作を区別します。",
      ),
      tasks: [
        t("Stretch shoulders", "어깨 풀기", "肩を伸ばす"),
        t("Stretch back", "등 풀기", "背中を伸ばす"),
        t("Breathe slowly", "천천히 호흡", "ゆっくり呼吸"),
      ],
    },
    skeuomorphism: {
      title: t("Recipe notebook", "요리 수첩", "料理ノート"),
      goal: t(
        "Use a familiar notebook to plan supper.",
        "익숙한 수첩으로 저녁 식사를 준비합니다.",
        "親しみのあるノートで夕食を考えます。",
      ),
      tasks: [
        t("Choose a dish", "요리 고르기", "料理を選ぶ"),
        t("Write ingredients", "재료 적기", "材料を書く"),
        t("Check oven time", "오븐 시간 확인", "焼き時間を確認"),
      ],
    },
    "flat-design": {
      title: t("Clinic visit", "진료 예약", "診察予約"),
      goal: t(
        "Find appointment steps without decorative depth.",
        "장식적 깊이 없이 예약 단계를 찾습니다.",
        "装飾的な奥行きなしで予約手順を探します。",
      ),
      tasks: [
        t("Choose a doctor", "의사 고르기", "医師を選ぶ"),
        t("Pick a time", "시간 고르기", "時刻を選ぶ"),
        t("Confirm address", "주소 확인", "住所を確認"),
      ],
    },
    minimalism: {
      title: t("Hiking checklist", "등산 준비 목록", "登山の持ち物"),
      goal: t(
        "Show only what matters before leaving home.",
        "집을 나서기 전 필요한 것만 보여 줍니다.",
        "出発前に必要なものだけを示します。",
      ),
      tasks: [
        t("Pack water", "물 챙기기", "水を用意"),
        t("Check weather", "날씨 확인", "天気を確認"),
        t("Share route", "경로 공유", "経路を共有"),
      ],
    },
    "liquid-glass": {
      title: t("Coastal photo diary", "해변 사진 일기", "海辺の写真日記"),
      goal: t(
        "Keep navigation visible above full-size photos.",
        "큰 사진 위에서도 탐색을 보이게 합니다.",
        "大きな写真の上でも案内を見えるようにします。",
      ),
      tasks: [
        t("Select photos", "사진 고르기", "写真を選ぶ"),
        t("Order the route", "여정 정렬", "旅程を並べる"),
        t("Write captions", "사진 설명 쓰기", "説明文を書く"),
      ],
    },
    "material-3-expressive": {
      title: t("Community picnic", "동네 소풍", "地域のピクニック"),
      goal: t(
        "Make the next organizing action easy to spot.",
        "다음 준비 동작을 쉽게 찾게 합니다.",
        "次の準備操作を見つけやすくします。",
      ),
      tasks: [
        t("Choose a park", "공원 고르기", "公園を選ぶ"),
        t("Count guests", "참석자 세기", "参加者を数える"),
        t("Plan food", "음식 정하기", "食事を決める"),
      ],
    },
    "tactile-collage": {
      title: t("Memory board", "추억 보드", "思い出ボード"),
      goal: t(
        "Arrange personal keepsakes without losing labels.",
        "사진과 기념품을 라벨과 함께 정리합니다.",
        "写真と思い出の品をラベルとともに並べます。",
      ),
      tasks: [
        t("Pick photos", "사진 고르기", "写真を選ぶ"),
        t("Add tickets", "표 붙이기", "切符を貼る"),
        t("Write dates", "날짜 적기", "日付を書く"),
      ],
    },
    "retro-digital": {
      title: t("Arcade night", "오락실 모임", "ゲームセンターの夜"),
      goal: t(
        "Give a game night an early-computer mood.",
        "게임 모임에 옛 컴퓨터 분위기를 줍니다.",
        "ゲーム会に昔のコンピューターの雰囲気を出します。",
      ),
      tasks: [
        t("Choose games", "게임 고르기", "ゲームを選ぶ"),
        t("Invite friends", "친구 초대", "友人を招く"),
        t("Post scores", "점수 게시", "得点を載せる"),
      ],
    },
  };
  const scene = projects[id];
  const base = {
    project: t("Make room", "공간 만들기", "余白をつくる"),
    identity: t("PROJECT / TODAY", "프로젝트 / 오늘", "プロジェクト / 今日"),
    menu: t("Project sections", "프로젝트 메뉴", "プロジェクトメニュー"),
    overview: t("Overview", "개요", "概要"),
    tasksTitle: t("Tasks", "작업", "タスク"),
    resourcesTitle: t("Resources", "자료", "資料"),
    goal: t(
      "A little space for your next idea.",
      "다음 아이디어를 위한 작은 공간.",
      "次のアイデアのための小さな余白。",
    ),
    description: t(
      "Collect references, sketch a direction, and make the words clear. Three small steps toward a thoughtful workspace.",
      "자료를 모으고 방향을 그린 뒤 문구를 다듬습니다. 세 가지 작은 작업으로 생각이 담긴 작업실을 만듭니다.",
      "資料を集め、方向を描き、言葉を整えます。3つの小さな作業で、考えの伝わる作業室をつくります。",
    ),
    tasks: [
      t("Gather references", "참고 자료 모으기", "参考資料を集める"),
      t("Draw the first draft", "첫 초안 그리기", "最初の案を描く"),
      t("Review labels", "라벨 검토하기", "ラベルを確認する"),
    ],
    status: t("Status", "상태", "状態"),
    all: t("All", "전체", "すべて"),
    open: t("Open", "진행 중", "未完了"),
    done: t("Done", "완료", "完了"),
    empty: t(
      "No tasks in this state.",
      "해당 상태의 작업이 없습니다.",
      "この状態のタスクはありません。",
    ),
    progress: t("Progress", "진행률", "進捗"),
    completed: t("Completed", "완료 수", "完了数"),
    resources: [
      {
        title: t("Reference board", "참고 보드", "参考ボード"),
        note: t(
          "Keep one example for its layout and one for its wording. Note what each helps you decide.",
          "배치와 문구를 참고할 예시를 하나씩 고릅니다. 각 예시가 어떤 결정에 도움이 되는지 적습니다.",
          "配置と言葉の参考を1つずつ選びます。それぞれがどの判断に役立つかを書き留めます。",
        ),
      },
      {
        title: t("Review checklist", "검토 체크리스트", "確認リスト"),
        note: t(
          "Read every label aloud. Check that each action still makes sense on a small screen.",
          "모든 라벨을 소리 내어 읽습니다. 작은 화면에서도 각 동작을 이해할 수 있는지 확인합니다.",
          "すべてのラベルを声に出して読みます。小さな画面でも各操作が伝わるか確認します。",
        ),
      },
    ],
    note: t("Read note", "메모 읽기", "メモを読む"),
    summary: t(
      "3 tasks · 2 resources",
      "작업 3개 · 자료 2개",
      "タスク3件・資料2件",
    ),
    reset: t("Reset", "초기화", "リセット"),
    resetMessage: t(
      "Initial state restored",
      "초기 상태로 복원했습니다",
      "初期状態に戻しました",
    ),
    initialMessage: t(
      "Ready to begin.",
      "시작할 준비가 되었습니다.",
      "始める準備ができました。",
    ),
    opaque: t("Opaque panels", "불투명 패널", "不透明パネル"),
    tools: t("View tools", "도구 보기", "ツールを表示"),
  };
  return scene
    ? {
        ...base,
        project: scene.title,
        goal: scene.goal,
        description: t(
          `Track three steps and two notes for ${scene.title}.`,
          `${scene.title}에 필요한 작업 세 가지와 메모 두 개를 정리합니다.`,
          `${scene.title}に必要な作業3件とメモ2件を整理します。`,
        ),
        tasks: scene.tasks,
      }
    : base;
}
