import type { Lang } from "../../lib/i18n";
import { local } from "./shared";
export function moneyText(lang: Lang) {
  const t = local(lang);
  return {
    reset: t("Reset", "초기화", "リセット"),
    resetMessage: t(
      "Initial state restored.",
      "처음 상태로 돌아왔습니다.",
      "初期状態に戻りました。",
    ),
    fiction: t("Illustrative example", "가상 예시", "架空の例"),
    omitted: t(
      "Fictional amounts. Taxes, fees and refunds omitted.",
      "가상 금액입니다. 세금·수수료·환불은 생략했습니다.",
      "架空の金額です。税金・手数料・返金は省略しています。",
    ),
    total: t("Total", "합계", "合計"),
    month: t("Month", "월", "月"),
    exports: t("Exports", "내보내기", "出力"),
    seats: t("Licensed seats", "이용 좌석", "利用席数"),
    baseline: t(
      "Initial workspace · 3 seats · 120 exports/month",
      "초기 작업 공간 · 3좌석 · 월 120회 내보내기",
      "初期の作業スペース · 3席 · 月120回の出力",
    ),
    billing: t(
      "Export tool · initial three months: 100 / 300 / 600 exports",
      "내보내기 도구 · 초기 3개월: 100 / 300 / 600회",
      "出力ツール · 初期の3か月: 100 / 300 / 600回",
    ),
    access: t("Access", "접근", "アクセス"),
    available: t("Available", "이용 가능", "利用可能"),
    locked: t("Locked", "잠김", "ロック中"),
    paid: t("Paid", "유료", "有料"),
    free: t("Free", "무료", "無料"),
    day: t("Day", "일", "日"),
    nextDay: t("Advance one day", "하루 진행", "1日進める"),
    edit: t("Edit a note", "노트 편집", "ノートを編集"),
    export: t("Export PDF", "PDF 내보내기", "PDF出力"),
    upgrade: t(
      "Choose paid access (simulated)",
      "유료 이용 선택 (가상)",
      "有料利用を選ぶ（仮）",
    ),
    success: t(
      "Action completed.",
      "동작을 완료했습니다.",
      "操作が完了しました。",
    ),
    blocked: t(
      "Unavailable in the current state.",
      "현재 상태에서는 이용할 수 없습니다.",
      "現在の状態では利用できません。",
    ),
    invalid: t(
      "Enter a whole number from 0 to 10,000.",
      "0~10,000 사이 정수를 입력하세요.",
      "0〜10,000の整数を入力してください。",
    ),
    balance: t("Balance", "잔액", "残高"),
    hints: t("Hints", "힌트", "ヒント"),
    puzzle: t("Puzzle app", "퍼즐 앱", "パズルアプリ"),
    purchases: t("Purchases", "구매 횟수", "購入回数"),
    useHint: t("Use one hint", "힌트 1개 사용", "ヒントを1個使う"),
    none: t("None", "없음", "なし"),
  };
}
export const moneyField = <T extends Element = HTMLElement>(
  root: HTMLElement,
  selector: string,
) => root.querySelector<T>(selector)!;
export function readQuantity(input: HTMLInputElement): number | null {
  const value = input.valueAsNumber;
  const valid = Number.isInteger(value) && value >= 0 && value <= 10000;
  input.setAttribute("aria-invalid", String(!valid));
  return valid ? value : null;
}
