---
articleId: glassmorphism
lang: ja
sourceRevision: 13
sources:
  - title: Glassmorphism in user interfaces
    url: "https://hype4.academy/articles/design/glassmorphism-in-user-interfaces"
    claim: 命名者のスタイル原資料です。公開プレビューのみを確認し、技術・アクセシビリティ要件ではなく出典の来歴に用います。
    checked: "2026-09-27"
  - title: "Apple: Meet Liquid Glass"
    url: "https://developer.apple.com/videos/play/wwdc2025/219/"
    claim: Appleの適応型操作素材と屈折を説明します。別のWeb例は近似模型です。
    checked: "2026-09-27"
  - title: Filter Effects Level 2
    url: "https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty"
    claim: backdrop-filterの描画を定義する草案で、視覚スタイルの定義ではありません。
    checked: "2026-09-26"
  - title: "NN/g: Glassmorphism"
    url: "https://www.nngroup.com/articles/glassmorphism/"
    claim: 視覚的特徴と読みやすさの問題を説明します。散歩ルートは独自の作例です。
    checked: "2026-09-26"
  - title: "MDN: backdrop-filter"
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter"
    claim: ブラウザー互換性の参考資料です。対象ブラウザーを確認し、代替表示を保ちます。
    checked: "2026-09-26"
  - title: "WCAG 2.2: Contrast (Minimum)"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
    claim: 最終表示の背景に対して文字のコントラストを確認する基準です。
    checked: "2026-09-26"
---

## 選択・比較

場所・作品・写真のように背景が有用な文脈を持つ場合に半透明パネルが向きます。背景の文脈、手前の作業、読める操作部という単純な階層を保ちます。密なフォームや背景を予測しにくいダッシュボードでは不透明な面から検討します。Liquid Glassは特定プラットフォームと関わる別の素材研究で、同じ仕様ではありません。

## 応用例

経路を選ぶと湖の景色を残したまま距離と時間が変わります。写真ビューアーの短い説明にも同じ関係を使えます。学ぶのは前景と背景の関係であり、角丸の半径、光の方向、作業の件数ではありません。半透明の層を重ねすぎると、操作できるものを見分けにくくなります。

## 実装の参考・注意点

半透明の背景と `backdrop-filter: blur(10px) saturate(1.35)` を併用します。背後の内容に作用し、要素自体をぼかす `filter: blur(...)` とは異なります。読める不透明色を基本にし、対応環境で効果を加えます。作例は不透明切り替え、未対応時の代替、透明度低減への対応を備えます。合成結果のコントラスト、キーボードのフォーカス、動きの低減を確認します。ブラウザー対応だけではアクセシビリティを証明できません。

ここでは広いすりガラスの情報パネルと、操作に合わせて広がる小さなレンズの違いを強調します。グラスモーフィズムは一般的な視覚表現で、アニメーションも可能です。単なる静止と動きの差ではありません。Webのレンズは選択画像の複製を変位させ、縁に反射光を加えます。Appleのネイティブ素材・自動色調適応・物理光学シミュレーションは再現しません。
