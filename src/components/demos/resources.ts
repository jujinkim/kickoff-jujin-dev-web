import type { Lang } from "../../lib/i18n";
import { local } from "./shared";
export function resourceScene(lang: Lang, id: string) {
  const t = local(lang);
  const scenes: Record<string, { title: string; goal: string }> = {
    "single-column": {
      title: t(
        "Trail guide references",
        "산책로 안내 참고 자료",
        "散歩道ガイドの参考資料",
      ),
      goal: t(
        "Browse six visual references while designing a walking route guide.",
        "산책로 안내를 만들며 시각 자료 여섯 개를 살핍니다.",
        "散歩道ガイドを作りながら六つの視覚資料を見ます。",
      ),
    },
    "two-columns": {
      title: t(
        "Recipe index references",
        "요리법 목록 참고 자료",
        "レシピ一覧の参考資料",
      ),
      goal: t(
        "Keep filters beside visual references for a recipe index.",
        "요리법 목록 참고 자료 옆에 필터를 둡니다.",
        "レシピ一覧の参考資料の横に絞り込みを置きます。",
      ),
    },
    "multiple-columns": {
      title: t(
        "Museum guide references",
        "박물관 안내 참고 자료",
        "博物館ガイドの参考資料",
      ),
      goal: t(
        "See navigation, visual references, and notes together.",
        "탐색·시각 자료·메모를 함께 봅니다.",
        "案内・視覚資料・メモを一緒に見ます。",
      ),
    },
    "list-layout": {
      title: t(
        "Library search references",
        "도서관 검색 참고 자료",
        "図書館検索の参考資料",
      ),
      goal: t(
        "Compare reference titles and details line by line.",
        "참고 자료 제목과 설명을 줄마다 비교합니다.",
        "参考資料の題名と詳細を行ごとに比べます。",
      ),
    },
    "uniform-grid": {
      title: t(
        "Plant catalog references",
        "식물 목록 참고 자료",
        "植物カタログの参考資料",
      ),
      goal: t(
        "Compare equally sized visual references for a plant catalog.",
        "식물 목록에 쓸 같은 크기의 시각 자료를 비교합니다.",
        "植物カタログ用の同じ大きさの視覚資料を比べます。",
      ),
    },
    masonry: {
      title: t(
        "Travel album references",
        "여행 앨범 참고 자료",
        "旅のアルバムの参考資料",
      ),
      goal: t(
        "Keep visual references at their varied natural heights.",
        "서로 다른 높이의 시각 자료를 그대로 둡니다.",
        "高さの異なる視覚資料をそのまま並べます。",
      ),
    },
  };
  return scenes[id];
}
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
