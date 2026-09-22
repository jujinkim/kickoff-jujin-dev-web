import { mount } from "./shared";
export function mountTasks(id: string) {
  mount(id, (root, say) => {
    const filter = root.querySelector<HTMLSelectElement>("[data-filter]")!;
    const checks = [...root.querySelectorAll<HTMLInputElement>("[data-check]")];
    const opaque = root.querySelector<HTMLInputElement>("[data-opaque]");
    const progress =
      root.querySelector<HTMLProgressElement>("[data-progress]")!;
    const tools = root.querySelector<HTMLButtonElement>("[data-tools-toggle]");
    const tray = root.querySelector<HTMLElement>("[data-tools]");
    let reaction: Animation | undefined;
    const update = (announce = true) => {
      root.dataset.opaque = String(opaque?.checked ?? false);
      let visible = 0;
      checks.forEach((c) => {
        const row = c.closest<HTMLElement>("[data-task]")!;
        row.hidden =
          filter.value !== "all" && (filter.value === "done") !== c.checked;
        if (!row.hidden) visible++;
      });
      const completed = checks.filter((c) => c.checked).length;
      const count = `${completed} / ${checks.length}`;
      const percent = `${Math.round((completed / checks.length) * 100)}%`;
      root.querySelector("[data-count]")!.textContent = count;
      progress.value = completed;
      root.querySelector("[data-percent]")!.textContent = percent;
      root.querySelector<HTMLElement>("[data-empty]")!.hidden = visible > 0;
      root.dataset.complete = String(completed === checks.length);
      if (announce)
        say(
          `${root.dataset.completedLabel}: ${count} · ${root.dataset.progressLabel}: ${percent}`,
        );
    };
    checks.forEach((c) =>
      c.addEventListener("change", () => {
        update();
        const shape = root.querySelector<HTMLElement>("[data-reactive-shape]");
        reaction?.cancel();
        if (shape && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
          reaction = shape.animate(
            [
              { transform: "scale(1) rotate(0deg)" },
              { transform: "scale(1.07) rotate(-5deg)" },
              { transform: "scale(1) rotate(0deg)" },
            ],
            { duration: 320, easing: "ease-out" },
          );
        }
      }),
    );
    filter.addEventListener("change", () => update());
    opaque?.addEventListener("change", () => update(false));
    tools?.addEventListener("click", () => {
      const expanded = tools.getAttribute("aria-expanded") !== "true";
      tools.setAttribute("aria-expanded", String(expanded));
      if (tray) tray.hidden = !expanded;
    });
    // Native links still work without JS; with JS move keyboard focus into the section.
    root
      .querySelectorAll<HTMLAnchorElement>("[data-section-link]")
      .forEach((link) => {
        link.addEventListener("click", () => {
          const target = root.querySelector<HTMLElement>(link.hash);
          target?.focus({ preventScroll: true });
        });
      });
    update(false);
    return () => {
      reaction?.cancel();
      checks.forEach((c) => (c.checked = false));
      filter.value = "all";
      root
        .querySelectorAll<HTMLDetailsElement>("details")
        .forEach((d) => (d.open = false));
      if (opaque) opaque.checked = false;
      tools?.setAttribute("aria-expanded", "false");
      if (tray) tray.hidden = true;
      update(false);
    };
  });
}
