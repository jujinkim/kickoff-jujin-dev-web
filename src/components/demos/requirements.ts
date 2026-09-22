import type { Lang } from "../../lib/i18n";
import { local } from "./shared";

/** Shared fictional input and scope; each concept owns its diagram. */
export function requirementsText(lang: Lang) {
  const t = local(lang);
  return {
    fiction: t(
      "Illustrative example",
      "설명을 위한 가상 예시",
      "説明のための架空の例",
    ),
    fixture: t(
      "Signed-in commuter · A17 · not saved yet",
      "로그인한 통근자 · A17 · 아직 저장하지 않음",
      "ログイン済みの通勤者 · A17 · 未保存",
    ),
    boundary: t(
      "Saving a link does not promise offline reading.",
      "링크 저장이 오프라인 읽기를 보장하지는 않습니다.",
      "リンクの保存はオフライン閲覧を保証しません。",
    ),
  };
}
