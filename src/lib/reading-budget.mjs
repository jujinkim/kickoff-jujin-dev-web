// Editorial limits, not measured reading speeds. Reserve 15 seconds for the visual.
export function visibleMarkdown(text) {
  return text
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^```[^\n]*$/gm, "")
    .replace(/<[^>]*>/g, "")
    .replace(/^\s*\d+[.)]\s+/gm, "")
    .replace(/^[#>*-]+\s*/gm, "");
}
export function readingSeconds(text) {
  const plain = visibleMarkdown(text);
  const cjk =
    /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/gu;
  const characters = [...plain.matchAll(cjk)].length;
  const words = (
    plain.replace(cjk, " ").match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ??
    []
  ).length;
  return Math.ceil((words / 180 + characters / 600) * 60);
}
export function articleOverviewSeconds(article) {
  return (
    15 +
    readingSeconds(
      `${article.data.title}\n${article.data.summary}\n${article.content}`,
    )
  );
}
