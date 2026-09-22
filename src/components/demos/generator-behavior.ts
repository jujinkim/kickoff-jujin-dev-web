import { mount, local } from "./shared";
import { field, stage, platformText } from "./platform";
import type { Lang } from "../../lib/i18n";
export function mountGenerator(id: string) {
  mount(id, (root, say) => {
    const t = local(root.lang as Lang),
      p = platformText(root.lang as Lang);
    const prev = field<HTMLButtonElement>(root, "[data-previous]"),
      next = field<HTMLButtonElement>(root, "[data-next]");
    const missing = field<HTMLInputElement>(root, "[data-missing]");
    const island = root.querySelector<HTMLInputElement>("[data-island]");
    let step = 0,
      failed = false;
    const update = () => {
      stage(root, step);
      prev.disabled = step === 0 && !failed;
      next.disabled = step === 4 || failed;
      field(root, "[data-output-count]").textContent = step >= 2 ? "4" : "0";
      field(root, "[data-build-state]").textContent = failed
        ? p.blocked
        : step >= 2
          ? p.ready
          : p.waiting;
      const descriptions = [
        t(
          "Three Markdown articles + layout",
          "Markdown 글 3개 + 레이아웃",
          "Markdown記事3件 + レイアウト",
        ),
        t(
          "Build with the selected generator.",
          "선택한 생성기로 빌드합니다.",
          "選んだ生成器でビルドします。",
        ),
        t(
          "Output: index + three article HTML files.",
          "출력: 목록 + 글 HTML 3개.",
          "出力：一覧 + 記事HTML3件。",
        ),
        t(
          "Publish generated files to a static host.",
          "생성된 파일을 정적 호스트에 발행합니다.",
          "生成ファイルを静的ホストに公開します。",
        ),
        t(
          "Read article HTML in the browser.",
          "브라우저에서 글 HTML을 읽습니다.",
          "ブラウザーで記事HTMLを読みます。",
        ),
      ];
      field(root, "[data-current]").textContent = failed
        ? p.blocked
        : descriptions[step];
      root.dataset.failed = String(failed);
      if (island)
        field(root, "[data-island-state]").textContent = island.checked
          ? t(
              "Optional client code; article HTML unchanged.",
              "선택적 클라이언트 코드. 글 HTML은 유지됩니다.",
              "任意のクライアントコード。記事HTMLは変わりません。",
            )
          : t(
              "No client island selected.",
              "클라이언트 아일랜드 미선택.",
              "クライアントアイランド未選択。",
            );
    };
    next.addEventListener("click", () => {
      if (step === 0 && missing.checked) failed = true;
      else step = Math.min(4, step + 1);
      update();
      say(field(root, "[data-current]").textContent!);
    });
    prev.addEventListener("click", () => {
      if (failed) failed = false;
      else step = Math.max(0, step - 1);
      update();
      say(field(root, "[data-current]").textContent!);
    });
    missing.addEventListener("change", () => {
      step = 0;
      failed = false;
      update();
      say(
        t(
          "Build input changed; return to source.",
          "빌드 입력 변경. 소스 단계로 돌아갑니다.",
          "ビルド入力変更。ソース段階に戻ります。",
        ),
      );
    });
    island?.addEventListener("change", () => {
      update();
      say(field(root, "[data-island-state]").textContent!);
    });
    const reset = () => {
      step = 0;
      failed = false;
      missing.checked = false;
      if (island) island.checked = false;
      update();
    };
    reset();
    return reset;
  });
}
