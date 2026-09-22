import type { Lang } from "../../lib/i18n";
import { local } from "./shared";
export function platformText(lang: Lang) {
  const t = local(lang);
  return {
    simulation: t(
      "Concept simulation",
      "개념 시뮬레이션",
      "概念シミュレーション",
    ),
    next: t("Next", "다음", "次へ"),
    previous: t("Previous", "이전", "前へ"),
    reset: t("Reset", "초기화", "リセット"),
    resetMessage: t(
      "Initial state restored.",
      "처음 상태로 돌아왔습니다.",
      "初期状態に戻りました。",
    ),
    save: t("Save", "저장", "保存"),
    saved: t("Saved", "저장됨", "保存済み"),
    notes: t("Field notes", "현장 노트", "現場ノート"),
    count: t("Saved count", "저장 개수", "保存数"),
    waiting: t("Waiting", "대기", "待機"),
    ready: t("Ready", "준비됨", "準備済み"),
    blocked: t(
      "Stopped: check failed.",
      "중단: 검사 실패.",
      "停止：検証失敗。",
    ),
    empty: t("None", "없음", "なし"),
    store: t(
      "External store (simulated)",
      "외부 저장소 (가상)",
      "外部ストア（仮想）",
    ),
    compatible: t(
      "Shared compatible data; traffic reversal does not undo writes.",
      "호환되는 공유 데이터. 트래픽 복귀는 쓰기를 취소하지 않습니다.",
      "互換性のある共有データ。経路を戻しても書き込みは残ります。",
    ),
  };
}
export const field = <T extends Element = HTMLElement>(
  root: HTMLElement,
  selector: string,
) => root.querySelector<T>(selector)!;
export function stage(root: HTMLElement, index: number) {
  root.dataset.step = String(index);
  root.querySelectorAll<HTMLElement>("[data-stage]").forEach((el) => {
    const active = Number(el.dataset.stage) === index;
    if (active) el.setAttribute("aria-current", "step");
    else el.removeAttribute("aria-current");
  });
}
