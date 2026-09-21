import { mount } from "./shared";
export function mountTasks(id: string) {
  mount(id, (root, say) => {
    const filter = root.querySelector<HTMLSelectElement>("[data-filter]")!;
    const checks = [...root.querySelectorAll<HTMLInputElement>("[data-check]")];
    const opaque = root.querySelector<HTMLInputElement>("[data-opaque]");
    const update = () => {
      root.dataset.opaque = String(opaque?.checked ?? false);
      let visible = 0;
      checks.forEach((c) => {
        const row = c.closest<HTMLElement>("[data-task]")!;
        row.hidden =
          filter.value !== "all" && (filter.value === "done") !== c.checked;
        if (!row.hidden) visible++;
      });
      const count = `${checks.filter((c) => c.checked).length} / ${checks.length}`;
      root.querySelector("[data-count]")!.textContent = count;
      root.querySelector<HTMLElement>("[data-empty]")!.hidden = visible > 0;
      say(count);
    };
    checks.forEach((c) => c.addEventListener("change", update));
    filter.addEventListener("change", update);
    opaque?.addEventListener("change", update);
    return () => {
      checks.forEach((c) => (c.checked = false));
      filter.value = "all";
      if (opaque) opaque.checked = false;
      update();
    };
  });
}
