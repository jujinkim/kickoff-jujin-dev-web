import type { Lang } from "../../lib/i18n";
import { local } from "./shared";

// Shared fixture and terminology, not a shared visual template.
export function serviceSplitText(lang: Lang) {
  const t = local(lang);
  return {
    fiction: t(
      "Illustrative example",
      "설명을 위한 가상 예시",
      "説明用の架空の例",
    ),
    fixture: t(
      "Reading app · one team · A17 has no tag",
      "독서 앱 · 한 팀 · A17은 태그 없음",
      "読書アプリ · 一チーム · A17はタグなし",
    ),
    change: t(
      "Change: add a Library tag; Billing behavior stays unchanged.",
      "변경: 보관함 태그 추가. 결제 동작은 그대로.",
      "変更：ライブラリにタグを追加。課金の動作は同じ。",
    ),
    catalog: t("Catalog", "카탈로그", "カタログ"),
    library: t("Library", "보관함", "ライブラリ"),
    billing: t("Billing", "결제", "課金"),
    unchanged: t("Behavior unchanged", "동작 유지", "動作は同じ"),
    tagAdded: t("Tag feature added", "태그 기능 추가", "タグ機能を追加"),
    unit: t("Deployment unit", "배포 단위", "デプロイ単位"),
    local: t("In-process call", "프로세스 내부 호출", "プロセス内呼び出し"),
    success: t(
      "Lookup succeeds → write travel → A17 has tag travel.",
      "조회 성공 → travel 기록 → A17 태그는 travel.",
      "参照成功 → travelを記録 → A17のタグはtravel。",
    ),
    failure: t(
      "Lookup fails before writing → no tag. Report failure; retry after recovery.",
      "쓰기 전 조회 실패 → 태그 없음. 실패 안내, 복구 후 재시도.",
      "書き込み前に参照失敗 → タグなし。失敗を伝え、復旧後に再試行。",
    ),
    storeNote: t(
      "Ownership boxes describe access rules, not database-machine counts.",
      "소유권 상자는 접근 규칙을 뜻하며 데이터베이스 서버 수를 뜻하지 않습니다.",
      "所有権の枠はアクセス規則を示し、データベースのマシン数を示しません。",
    ),
  };
}
