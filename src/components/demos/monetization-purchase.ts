import type { Lang } from "../../lib/i18n";
import { mount, local } from "./shared";
import { moneyText, moneyField as field } from "./monetization";
export function mountPurchase(id: string, consumable: boolean) {
  mount(id, (root, say) => {
    const m = moneyText(root.lang as Lang, root.dataset.demo!),
      t = local(root.lang as Lang);
    let count = 0,
      purchases = 0,
      uses = 0,
      applied = false;
    const update = () => {
      root.dataset.applied = String(applied);
      root.dataset.owned = String(count > 0);
      field(root, "[data-inventory]").textContent = consumable
        ? String(count)
        : count
          ? m.available
          : m.locked;
      field(root, "[data-purchases]").textContent = String(purchases);
      field(root, "[data-uses]").textContent = String(uses);
      field(root, "[data-use]").setAttribute(
        "aria-disabled",
        String(count === 0),
      );
      if (!consumable)
        field(root, "[data-buy]").setAttribute(
          "aria-disabled",
          String(count > 0),
        );
    };
    field(root, "[data-buy]").addEventListener("click", () => {
      if (!consumable && count) {
        say(
          t(
            "Already owned. No repeat purchase.",
            "이미 소유했습니다. 다시 구매하지 않습니다.",
            "所有済みです。再購入しません。",
          ),
        );
        return;
      }
      count += consumable ? 3 : 1;
      purchases++;
      update();
      say(
        `${m.purchases}: ${purchases}. ${consumable ? m.hints + ": " + count : m.available}`,
      );
    });
    field(root, "[data-use]").addEventListener("click", () => {
      if (count === 0) {
        say(m.blocked);
        return;
      }
      if (consumable) count--;
      else applied = true;
      uses++;
      update();
      say(`${m.success} ${consumable ? m.hints + ": " + count : m.available}`);
    });
    update();
    return () => {
      count = 0;
      purchases = 0;
      uses = 0;
      applied = false;
      update();
    };
  });
}
