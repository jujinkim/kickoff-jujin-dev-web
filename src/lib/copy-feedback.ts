const snackbarDuration = 6_000;

let snackbar: HTMLElement | null = null;
let message: HTMLElement | null = null;
let dismiss: HTMLButtonElement | null = null;
let trigger: HTMLButtonElement | null = null;
let hideTimer: number | undefined;

function clearHideTimer() {
  window.clearTimeout(hideTimer);
  hideTimer = undefined;
}

function scheduleHide() {
  clearHideTimer();
  if (
    !snackbar?.hasAttribute("data-open") ||
    snackbar.matches(":hover") ||
    snackbar.contains(document.activeElement)
  )
    return;
  hideTimer = window.setTimeout(() => hideCopySnackbar(), snackbarDuration);
}

function initializeSnackbar() {
  if (snackbar) return;
  snackbar = document.querySelector<HTMLElement>("[data-copy-snackbar]");
  if (!snackbar) return;
  message = snackbar.querySelector<HTMLElement>("[role=status]");
  dismiss = snackbar.querySelector<HTMLButtonElement>("[data-dismiss-copy]");
  snackbar.addEventListener("pointerenter", clearHideTimer);
  snackbar.addEventListener("pointerleave", scheduleHide);
  snackbar.addEventListener("focusin", clearHideTimer);
  snackbar.addEventListener("focusout", scheduleHide);
  dismiss?.addEventListener("click", () => hideCopySnackbar());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && snackbar?.hasAttribute("data-open"))
      hideCopySnackbar();
  });
}

export function hideCopySnackbar(owner?: HTMLElement) {
  if (owner && (!trigger || !owner.contains(trigger))) return;
  clearHideTimer();
  const focusTarget = dismiss === document.activeElement ? trigger : null;
  trigger = null;
  snackbar?.removeAttribute("data-open");
  if (message) message.textContent = "";
  if (dismiss) dismiss.hidden = true;
  focusTarget?.focus();
}

export function showCopySnackbar(text: string, button: HTMLButtonElement) {
  initializeSnackbar();
  if (!snackbar || !message || !dismiss) return;
  trigger = button;
  dismiss.hidden = false;
  snackbar.setAttribute("data-open", "");
  message.textContent = text;
  scheduleHide();
}
