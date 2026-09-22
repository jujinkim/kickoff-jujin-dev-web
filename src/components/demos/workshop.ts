import type { Lang } from "../../lib/i18n";
import { local } from "./shared";
/** Identical project copy, independent visual implementations. */
export function workshop(lang: Lang) {
  const t = local(lang);
  return {
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
}
