import type { Lang } from "../../lib/i18n";
import { local } from "./shared";

// Shared scenario and vocabulary only. Each diagram owns its composition.
export function boundariesText(lang: Lang) {
  const t = local(lang);
  return {
    fiction: t(
      "Illustrative example",
      "설명을 위한 가상 예시",
      "説明用の架空の例",
    ),
    fixture: t(
      "R1 · A17 · initially unsaved",
      "R1 · A17 · 처음에는 미저장",
      "R1 · A17 · 最初は未保存",
    ),
    process: t(
      "One process · dotted enclosure",
      "단일 프로세스 · 점선 테두리",
      "単一プロセス · 点線の囲み",
    ),
    imports: t("Source dependency", "소스 의존성", "ソースの依存"),
    calls: t("Runtime call", "실행 중 호출", "実行時の呼び出し"),
    memory: t("Memory", "메모리", "メモリ"),
    database: t(
      "Embedded database",
      "내장 데이터베이스",
      "組み込みデータベース",
    ),
    outcome: t(
      "Save → repeat: 0 → 1 → 1 entries; return Saved.",
      "저장 → 반복: 0 → 1 → 1건. 저장 완료 반환.",
      "保存 → 繰り返し：0 → 1 → 1件。保存完了を返す。",
    ),
    failure: t(
      "From empty: empty IDs or failure before writing → 0. Retry after correction.",
      "빈 저장소에서: 빈 ID나 쓰기 전 실패 → 0건. 문제 수정 후 재시도.",
      "空の保存先から：空のIDや書き込み前の失敗 → 0件。修正後に再試行。",
    ),
    alternatives: t(
      "HTTP / CLI and memory / embedded database are alternatives; no data migration is implied.",
      "HTTP·CLI와 메모리·내장 데이터베이스는 대안입니다. 데이터 이전을 뜻하지 않습니다.",
      "HTTP・CLIとメモリ・組み込みデータベースは代替案です。データ移行を意味しません。",
    ),
  };
}
