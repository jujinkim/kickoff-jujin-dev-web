import { mount, local } from "./shared";
import { field, platformText } from "./platform";
import type { Lang } from "../../lib/i18n";
export function mountHosting(id: string) {
  mount(id, (root, say) => {
    const t = local(root.lang as Lang),
      p = platformText(root.lang as Lang);
    const fail = field<HTMLInputElement>(root, "[data-fail-save]");
    const records = new Set<string>();
    let generation = 1,
      calls = 0;
    const update = () => {
      field(root, "[data-records]").textContent = records.size
        ? "reader-01 / A17"
        : p.empty;
      field(root, "[data-count]").textContent = String(records.size);
      field(root, "[data-generation]").textContent = String(generation);
      field(root, "[data-calls]").textContent = String(calls);
    };
    const path = (kind: string, text: string) => {
      root.dataset.path = kind;
      field(root, "[data-path-state]").textContent = text;
      say(text);
      update();
    };
    field(root, "[data-read]").addEventListener("click", () => {
      if (id !== "static-hosting") calls++;
      path("read", root.dataset.readPath!);
    });
    field(root, "[data-save]").addEventListener("click", () => {
      calls++;
      if (fail.checked) {
        fail.checked = false;
        path(
          "failure",
          t(
            "Save failed before write. Records unchanged.",
            "쓰기 전 저장 실패. 기록은 유지됩니다.",
            "書き込み前に保存失敗。記録は変わりません。",
          ),
        );
      } else {
        records.add("reader-01/A17");
        path("save", `${root.dataset.savePath} ${p.count}: ${records.size}.`);
      }
    });
    field(root, "[data-restart]").addEventListener("click", () => {
      generation++;
      calls = 0;
      path(
        "restart",
        t(
          "Execution memory cleared; external records retained.",
          "실행 메모리 제거. 외부 기록은 유지됩니다.",
          "実行メモリを消去。外部の記録は残ります。",
        ),
      );
    });
    const reset = () => {
      records.clear();
      generation = 1;
      calls = 0;
      fail.checked = false;
      root.dataset.path = "idle";
      field(root, "[data-path-state]").textContent = p.waiting;
      update();
    };
    reset();
    return reset;
  });
}
