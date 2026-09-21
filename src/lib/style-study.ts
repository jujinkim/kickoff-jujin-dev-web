import type { Lang } from "./i18n";
export const styleIds: string[] = [
  "brutalism",
  "neobrutalism",
  "glassmorphism",
  "neumorphism",
  "skeuomorphism",
  "flat-design",
  "minimalism",
];
export const studyWords = {
  en: {
    heading: "Illustrative example",
    baseline: "Neutral reference",
    variant: "Style variant",
    title: "Field notes",
    summary: "Three ways to save an article",
    time: "5 min",
    save: "Save",
    saved: "Saved",
    unsaved: "Not saved",
    reset: "Reset",
    mode: "Example condition",
    states: "State reference (static)",
    normal: "Default",
    focus: "Focus",
    tokens: "Changed tokens — example choices, not style rules",
    local:
      "Save changes this example only. Reset or reload clears it. Both cards share the same saved state.",
    nojs: "Static examples and descriptions remain available without JavaScript; interactive controls require JavaScript.",
    rejected: "Rejected example: the task loses its action cue or control.",
    badge: "Decoration",
    duplicate: "Duplicate action",
    input: "Input: title, summary, reading time and Save.",
    initial: "Initial state: both cards are not saved.",
    action:
      "Action: compare the surfaces, choose a condition if available, then activate Save.",
    result:
      "Result: both cards say Saved; keyboard focus stays on the control. Reset restores the initial condition.",
    conditions: {
      simple: "Simple background",
      complex: "Complex background",
      opaque: "Opaque fallback",
      raised: "Raised surface",
      inset: "Inset surface",
      shadowless: "No shadows",
      retained: "Retain action cues",
      failure: "Rejected: remove action cues",
      reduced: "Remove redundancy",
      missing: "Rejected: remove Save",
    },
  },
  ko: {
    heading: "가상 예제",
    baseline: "중립 기준",
    variant: "스타일 변형",
    title: "현장 노트",
    summary: "글을 저장하는 세 가지 방법",
    time: "5분",
    save: "저장",
    saved: "저장됨",
    unsaved: "저장 안 됨",
    reset: "초기화",
    mode: "예제 조건",
    states: "상태 참고 (정적)",
    normal: "기본",
    focus: "포커스",
    tokens: "변경 값 — 스타일 규칙이 아닌 예제 선택",
    local:
      "저장은 이 예제에서만 적용됩니다. 초기화하거나 새로고침하면 해제됩니다. 두 카드는 같은 저장 상태를 공유합니다.",
    nojs: "JavaScript 없이도 정적 예제와 설명을 읽을 수 있습니다. 조작에는 JavaScript가 필요합니다.",
    rejected: "실패 예: 행동 단서나 조작 요소를 제거했습니다.",
    badge: "장식",
    duplicate: "중복 동작",
    input: "입력: 제목, 요약, 읽기 시간, 저장 버튼.",
    initial: "초기 상태: 두 카드 모두 저장되지 않았습니다.",
    action: "동작: 표면을 비교하고 선택 가능한 조건을 바꾼 뒤 저장을 누릅니다.",
    result:
      "결과: 두 카드에 저장됨이 표시되며 키보드 포커스는 조작한 요소에 남습니다. 초기화하면 처음 조건으로 돌아갑니다.",
    conditions: {
      simple: "단순 배경",
      complex: "복잡한 배경",
      opaque: "불투명 대체 모드",
      raised: "돌출 표면",
      inset: "함몰 표면",
      shadowless: "그림자 제거",
      retained: "행동 단서 유지",
      failure: "실패: 행동 단서 제거",
      reduced: "중복 제거",
      missing: "실패: 저장 제거",
    },
  },
  ja: {
    heading: "架空の例",
    baseline: "中立な基準",
    variant: "スタイルの変形",
    title: "フィールドノート",
    summary: "記事を保存する3つの方法",
    time: "5分",
    save: "保存",
    saved: "保存済み",
    unsaved: "未保存",
    reset: "リセット",
    mode: "例の条件",
    states: "状態の見本（静的）",
    normal: "通常",
    focus: "フォーカス",
    tokens: "変更値 — スタイルの規則ではなく、この例の選択",
    local:
      "保存はこの例だけに適用されます。リセットまたは再読み込みで解除されます。両カードは同じ保存状態を共有します。",
    nojs: "JavaScriptなしでも静的な例と説明を読めます。操作にはJavaScriptが必要です。",
    rejected: "不採用例：操作の手がかりや操作要素を削除しています。",
    badge: "装飾",
    duplicate: "重複する操作",
    input: "入力：タイトル、要約、読書時間、保存ボタン。",
    initial: "初期状態：両カードとも未保存です。",
    action: "操作：表面を比べ、選べる条件を切り替えてから保存します。",
    result:
      "結果：両カードに保存済みと表示され、キーボードフォーカスは操作した要素に残ります。リセットすると初期条件に戻ります。",
    conditions: {
      simple: "単純な背景",
      complex: "複雑な背景",
      opaque: "不透明な代替表示",
      raised: "隆起した表面",
      inset: "くぼんだ表面",
      shadowless: "影なし",
      retained: "操作の手がかりを維持",
      failure: "不採用：手がかりを削除",
      reduced: "重複を削除",
      missing: "不採用：保存を削除",
    },
  },
} as const;
type Study = { caption: string; description: string; tokens: string };
export const studies: Record<Lang, Record<string, Study>> = {
  en: {
    brutalism: {
      caption: "Raw surface, unchanged task.",
      description:
        "A straight border exposes the frame. The underlined title links to the explanation below; the plain heading follows the same reading order. Save remains a native outlined button. No hard offset shadow is added.",
      tokens: "border: 1px; radius: 0; title: underlined; shadow: none",
    },
    neobrutalism: {
      caption: "Graphic emphasis changes; action stays.",
      description:
        "A 3px outline and a hard shadow offset 4px right and down frame the same card. The accent belongs to Save. These dimensions are authored choices. The dashed focus outline remains distinct from the solid border in grayscale.",
      tokens: "border: 3px; shadow: 4px 4px 0; accent: Save",
    },
    glassmorphism: {
      caption: "Background changes affect readability.",
      description:
        "The simple background becomes patterned in complex mode. An 88% white surface and 12px backdrop blur sit behind fully opaque text. Opaque mode uses a solid surface with no blur. Blur affects the background, never the letters; verify each actual background.",
      tokens:
        "surface: white 88%; backdrop-filter: blur(12px); text opacity: 1; fallback: white 100%",
    },
    neumorphism: {
      caption: "Shadows describe surface; labels describe state.",
      description:
        "Light comes from the upper left: a light shadow sits at −6px and a dark shadow at +6px, both blurred 12px. Inset reverses the apparent depth. No-shadows mode removes both. The 2px control outline and Saved text survive every mode; depth does not encode saved state.",
      tokens:
        "shadows: −6px −6px 12px / 6px 6px 12px; inset: optional; Save border: 2px",
    },
    skeuomorphism: {
      caption: "Bookmark metaphor supports the Save label.",
      description:
        "The warm paper frame and bookmark silhouette refer to physical reading. Saving adds a check mark to the bookmark and changes Save to Saved. No drag gesture or realistic texture is required, and the words explain the action even when the metaphor is unfamiliar.",
      tokens:
        "surface: paper tone; marker: bookmark shape; label: Save → Saved; texture: none",
    },
    "flat-design": {
      caption: "Removing depth still requires action cues.",
      description:
        "The reference has a glossy gradient and shadow. The variant removes both but keeps a 2px Save boundary. The rejected mode removes that boundary so Save resembles ordinary text. That rejected label is a non-interactive illustration; restore the retained-cues condition to operate Save.",
      tokens: "gradient: none; shadow: none; Save border: 2px (rejected: 0)",
    },
    minimalism: {
      caption: "Reduce redundancy, preserve the task.",
      description:
        "The reference adds two decorative badges and a duplicate Save button. The variant removes these three redundant items while retaining title, summary, reading time and original Save. The rejected mode also removes the original Save: the variant can no longer perform the task. Reset or change the condition to restore it.",
      tokens:
        "remove: 2 decorative badges + 1 duplicate Save; retain: all unique information + original Save",
    },
  },
  ko: {
    brutalism: {
      caption: "표면은 투박하게, 과업은 그대로.",
      description:
        "직선 테두리가 구조를 드러냅니다. 밑줄 친 제목은 아래 설명으로 연결되고 단순한 제목은 읽기 순서를 유지합니다. 저장은 테두리가 있는 네이티브 버튼입니다. 단단한 오프셋 그림자는 추가하지 않습니다.",
      tokens: "테두리: 1px; 모서리: 0; 제목: 밑줄; 그림자: 없음",
    },
    neobrutalism: {
      caption: "그래픽 강조가 바뀌어도 행동은 유지됩니다.",
      description:
        "3px 외곽선과 오른쪽·아래쪽 4px의 단단한 그림자가 같은 카드를 감쌉니다. 강조색은 저장에 적용합니다. 수치는 예제를 위한 선택입니다. 점선 포커스는 회색조에서도 실선 테두리와 구별됩니다.",
      tokens: "테두리: 3px; 그림자: 4px 4px 0; 강조: 저장",
    },
    glassmorphism: {
      caption: "배경 변화는 가독성에 영향을 줍니다.",
      description:
        "단순 배경을 복잡한 무늬로 바꿀 수 있습니다. 88% 흰색 표면과 12px 배경 흐림 뒤에 배경이 있고 글자는 완전히 불투명합니다. 불투명 모드는 흐림 없는 단색 표면입니다. 글자가 아닌 배경만 흐리며 실제 배경마다 확인해야 합니다.",
      tokens:
        "표면: 흰색 88%; 배경 흐림: 12px; 글자 불투명도: 1; 대체 표면: 흰색 100%",
    },
    neumorphism: {
      caption: "그림자는 표면을, 문구는 상태를 설명합니다.",
      description:
        "왼쪽 위에서 빛이 들어옵니다. 밝은 그림자는 −6px, 어두운 그림자는 +6px이며 흐림은 각각 12px입니다. 함몰 모드는 깊이를 뒤집고 그림자 제거 모드는 둘 다 없앱니다. 2px 버튼 테두리와 저장됨 문구는 모든 모드에서 유지됩니다. 깊이는 저장 상태를 뜻하지 않습니다.",
      tokens:
        "그림자: −6px −6px 12px / 6px 6px 12px; 함몰: 선택; 저장 테두리: 2px",
    },
    skeuomorphism: {
      caption: "책갈피 은유는 저장 문구를 보조합니다.",
      description:
        "따뜻한 종이색과 책갈피 모양은 실제 독서를 참조합니다. 저장하면 책갈피에 체크 표시가 생기고 저장 문구가 저장됨으로 바뀝니다. 끌기 동작이나 사실적인 질감은 필요 없습니다. 은유를 몰라도 문구로 행동을 이해할 수 있습니다.",
      tokens:
        "표면: 종이색; 표시: 책갈피 모양; 문구: 저장 → 저장됨; 질감: 없음",
    },
    "flat-design": {
      caption: "깊이를 없애도 행동 단서는 필요합니다.",
      description:
        "기준에는 광택 그라데이션과 그림자가 있습니다. 변형은 둘을 없애고 2px 저장 테두리를 유지합니다. 실패 모드는 테두리를 없애 저장을 일반 텍스트처럼 보이게 합니다. 실패 문구는 조작할 수 없는 설명용 예시입니다. 행동 단서 유지 조건으로 돌아가면 저장을 사용할 수 있습니다.",
      tokens: "그라데이션: 없음; 그림자: 없음; 저장 테두리: 2px (실패: 0)",
    },
    minimalism: {
      caption: "중복을 줄이고 과업을 보존합니다.",
      description:
        "기준에는 장식 배지 두 개와 중복 저장 버튼이 있습니다. 변형은 이 세 항목만 없애고 제목, 요약, 읽기 시간, 원래 저장을 유지합니다. 실패 모드는 원래 저장까지 없애 변형 카드에서 과업을 수행할 수 없습니다. 초기화하거나 조건을 바꾸면 복원됩니다.",
      tokens:
        "제거: 장식 배지 2개 + 중복 저장 1개; 유지: 고유 정보 전체 + 원래 저장",
    },
  },
  ja: {
    brutalism: {
      caption: "無骨な表面でも、課題は変わりません。",
      description:
        "直線の枠が構造を示します。下線付きタイトルは下の説明へリンクし、簡素な見出しは読む順序を保ちます。保存は枠付きのネイティブボタンです。硬いオフセット影は加えません。",
      tokens: "枠: 1px; 角丸: 0; タイトル: 下線; 影: なし",
    },
    neobrutalism: {
      caption: "図形的な強調が変わっても、操作は維持します。",
      description:
        "3pxの枠と右・下へ4pxずらした硬い影が同じカードを囲みます。アクセントは保存に使います。寸法はこの例の選択です。破線のフォーカスはグレースケールでも実線の枠と区別できます。",
      tokens: "枠: 3px; 影: 4px 4px 0; アクセント: 保存",
    },
    glassmorphism: {
      caption: "背景の変化は読みやすさに影響します。",
      description:
        "単純な背景を複雑な模様へ切り替えます。88%の白い表面と12pxの背景ぼかしの上に、完全に不透明な文字を置きます。不透明モードではぼかしのない単色面になります。ぼかすのは背景だけで、文字ではありません。実際の背景ごとに確認します。",
      tokens: "表面: 白88%; 背景ぼかし: 12px; 文字の不透明度: 1; 代替: 白100%",
    },
    neumorphism: {
      caption: "影は表面を、ラベルは状態を説明します。",
      description:
        "光は左上から来ます。明るい影は−6px、暗い影は+6pxで、ぼかしは両方12pxです。くぼみモードは深さを反転し、影なしモードは両方を除きます。2pxのボタン枠と保存済みの文字は常に残ります。深さは保存状態を表しません。",
      tokens:
        "影: −6px −6px 12px / 6px 6px 12px; くぼみ: 選択可能; 保存の枠: 2px",
    },
    skeuomorphism: {
      caption: "しおりの比喩は保存ラベルを補助します。",
      description:
        "温かい紙色としおりの形が物理的な読書を参照します。保存するとしおりにチェックが付き、保存が保存済みに変わります。ドラッグや写実的な質感は不要です。比喩を知らなくても文字で操作を理解できます。",
      tokens: "表面: 紙色; 目印: しおり形; ラベル: 保存 → 保存済み; 質感: なし",
    },
    "flat-design": {
      caption: "深さをなくしても、操作の手がかりは必要です。",
      description:
        "基準には光沢のグラデーションと影があります。変形では両方を除き、2pxの保存枠を残します。不採用モードは枠を消し、保存を普通の文字のように見せます。不採用の文字は操作できない説明用の例です。手がかりを維持する条件に戻すと保存できます。",
      tokens: "グラデーション: なし; 影: なし; 保存の枠: 2px（不採用: 0）",
    },
    minimalism: {
      caption: "重複を減らし、課題を保ちます。",
      description:
        "基準には装飾バッジ2個と重複する保存ボタンがあります。変形ではその3項目を除き、タイトル、要約、読書時間、元の保存を残します。不採用モードは元の保存も除くため、変形カードでは課題を実行できません。リセットまたは条件変更で戻せます。",
      tokens:
        "削除: 装飾バッジ2個 + 重複する保存1個; 維持: 固有情報すべて + 元の保存",
    },
  },
};
