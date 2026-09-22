import { mount, local } from "./shared";
import { field } from "./platform";
import type { Lang } from "../../lib/i18n";
export function mountEngine(id: string) {
  mount(id, (root, say) => {
    const t = local(root.lang as Lang),
      disabled = field<HTMLInputElement>(root, "[data-contact-off]");
    let collected = false;
    const update = () => {
      field(root, "[data-score]").textContent = collected ? "1" : "0";
      field(root, "[data-item]").toggleAttribute("hidden", collected);
      field(root, "[data-item-state]").textContent = collected
        ? t("Removed", "제거됨", "削除済み")
        : t("Present", "있음", "存在");
      root.dataset.collected = String(collected);
    };
    field(root, "[data-touch]").addEventListener("click", () => {
      field(root, "[data-player]").setAttribute(
        "transform",
        "translate(170 0)",
      );
      if (collected)
        say(
          t(
            "No item remains. Score stays 1.",
            "남은 아이템 없음. 점수 1 유지.",
            "アイテムはありません。得点は1のままです。",
          ),
        );
      else if (disabled.checked)
        say(
          t(
            "Contact disabled: no collection. Score 0.",
            "접촉 꺼짐: 수집 실패. 점수 0.",
            "接触無効：収集失敗。得点0。",
          ),
        );
      else {
        collected = true;
        say(
          t(
            "Contact → score 1 → remove item.",
            "접촉 → 점수 1 → 아이템 제거.",
            "接触 → 得点1 → アイテム削除。",
          ),
        );
      }
      update();
    });
    const reset = () => {
      collected = false;
      disabled.checked = false;
      field(root, "[data-player]").setAttribute("transform", "translate(0 0)");
      update();
    };
    reset();
    return reset;
  });
}
