import type { Lang } from "../../lib/i18n";
import { mount, local } from "./shared";
import { moneyText, moneyField as field } from "./monetization";
export function mountAccess(id: string, trial: boolean) {
  mount(id, (root, say) => {
    const m = moneyText(root.lang as Lang),
      t = local(root.lang as Lang);
    let day = 0,
      paid = false,
      actions = 0;
    const rights = () => ({
      edit: paid || !trial || day < 3,
      export: paid || (trial && day < 3),
    });
    const update = (announce = true) => {
      const access = rights();
      root.dataset.paid = String(paid);
      root.dataset.expired = String(trial && day >= 3 && !paid);
      field(root, "[data-day]").textContent = String(day);
      field(root, "[data-edit-access]").textContent = access.edit
        ? m.available
        : m.locked;
      field(root, "[data-export-access]").textContent = access.export
        ? m.available
        : m.locked;
      const plan = paid
        ? m.paid
        : trial
          ? day < 3
            ? t("Trial active", "체험 중", "体験中")
            : t("Trial expired", "체험 만료", "体験終了")
          : m.free;
      field(root, "[data-plan]").textContent = plan;
      field(root, "[data-actions]").textContent = String(actions);
      field(root, "[data-day-next]").setAttribute(
        "aria-disabled",
        String(day === 3),
      );
      field(root, "[data-upgrade]").setAttribute("aria-disabled", String(paid));
      if (announce)
        say(
          `${m.day}: ${day}. ${plan}. ${m.edit}: ${access.edit ? m.available : m.locked}. PDF: ${access.export ? m.available : m.locked}`,
        );
    };
    field(root, "[data-day-next]").addEventListener("click", () => {
      day = Math.min(3, day + 1);
      update();
    });
    field(root, "[data-upgrade]").addEventListener("click", () => {
      paid = true;
      update();
    });
    for (const feature of ["edit", "export"] as const)
      field(root, `[data-${feature}]`).addEventListener("click", () => {
        if (!rights()[feature]) {
          say(m.blocked);
          return;
        }
        actions++;
        update(false);
        say(`${m.success} ${actions}`);
      });
    update(false);
    return () => {
      day = 0;
      paid = false;
      actions = 0;
      update(false);
    };
  });
}
