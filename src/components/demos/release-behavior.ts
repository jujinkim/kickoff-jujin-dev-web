import { mount, local } from "./shared";
import { field, stage, platformText } from "./platform";
import type { Lang } from "../../lib/i18n";
export function mountRolling() {
  mount("rolling", (root, say) => {
    const t = local(root.lang as Lang),
      p = platformText(root.lang as Lang);
    const prev = field<HTMLButtonElement>(root, "[data-previous]"),
      next = field<HTMLButtonElement>(root, "[data-next]"),
      fail = field<HTMLInputElement>(root, "[data-fail-ready]");
    let step = 0,
      failed = false;
    const update = () => {
      const done = Math.floor(step / 3),
        phase = step % 3,
        old = 4 - done,
        fresh = done + (phase ? 1 : 0);
      root.dataset.step = String(step);
      root.dataset.failed = String(failed);
      field(root, "[data-old]").textContent = String(old);
      field(root, "[data-new]").textContent = String(fresh);
      field(root, "[data-ready-count]").textContent = String(
        old + fresh - (phase === 1 ? 1 : 0),
      );
      const slots = [...root.querySelectorAll<HTMLElement>("[data-slot]")];
      slots.forEach((slot, i) => {
        let label = "";
        if (i < old) label = `v1 · ${p.ready}`;
        else if (i < old + fresh)
          label = `v2 · ${i === old + fresh - 1 && phase === 1 ? (failed ? p.blocked : p.waiting) : p.ready}`;
        else label = t("Spare slot", "여유 슬롯", "予備枠");
        slot.textContent = `${i + 1}. ${label}`;
        slot.dataset.version =
          i < old ? "v1" : i < old + fresh ? "v2" : "empty";
      });
      const text = failed
        ? p.blocked
        : step === 12
          ? t(
              "Complete: four ready v2.",
              "완료: 준비된 v2 4개.",
              "完了：準備済みv2が4個。",
            )
          : phase === 1
            ? t(
                "Check the new replica before removal.",
                "제거 전에 새 복제본을 검사합니다.",
                "削除前に新しいレプリカを確認します。",
              )
            : phase === 2
              ? t(
                  "New replica ready; one v1 can be removed.",
                  "새 복제본 준비됨. v1 하나 제거 가능.",
                  "新版は準備済み。v1を1個削除できます。",
                )
              : t(
                  "Add one v2 in the spare slot.",
                  "여유 슬롯에 v2 하나를 추가합니다.",
                  "予備枠にv2を1個追加します。",
                );
      field(root, "[data-current]").textContent = text;
      prev.disabled = step === 0;
      next.disabled = failed || step === 12;
    };
    next.addEventListener("click", () => {
      if (step % 3 === 1 && fail.checked) failed = true;
      else step = Math.min(12, step + 1);
      update();
      say(field(root, "[data-current]").textContent!);
    });
    prev.addEventListener("click", () => {
      step = Math.max(0, step - 1);
      failed = false;
      update();
      say(field(root, "[data-current]").textContent!);
    });
    const reset = () => {
      step = 0;
      failed = false;
      fail.checked = false;
      update();
    };
    reset();
    return reset;
  });
}
export function mountBlueGreen() {
  mount("blue-green", (root, say) => {
    const t = local(root.lang as Lang),
      p = platformText(root.lang as Lang);
    const prev = field<HTMLButtonElement>(root, "[data-previous]"),
      next = field<HTMLButtonElement>(root, "[data-next]"),
      save = field<HTMLButtonElement>(root, "[data-save]"),
      rollback = field<HTMLButtonElement>(root, "[data-rollback]"),
      fail = field<HTMLInputElement>(root, "[data-fail-ready]");
    let step = 0,
      failed = false,
      saved = false;
    const update = () => {
      stage(root, step);
      root.dataset.failed = String(failed);
      root.dataset.route = step === 2 ? "green" : "blue";
      field(root, "[data-blue-traffic]").textContent =
        step === 2 ? "0%" : "100%";
      field(root, "[data-green-traffic]").textContent =
        step === 2 ? "100%" : "0%";
      field(root, "[data-green-state]").textContent = failed
        ? p.blocked
        : step > 0
          ? p.ready
          : p.waiting;
      field(root, "[data-records]").textContent = saved ? "A17" : p.empty;
      field(root, "[data-count]").textContent = saved ? "1" : "0";
      prev.disabled = step === 0 && !failed;
      next.disabled = failed || step === 3;
      save.disabled = step !== 2;
      rollback.disabled = step !== 2;
      field(root, "[data-current]").textContent = failed
        ? p.blocked
        : field(root, `[data-stage="${step}"]`).textContent!.trim();
    };
    next.addEventListener("click", () => {
      if (step === 0 && fail.checked) failed = true;
      else step = Math.min(3, step + 1);
      update();
      say(field(root, "[data-current]").textContent!);
    });
    prev.addEventListener("click", () => {
      if (failed) failed = false;
      else step = Math.max(0, step - 1);
      update();
      say(`${field(root, "[data-current]").textContent} ${p.compatible}`);
    });
    save.addEventListener("click", () => {
      saved = true;
      update();
      say(`A17: ${p.saved}. ${p.count}: 1.`);
    });
    rollback.addEventListener("click", () => {
      step = 3;
      update();
      say(
        t(
          "Failure: traffic returned to blue. Stored data retained.",
          "장애: 트래픽 블루 복귀. 저장 데이터 유지.",
          "障害：経路をブルーに復帰。保存データは維持。",
        ),
      );
    });
    const reset = () => {
      step = 0;
      failed = false;
      saved = false;
      fail.checked = false;
      update();
    };
    reset();
    return reset;
  });
}
export function mountCanary() {
  mount("canary", (root, say) => {
    const t = local(root.lang as Lang),
      p = platformText(root.lang as Lang);
    const prev = field<HTMLButtonElement>(root, "[data-previous]"),
      next = field<HTMLButtonElement>(root, "[data-next]"),
      empty = field<HTMLInputElement>(root, "[data-empty-samples]");
    let step = 0;
    const update = () => {
      stage(root, step);
      prev.disabled = step === 0;
      next.disabled = step === 2;
      field(root, "[data-control-sample]").textContent = empty.checked
        ? "0 / 0"
        : "2 / 1,000";
      field(root, "[data-canary-sample]").textContent = empty.checked
        ? "0 / 0"
        : "30 / 1,000";
      const unknown = t("Insufficient evidence", "판단 불가", "判断不能");
      field(root, "[data-control-rate]").textContent =
        step === 0 ? "—" : empty.checked ? unknown : "0.2%";
      field(root, "[data-canary-rate]").textContent =
        step === 0 ? "—" : empty.checked ? unknown : "3.0%";
      const decision =
        step < 2
          ? p.waiting
          : empty.checked
            ? unknown
            : t(
                "STOP: 3% > 1%. Return candidate traffic to v1.",
                "중단: 3% > 1%. 후보 트래픽을 v1으로 복귀.",
                "停止：3% > 1%。候補への経路をv1へ戻す。",
              );
      field(root, "[data-decision]").textContent = decision;
      field(root, "[data-traffic]").textContent =
        step === 2 && !empty.checked
          ? t(
              "v1: all traffic · v2: 0%",
              "v1: 전체 트래픽 · v2: 0%",
              "v1：全トラフィック · v2：0%",
            )
          : t(
              "v1: control · v2: limited exposure; no expansion",
              "v1: 대조군 · v2: 제한 노출, 확대 없음",
              "v1：対照群 · v2：限定公開、拡大なし",
            );
      root.dataset.decision =
        step < 2 ? "waiting" : empty.checked ? "unknown" : "stop";
      field(root, "[data-current]").textContent =
        step === 2
          ? decision
          : field(root, `[data-stage="${step}"]`).textContent!.trim();
    };
    next.addEventListener("click", () => {
      step = Math.min(2, step + 1);
      update();
      say(field(root, "[data-current]").textContent!);
    });
    prev.addEventListener("click", () => {
      step = Math.max(0, step - 1);
      update();
      say(field(root, "[data-current]").textContent!);
    });
    empty.addEventListener("change", () => {
      step = 0;
      update();
      say(
        t(
          "Sample window changed. Evaluate again.",
          "표본 변경. 다시 평가하세요.",
          "標本を変更しました。再評価してください。",
        ),
      );
    });
    const reset = () => {
      step = 0;
      empty.checked = false;
      update();
    };
    reset();
    return reset;
  });
}
