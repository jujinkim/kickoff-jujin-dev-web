import type { Lang } from "../../lib/i18n";
import { local } from "./shared";

// Shared terminology, not a shared visual template or situation.
export function serviceSplitText(lang: Lang, id: string) {
  const t = local(lang);
  const scenes: Record<string, { fixture: string; success: string }> = {
    monolith: {
      fixture: t(
        "Recipe app · one team · Community Cookbook has no family tag",
        "요리법 앱 · 한 팀 · 동네 요리책에 가족 태그 없음",
        "レシピアプリ · 一チーム · 地域の料理本に家族タグなし",
      ),
      success: t(
        "Lookup succeeds → write family → Community Cookbook has tag family.",
        "조회 성공 → 가족 기록 → 동네 요리책 태그는 가족.",
        "参照成功 → 家族を記録 → 地域の料理本のタグは家族。",
      ),
    },
    "modular-monolith": {
      fixture: t(
        "Hiking app · one team · Hiking Guide has no weekend tag",
        "등산 앱 · 한 팀 · 등산 안내에 주말 태그 없음",
        "登山アプリ · 一チーム · 登山ガイドに週末タグなし",
      ),
      success: t(
        "Lookup succeeds → write weekend → Hiking Guide has tag weekend.",
        "조회 성공 → 주말 기록 → 등산 안내 태그는 주말.",
        "参照成功 → 週末を記録 → 登山ガイドのタグは週末。",
      ),
    },
    microservices: {
      fixture: t(
        "School events app · one team · School Events has no volunteer tag",
        "학교 행사 앱 · 한 팀 · 학교 행사에 자원봉사 태그 없음",
        "学校行事アプリ · 一チーム · 学校行事にボランティアタグなし",
      ),
      success: t(
        "Lookup succeeds → write volunteer → School Events has tag volunteer.",
        "조회 성공 → 자원봉사 기록 → 학교 행사 태그는 자원봉사.",
        "参照成功 → ボランティアを記録 → 学校行事のタグはボランティア。",
      ),
    },
  };
  return {
    fiction: t(
      "Illustrative example",
      "설명을 위한 가상 예시",
      "説明用の架空の例",
    ),
    fixture: scenes[id].fixture,
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
    success: scenes[id].success,
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
