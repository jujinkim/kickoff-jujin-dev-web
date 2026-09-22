import { mount } from "./shared";
import { field, platformText } from "./platform";
import type { Lang } from "../../lib/i18n";
export function mountUi(id: string) {
  mount(id, (root, say) => {
    const p = platformText(root.lang as Lang),
      saved = new Set<string>();
    const buttons = [
      ...root.querySelectorAll<HTMLButtonElement>("[data-save]"),
    ];
    const update = () => {
      for (const b of buttons) {
        const active = saved.has(b.dataset.save!);
        b.textContent = active ? p.saved : p.save;
        b.setAttribute("aria-pressed", String(active));
      }
      field(root, "[data-count]").textContent = String(saved.size);
      field(root, "[data-state]").textContent =
        `A17: ${saved.has("A17") ? "1" : "0"} · B04: ${saved.has("B04") ? "1" : "0"}`;
    };
    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        saved.add(b.dataset.save!);
        update();
        field(root, "[data-path-state]").textContent = root.dataset.updatePath!;
        say(
          `${b.dataset.save}: ${p.saved}. ${p.count}: ${saved.size}. ${root.dataset.updatePath}`,
        );
      }),
    );
    const reset = () => {
      saved.clear();
      update();
      field(root, "[data-path-state]").textContent = p.waiting;
    };
    reset();
    return reset;
  });
}
