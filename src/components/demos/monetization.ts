import type { Lang } from "../../lib/i18n";
import { local } from "./shared";
export function moneyText(lang: Lang, id: string) {
  const t = local(lang);
  const scenes: Record<string, string> = {
    "direct-payment": t("Neighborhood newspaper", "동네 신문", "地域の新聞"),
    advertising: t("Cooking blog", "요리 블로그", "料理ブログ"),
    sponsorship: t(
      "Community garden guide",
      "동네 정원 안내",
      "地域の庭ガイド",
    ),
    "affiliate-marketing": t(
      "Hiking book guide",
      "등산 책 안내",
      "登山本ガイド",
    ),
    "transaction-fees": t("Craft marketplace", "수공예 장터", "手作り品の市場"),
    "one-time-payment": t(
      "Slide exporter",
      "슬라이드 내보내기 도구",
      "スライド出力ツール",
    ),
    subscription: t(
      "Family photo backup",
      "가족 사진 백업",
      "家族写真のバックアップ",
    ),
    "usage-based": t(
      "Map image exporter",
      "지도 이미지 내보내기 도구",
      "地図画像の出力ツール",
    ),
    "prepaid-credits": t(
      "Classroom poster exporter",
      "교실 포스터 내보내기 도구",
      "教室ポスターの出力ツール",
    ),
    "direct-seller": t(
      "Language lesson license",
      "언어 학습 이용권",
      "語学学習の利用権",
    ),
    "merchant-of-record": t(
      "Music practice license",
      "음악 연습 이용권",
      "音楽練習の利用権",
    ),
    "flat-rate-pricing": t("Meal planner", "식단 계획 도구", "献立作成ツール"),
    "per-seat-pricing": t(
      "Clinic scheduler",
      "진료 일정 도구",
      "診察予定ツール",
    ),
    "feature-tiered-pricing": t(
      "Photo editor",
      "사진 편집기",
      "写真編集ツール",
    ),
    "volume-pricing": t(
      "Print shop design tool",
      "인쇄소 디자인 도구",
      "印刷店のデザインツール",
    ),
    "graduated-pricing": t(
      "Worksheet maker",
      "학습지 제작 도구",
      "教材作成ツール",
    ),
    "base-plus-overage": t(
      "Podcast transcript tool",
      "팟캐스트 전사 도구",
      "ポッドキャスト文字起こしツール",
    ),
    freemium: t("Personal notebook", "개인 노트", "個人ノート"),
    "free-trial": t("Team planner", "팀 계획 도구", "チーム計画ツール"),
    "consumable-purchase": t(
      "Crossword app",
      "낱말 퍼즐 앱",
      "クロスワードアプリ",
    ),
    "non-consumable-purchase": t(
      "Night puzzle app",
      "야간 퍼즐 앱",
      "夜のパズルアプリ",
    ),
    "banner-ads": t("Number puzzle app", "숫자 퍼즐 앱", "数字パズルアプリ"),
    "interstitial-ads": t(
      "Level puzzle app",
      "단계형 퍼즐 앱",
      "ステージ型パズルアプリ",
    ),
    "rewarded-ads": t("Language quiz app", "언어 퀴즈 앱", "語学クイズアプリ"),
  };
  const scene = scenes[id];
  return {
    reset: t("Reset", "초기화", "リセット"),
    resetMessage: t(
      "Initial state restored.",
      "처음 상태로 돌아왔습니다.",
      "初期状態に戻りました。",
    ),
    fiction: `${scene} · ${t("illustrative example", "가상 예시", "架空の例")}`,
    omitted: t(
      "Fictional amounts. Taxes, fees and refunds omitted.",
      "가상 금액입니다. 세금·수수료·환불은 생략했습니다.",
      "架空の金額です。税金・手数料・返金は省略しています。",
    ),
    total: t("Total", "합계", "合計"),
    month: t("Month", "월", "月"),
    exports: t("Exports", "내보내기", "出力"),
    seats: t("Licensed seats", "이용 좌석", "利用席数"),
    baseline: `${scene} · ${t("3 seats · 120 exports/month", "3좌석 · 월 120회 내보내기", "3席 · 月120回の出力")}`,
    billing: `${scene} · ${t("first three months: 100 / 300 / 600 exports", "초기 3개월: 100 / 300 / 600회 내보내기", "最初の3か月: 100 / 300 / 600回の出力")}`,
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
    puzzle: scene,
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
