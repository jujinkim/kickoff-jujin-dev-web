const root = document.querySelector("#catalog");
const input = document.querySelector("#search");
const category = document.querySelector("#category");
const grid = document.querySelector("#catalog-grid");
const resultList = document.querySelector("#search-results");
const resultStatus = document.querySelector("#result-status");
const recovery = document.querySelector("[data-search-recovery]");
const scope = document.querySelector("[data-search-scope]");
const buttons = document.querySelectorAll("button[data-view]");
function setView(view) {
  view = view === "list" ? "list" : "card";
  document.documentElement.dataset.view = view;
  buttons.forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.view === view)),
  );
}
setView(document.documentElement.dataset.view ?? "card");
buttons.forEach((b) =>
  b.addEventListener("click", () => {
    setView(b.dataset.view);
    try {
      localStorage.setItem("catalog-view", b.dataset.view);
    } catch {}
  }),
);
const initial = new URL(location.href).searchParams;
category.value = initial.get("category") ?? "";
input.value = initial.get("q") ?? "";
let pagefind;
let serial = 0;
async function update() {
  const request = ++serial;
  const query = input.value.trim();
  const cat = category.value;
  const selectedScope = category.selectedOptions[0]?.textContent.trim();
  scope.textContent = cat
    ? root.dataset.kind === "guide"
      ? `${root.dataset.scope} / ${selectedScope}`
      : selectedScope
    : root.dataset.scope;
  recovery.hidden = true;
  const url = new URL(location.href);
  query ? url.searchParams.set("q", query) : url.searchParams.delete("q");
  cat
    ? url.searchParams.set("category", cat)
    : url.searchParams.delete("category");
  history.replaceState(null, "", url);
  const cards = [...grid.querySelectorAll(".catalog-card")];
  cards.forEach(
    (c) =>
      (c.hidden = !!cat && !c.dataset.categoryPath.split(" ").includes(cat)),
  );
  grid.querySelectorAll("[data-catalog-group]").forEach((group) => {
    group.hidden = !group.querySelector(".catalog-card:not([hidden])");
  });
  const eligibleCards = new Map(
    cards
      .filter((card) => !card.hidden)
      .map((card) => [
        new URL(card.querySelector(".card-link").href).pathname,
        card,
      ]),
  );
  if (!query) {
    grid.hidden = false;
    resultList.hidden = true;
    resultList.replaceChildren();
    recovery.hidden = eligibleCards.size > 0;
    resultStatus.textContent = `${cards.filter((c) => !c.hidden).length} ${root.dataset.results}`;
    return;
  }
  resultStatus.textContent = "…";
  try {
    pagefind ??= import("/pagefind/pagefind.js");
    const engine = await pagefind;
    const result = await engine.search(query, {
      filters: {
        ...(root.dataset.kind ? { kind: root.dataset.kind } : {}),
      },
    });
    const indexedHits = await Promise.all(result.results.map((r) => r.data()));
    // CJK query and index segmentation can disagree even on an exact title.
    // Published cards already belong to this language and article kind.
    const normalize = (text) => text.normalize("NFKC").trim().toLowerCase();
    const exactHits = cards
      .filter(
        (card) =>
          !card.hidden &&
          normalize(card.querySelector("h3").textContent) === normalize(query),
      )
      .map((card) => ({
        url: card.querySelector(".card-link").getAttribute("href"),
        meta: { title: card.querySelector("h3").textContent },
        summary: card.querySelector(".card-text p").textContent,
      }));
    const seen = new Set();
    const hits = [...exactHits, ...indexedHits].filter((hit) => {
      const path = new URL(hit.url, location.href).pathname;
      if (!eligibleCards.has(path) || seen.has(path)) return false;
      seen.add(path);
      return true;
    });
    if (request !== serial) return;
    resultList.replaceChildren();
    for (const hit of hits) {
      const article = document.createElement("article");
      const link = document.createElement("a");
      link.href = hit.url;
      link.textContent = hit.meta.title;
      const p = document.createElement("p");
      p.textContent =
        hit.summary ??
        new DOMParser().parseFromString(hit.excerpt, "text/html").body
          .textContent;
      const categoryLabel = document.createElement("div");
      categoryLabel.className = "card-category";
      categoryLabel.textContent = eligibleCards
        .get(new URL(hit.url, location.href).pathname)
        .querySelector(".card-category").textContent;
      article.append(categoryLabel, link, p);
      resultList.append(article);
    }
    recovery.hidden = hits.length > 0;
    grid.hidden = true;
    resultList.hidden = false;
    resultStatus.textContent = hits.length
      ? `${hits.length} ${root.dataset.results}`
      : root.dataset.empty;
  } catch {
    if (request !== serial) return;
    pagefind = undefined;
    grid.hidden = false;
    resultList.hidden = true;
    resultStatus.textContent = root.dataset.error;
  }
}
let timer;
input.addEventListener("input", () => {
  serial++;
  clearTimeout(timer);
  timer = setTimeout(update, 180);
});
category.addEventListener("change", () => {
  clearTimeout(timer);
  void update();
});
document.querySelector("[data-search-reset]").addEventListener("click", () => {
  clearTimeout(timer);
  input.value = "";
  category.value = "";
  void update();
  input.focus();
});
void update();

export {};
