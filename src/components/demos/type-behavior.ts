import { mount } from "./shared";
export function mountType(id: string) {
  mount(id, (root, say) => {
    const input = root.querySelector<HTMLInputElement>("[data-text]")!;
    const size = root.querySelector<HTMLInputElement>("[data-size]")!;
    const guides = root.querySelector<HTMLInputElement>("[data-guides]")!;
    const tabular = root.querySelector<HTMLInputElement>(
      "input[data-tabular]",
    )!;
    const marks = root.querySelector<HTMLInputElement>("[data-terminals]");
    const weight = root.querySelector<HTMLInputElement>("[data-weight]");
    const sample = root.querySelector<HTMLElement>("[data-sample]")!;
    const layer = root.querySelector<HTMLElement>(".guides-layer")!;
    const initial = input.defaultValue;
    const measure = () => {
      layer.replaceChildren();
      const node = sample.firstChild;
      const widths: string[] = [];
      const bounds = sample.getBoundingClientRect();
      if (node) {
        const range = document.createRange();
        let offset = 0;
        for (const char of Array.from(input.value)) {
          range.setStart(node, offset);
          offset += char.length;
          range.setEnd(node, offset);
          const rect = range.getBoundingClientRect();
          widths.push(rect.width.toFixed(2));
          if (guides.checked) {
            const mark = document.createElement("span");
            mark.dataset.glyphWidth = String(rect.width);
            Object.assign(mark.style, {
              left: `${rect.left - bounds.left}px`,
              top: `${rect.top - bounds.top}px`,
              width: `${rect.width}px`,
              height: `${rect.height}px`,
            });
            layer.append(mark);
          }
        }
      }
      root.querySelector("[data-measure]")!.textContent =
        `${widths.join(" / ") || "0"} px`;
    };
    const update = () => {
      // Keep a single text node: per-character wrappers can interrupt script shaping.
      sample.textContent = input.value;
      sample.style.fontSize = `${size.value}px`;
      sample.style.fontWeight = weight?.value ?? "400";
      root.querySelector("[data-size-value]")!.textContent = `${size.value}px`;
      if (weight)
        root.querySelector("[data-weight-value]")!.textContent = weight.value;
      root.dataset.terminals = String(marks?.checked ?? false);
      root.querySelector<HTMLElement>(".numbers")!.dataset.tabular = String(
        tabular.checked,
      );
      measure();
      say(`${input.value.length} / 60 · ${size.value}px`);
    };
    [input, size, weight].forEach((el) =>
      el?.addEventListener("input", update),
    );
    [guides, tabular, marks].forEach((el) =>
      el?.addEventListener("change", update),
    );
    new ResizeObserver(measure).observe(sample);
    document.fonts.ready.then(() => {
      update();
      say("");
    });
    return () => {
      input.value = initial;
      size.value = "48";
      guides.checked = false;
      tabular.checked = false;
      if (marks) marks.checked = false;
      if (weight) weight.value = "400";
      update();
    };
  });
}
