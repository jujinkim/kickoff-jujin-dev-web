import { mount } from "./shared";
export function mountResources(id: string, masonry = false) {
  mount(id, (root, say) => {
    const filter = root.querySelector<HTMLSelectElement>("[data-filter]")!;
    const sort = root.querySelector<HTMLSelectElement>("[data-sort]")!;
    const width = root.querySelector<HTMLSelectElement>("[data-width]")!;
    const frame = root.querySelector<HTMLElement>(".frame")!;
    const board = root.querySelector<HTMLElement>(".board")!;
    const tiles = [...root.querySelectorAll<HTMLElement>("[data-tile]")];
    let ordered = [...tiles],
      pending = false;
    const layout = () => {
      pending = false;
      if (!masonry) return;
      const columns =
        board.clientWidth < 450 ? 1 : board.clientWidth < 650 ? 2 : 3;
      const gap = 16,
        w = (board.clientWidth - gap * (columns - 1)) / columns;
      const heights = Array(columns).fill(0) as number[];
      ordered
        .filter((tile) => !tile.hidden)
        .forEach((tile) => {
          tile.style.width = `${w}px`;
          const col = heights.indexOf(Math.min(...heights));
          tile.style.transform = `translate(${col * (w + gap)}px,${heights[col]}px)`;
          heights[col] += tile.offsetHeight + gap;
        });
      board.dataset.positioned = "true";
      board.style.height = `${Math.max(0, ...heights) - gap}px`;
    };
    const queue = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(layout);
      }
    };
    const update = () => {
      frame.dataset.width = width.value;
      ordered = sort.value === "reverse" ? [...tiles].reverse() : [...tiles];
      ordered.forEach((tile) => {
        tile.hidden =
          filter.value !== "all" && tile.dataset.topic !== filter.value;
        board.append(tile);
      });
      const count = `${tiles.filter((tile) => !tile.hidden).length} / ${tiles.length}`;
      root.querySelector("[data-count]")!.textContent = count;
      say(count);
      queue();
    };
    [filter, sort, width].forEach((input) =>
      input.addEventListener("change", update),
    );
    root.querySelectorAll("details").forEach((detail) =>
      detail.addEventListener("toggle", () => {
        say(detail.closest("article")!.querySelector("h3")!.textContent!);
        queue();
      }),
    );
    if (masonry) {
      const observer = new ResizeObserver(queue);
      observer.observe(board);
      tiles.forEach((tile) => observer.observe(tile));
      document.fonts.ready.then(queue);
      queue();
    }
    return () => {
      filter.value = "all";
      sort.value = "original";
      width.value = "wide";
      root.querySelectorAll("details").forEach((d) => (d.open = false));
      update();
    };
  });
}
