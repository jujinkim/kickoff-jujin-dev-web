import type { Lang } from "../../lib/i18n";
import { mount } from "./shared";
import { moneyText, moneyField as field, readQuantity } from "./monetization";
import { priceCents, amount } from "./monetization-math.mjs";
export function mountPricing(id: string, initial: number) {
  mount(id, (root, say) => {
    const m = moneyText(root.lang as Lang),
      input = field<HTMLInputElement>(root, "[data-quantity]");
    function update(announce = true) {
      const q = readQuantity(input),
        output = field(root, "[data-total]"),
        formula = field(root, "[data-formula]");
      if (q === null) {
        output.textContent = "—";
        formula.textContent = m.invalid;
        root
          .querySelectorAll("[data-peer], [data-month-charge]")
          .forEach((el) => (el.textContent = "—"));
        if (announce) say(m.invalid);
        return;
      }
      const total = priceCents(id, q) + (id === "usage-based" ? 1800 : 0);
      output.textContent = amount(total);
      let expression = "";
      switch (id) {
        case "per-seat-pricing":
          expression = `${q} × 8.00`;
          break;
        case "volume-pricing":
          expression = `${q} × ${q <= 100 ? "0.20" : "0.10"}`;
          break;
        case "graduated-pricing":
          expression = `${Math.min(q, 100)} × 0.20 + ${Math.max(q - 100, 0)} × 0.10`;
          break;
        case "base-plus-overage":
          expression = `20.00 + ${Math.max(q - 100, 0)} × 0.10`;
          break;
        case "usage-based":
          expression = `${q} × 0.02 + 6.00 + 12.00`;
          field(root, "[data-month-charge]").textContent = amount(
            priceCents(id, q),
          );
          break;
      }
      formula.textContent = `${expression} = ${amount(total)}`;
      const peer = root.querySelector("[data-peer]");
      if (peer)
        peer.textContent = amount(
          priceCents(
            id === "volume-pricing" ? "graduated-pricing" : "volume-pricing",
            q,
          ),
        );
      field(root, "[data-less]").setAttribute("aria-disabled", String(q === 0));
      field(root, "[data-more]").setAttribute(
        "aria-disabled",
        String(q === 10000),
      );
      if (announce) say(`${m.total}: ${amount(total)}`);
    }
    input.addEventListener("input", () => update());
    for (const [selector, delta] of [
      ["[data-less]", -1],
      ["[data-more]", 1],
    ] as const)
      field(root, selector).addEventListener("click", () => {
        const q = readQuantity(input);
        if (q === null) {
          say(m.invalid);
          return;
        }
        input.value = String(Math.min(10000, Math.max(0, q + delta)));
        update();
      });
    update(false);
    return () => {
      input.value = String(initial);
      update(false);
    };
  });
}
