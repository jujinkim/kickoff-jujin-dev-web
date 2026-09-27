---
articleId: neumorphism
lang: ja
sourceRevision: 11
sources:
  - title: "Hype4: Shadows and Blurs"
    url: "https://hype4.academy/articles/design/ui-design-shapes-objects-basics-shadows-and-blurs"
    claim: 影の技法と柔らかな立体面を説明しています。光の方向を普遍的な定義とするものではありません。
    checked: "2026-09-27"
  - title: WCAG 2.2
    url: "https://www.w3.org/TR/WCAG22/"
    claim: キーボード・フォーカス・リフロー・コントラストの要件。見た目だけで適合を証明するものではありません。
    checked: "2026-09-27"
  - title: "W3C: CSS backgrounds and borders"
    url: "https://www.w3.org/TR/css-backgrounds-3/#box-shadow"
    claim: 外側・内側の影を定義し、この例の光の方向は表現上の選択です。
    checked: "2026-09-27"
---

## 選択・比較

小さく落ち着いた操作面に柔らかな奥行きを与えるときに使います。スキューモーフィズムは身近な物を広く借り、フラットデザインはこの奥行きを省きます。質感を状態ラベルの代わりにしません。

## 応用例

タイマーは浮いた文字盤と押された有効ボタンを持ちます。見た目と操作の例で、運動や健康の助言ではありません。短いローカル計測で開始・停止・再開を示し、記録は保存しません。

## 実装の参考・注意点

各呼び出しが正確な時刻に動くと仮定せず、終了時刻から残り時間を求めます。開始の連打でタイマーを増やさないようにします。影を除いても状態・押下状態・フォーカス・強制カラーの境界を残します。
