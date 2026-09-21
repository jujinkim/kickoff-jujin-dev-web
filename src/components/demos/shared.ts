import type { Lang } from "../../lib/i18n";
export const local = (lang: Lang) => (en: string, ko: string, ja: string) =>
  ({ en, ko, ja })[lang];
/** Lifecycle only; visual structure and state belong to each component. */
export function mount(
  id: string,
  setup: (root: HTMLElement, say: (text: string) => void) => () => void,
) {
  document
    .querySelectorAll<HTMLElement>(`[data-demo="${id}"]`)
    .forEach((root) => {
      if (root.dataset.ready) return;
      const say = (text: string) => {
        root.querySelector<HTMLElement>("[role=status]")!.textContent = text;
      };
      const reset = setup(root, say);
      root
        .querySelectorAll<
          | HTMLButtonElement
          | HTMLInputElement
          | HTMLSelectElement
          | HTMLTextAreaElement
        >("[data-interactive]")
        .forEach((el) => (el.disabled = false));
      root.querySelector("[data-reset]")!.addEventListener("click", () => {
        reset();
        say(root.dataset.resetMessage!);
      });
      root.dataset.ready = "true";
    });
}
