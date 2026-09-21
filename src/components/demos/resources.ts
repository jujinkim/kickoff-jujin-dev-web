import type { Lang } from "../../lib/i18n";
import { local } from "./shared";
export function resources(lang: Lang) {
  const t = local(lang);
  return [
    [
      "color",
      "◒",
      t("Color atlas", "색 지도", "色の地図"),
      t(
        "A palette collected on a city walk.",
        "도시 산책에서 모은 색상표입니다.",
        "街歩きで集めた配色です。",
      ),
    ],
    [
      "form",
      "▤",
      t("Paper forms", "종이 형태", "紙のかたち"),
      t(
        "Folded paper explores volume and shadow. Compare the edges in morning and evening light.",
        "접은 종이로 부피와 그림자를 살핍니다. 아침과 저녁 빛에서 가장자리를 비교합니다.",
        "折った紙で体積と影を探ります。朝と夕方の光で縁を比べます。",
      ),
    ],
    [
      "form",
      "▦",
      t("City rhythm", "도시 리듬", "街のリズム"),
      t(
        "Windows repeat across a street.",
        "거리를 따라 창문이 반복됩니다.",
        "通りに沿って窓が繰り返されます。",
      ),
    ],
    [
      "form",
      "◭",
      t("Quiet geometry", "고요한 기하", "静かな幾何"),
      t(
        "Simple shapes leave room for space. A circle, a triangle, and a line share one page.",
        "단순한 형태 사이에 여백을 둡니다. 원, 삼각형, 선이 한 페이지를 나눕니다.",
        "単純な形の間に余白を残します。円、三角形、線が一枚の紙を分け合います。",
      ),
    ],
    [
      "type",
      "Aa",
      t("Letter studies", "글자 연구", "文字の研究"),
      t(
        "Compare letters, counters, and spacing.",
        "글자 형태, 내부 공간, 간격을 비교합니다.",
        "文字の形、内側の空間、間隔を比べます。",
      ),
    ],
    [
      "color",
      "◐",
      t("Light archive", "빛 기록", "光の記録"),
      t(
        "Warm and cool light change the same surface. Keep notes beside each observation for the next study.",
        "따뜻한 빛과 차가운 빛이 같은 표면을 바꿉니다. 다음 연구를 위해 관찰 옆에 기록을 남깁니다.",
        "暖色と寒色の光が同じ表面を変えます。次の研究のため観察の横に記録を残します。",
      ),
    ],
  ].map(([topic, symbol, title, description], index) => ({
    id: index,
    topic,
    symbol,
    title,
    description,
  }));
}
