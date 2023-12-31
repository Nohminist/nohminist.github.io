---
layout: post
title:  "スイメド便利ツールでできること"
date:   2023-12-30 00:00:00 +0900
categories: [category-sweethomemaid]
image: /assets/images/sweethomemaid.png
---

スイメド便利ツールは、『スイートホームメイド』のカードを効率的に管理し、性能を比較できるツールです。デッキ構築や限界突破を検討する際に役立てるように作っています。

ゲーム内の絞り込み機能からより詳しくソート・フィルターできるようにしています。

カードの内容は標準で簡易表示にしており、クリックすると詳細が表示されます。

- ツールはデータを一覧表示し、操作は直感的で簡単です。
- ボタン操作による絞り込みが可能で、即時反映されます。
- 設定はローカルストレージに保存されるため、再アクセス時も以前の設定が維持されます。
- Reactで構築されているため、ページ全体の読み込みが不要でスムーズな操作感を提供します。




**目次**
- [入手手段](#入手手段)
- [スキル](#スキル)
  - [スキル補足](#スキル補足)
  - [スキルコスト](#スキルコスト)
- [アビリティ](#アビリティ)
  - [アビリティ補足](#アビリティ補足)


## 入手手段



各カードの入手手段で絞り込めます。これにより、どのカードがどの手段で入手可能かを一目で確認できます。

- 恒常ガチャ
  - プレミアムガチャなどの常設されているガチャ
- 限定ガチャ
  - イベント限定ガチャ、セレクションガチャ
  - ガチャが終了してもプレミアムガチャに追加されない
- パス
  - シーズン毎のプレミアムパス報酬
  - 期間が終了するとマイレージ交換所で入手可能
- リフォーム
  - リフォームイベント報酬
  - 期間終了後、イベントアーカイブでも入手可能
- ランキング
  - オーナーズフェスティバルイベント報酬
  - 期間終了後も入手手段はあると説明があったはず
- 配布
  - 初期配布、メインクエスト報酬

ゲームをどのタイミングで初めても限定ガチャ以外のカードは入手可能状態にある、ということになります。

## スキル

以下項目から絞り込めます。クリエイト系、ファスト系は、該当するブースターが含まれるスキル全てが表示されます。

- クリエイト系: スペシャル、ボム、ロケット、ミサイル
- ファスト系: スペシャル、ボム、ロケット
- ピースチェンジ
- ピースブレイク
- スキルゲージアップ系

### スキル補足

- スペシャル系クリエイト 
  - スペシャルとスペシャルのミックスは、盤面の全てのピースやギミックが対象なので最強
  - スペシャルと他ブースターのミックスも、盤面全体を巻き込みやすいので有用
  - 単体で使っても連鎖を起こしやすくなり、ブースターを生成しやすい
- ファスト系 
  - 発動場所を指定できるため、特定のギミックを狙い撃ちしたい場合などに有用
  - 時間制限のあるステージの場合、時間が止まるため休める
- ピースチェンジ
  - ブースターも入れ替えることができ、ブースターミックスを作りやすくなる
- スキルゲージアップ系

### スキルコスト

- スキルごとにコストが設定されており、カードレアリティ★3なら-5、★4なら-10されている
- アビリティの「スキルコスト○減少」の効果は反映済み

ゲーム内ではスキルによる絞り込みができないため、スキルコストのソートと組み合わせて目当てのスキルを持つカードを探しやすいと思います。




## アビリティ

各ギミックに対するキラー、それ以外のアビリティから絞り込めます。

- 各ギミックに対するキラー
  - ダンボール、ピーナッツ、ネズミ、薪、鎖、プレゼント箱、ゼリー、ワイン、ボタン、みかん箱、蜘蛛の巣、泡、氷、3Dプリンター
- スキルコスト減少
- 他カードスキル使用時スキルゲージ増加
- 初期スキルゲージ増加
- 手数アップ
- Wave手数回復

### アビリティ補足

- 各ギミックに対するキラー+2
  - 効果の数値はデッキで最大のものが適用されるため優位性が高い
- 他カードスキル使用時スキルゲージ増加
  - ステージにカードの色が無くてもスキルを使える
- スキルコスト減少、初期スキルゲージ増加
  - カードによっては初手でスキルが使える
- 手数1アップ
  - 時間制限のあるステージでは5秒増える


