import type { Lang } from "../../lib/i18n";
import { local } from "./shared";

/** Each requirements diagram uses its article's situation. */
export function requirementsText(lang: Lang, id: string) {
  const t = local(lang);
  const fixtures: Record<string, string> = {
    "user-story": t(
      "Commuter · Morning Walk article · not saved yet",
      "통근자 · 아침 산책 글 · 아직 저장하지 않음",
      "通勤者 · 朝の散歩の記事 · 未保存",
    ),
    "use-case": t(
      "Home cook · Weekend Recipes page · not saved yet",
      "집에서 요리하는 사람 · 주말 요리법 페이지 · 아직 저장하지 않음",
      "家庭の料理人 · 週末のレシピのページ · 未保存",
    ),
    "job-story": t(
      "Community gardener · Garden Notes page · not saved yet",
      "동네 정원사 · 정원 기록 페이지 · 아직 저장하지 않음",
      "地域の園芸家 · 庭の記録のページ · 未保存",
    ),
  };
  return {
    fiction: t(
      "Illustrative example",
      "설명을 위한 가상 예시",
      "説明のための架空の例",
    ),
    fixture: fixtures[id],
    boundary: t(
      "Saving a link does not promise offline reading.",
      "링크 저장이 오프라인 읽기를 보장하지는 않습니다.",
      "リンクの保存はオフライン閲覧を保証しません。",
    ),
  };
}
