import test from "node:test";
import assert from "node:assert/strict";
import { readArticles } from "../scripts/validate-content.mjs";
import {
  designRegistry,
  validateDesigns,
} from "../scripts/design-registry.mjs";
const articles = readArticles();
test("published designs have components, current translations, captions and thumbnails", () => {
  assert.deepEqual(validateDesigns(articles), []);
});
test("unfinished designs cannot become public", () => {
  const copy = structuredClone(articles);
  const article = structuredClone(copy.find((a) => a.data.kind === "concept"));
  article.data.articleId = "unimplemented-design";
  copy.push(article);
  assert.match(
    validateDesigns(copy).join("\n"),
    /missing design demo registration/,
  );
  const registry = structuredClone(designRegistry);
  const id = Object.keys(registry)[0];
  const wrongComponent = structuredClone(designRegistry);
  wrongComponent[id].component = "Masonry";
  assert.match(
    validateDesigns(articles, wrongComponent).join("\n"),
    /unfinished demo component contract/,
  );
  delete registry[id].caption.ko;
  assert.match(
    validateDesigns(articles, registry, () => false).join("\n"),
    /missing thumbnail/,
  );
  assert.match(
    validateDesigns(articles, registry).join("\n"),
    /missing localized caption/,
  );
  copy.find(
    (a) => a.data.articleId === id && a.data.lang === "ja",
  ).data.status = "draft";
  assert.match(
    validateDesigns(copy).join("\n"),
    /missing or stale published translation/,
  );
});
