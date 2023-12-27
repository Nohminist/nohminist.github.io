---
layout: post
title:  "レスレリ攻略Help"
date:   2023-12-25 00:00:00 +0900
categories: resleri
---

<style>
  h6 {
    font-weight: bold;
    font-size: 1.2em;
    background-color: #444;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    margin-top: 20px; /* 上部に余白を追加 */
  }

  /* 検索ボックスのスタイルを追加 */
#searchBox {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* ボックスサイズを border-box に設定 */
  }
</style>

レスレリのヘルプを補足する形でまとめます。

<input type="text" id="searchBox" placeholder="検索...">

###### RESIST
- 相手の属性耐性が25%以上の攻撃で表示される

###### WEAK
- 相手の属性耐性が-25%以下の攻撃で表示される
- WEAK攻撃時がトリガーの効果がある

###### ウェイト
- 戦闘中のパラメータ
- 行動時の素早さとスキルウェイトで決まる
  - 一般的なスキルウェイトは、スキル1が100、スキル2が200なので、スキル1を使用すると次の行動が早く訪れることになる
  - スキル使用後に素早さバフを得る場合、次の行動までのウェイトは既に決められているため、素早さバフの恩恵を受けられるのは更にその次の行動からになる
- ゲーム中で実際の数値は確認できないが、タイムラインの行動順で推測できる





###### 効果パネル
- 行動するキャラが効果を得るシステム
- 一般的に以下3種類がある
  - 強化パネル: スキルダメージ+40%
  - 弱体パネル: スキルダメージ-40%
  - バーストパネル: バーストスキル発動可能
- バトルによって上記以外も存在する
  - 強化パネルにブレイクダメージ+40%がついているもの
  - 麻痺パネル: 超高確率で麻痺を付与
- バトルで出現する効果パネルは、バトル情報の登場パネルで確認できる
- 戦闘アイテムを使うことで連続したパネルの効果を得ることができる
  - 強化パネルの効果を2つ得たり、強化パネルの効果を得てバーストスキルを使うこともできる
  - 弱体パネルも同様
  - 弱体パネルのダメージダウンは、ダメージアップとは別枠
    - 強化パネルと弱体パネルの効果を同時に得ると、単純計算で1.4*0.6=0.84倍になり、与えるダメージが少なくなる

###### スコアバトル
- 素材クエストのひとつ
- 以下項目に基づいてスコアが算出され、SSランクを達成でドロップ内容が最高になる
- スコア
  - クリアターン数:
    - 既定ターン内でクリアすれば最高スコア
    - バトルによって既定ターンの幅が広い
  - スキル最大ダメージ:
    - 一度に与えたダメージに応じたスコア
    - ダメージを与えたときに「TOTAL DAMAGE」で表示されるダメージが対象
    - 敵の数が多ければ全体攻撃が有利
  - 受けたダメージ:
    - 既定ダメージ内でクリアすれば最高スコア
    - クリア時に減っているHPの合計が対象
    - バトル中に受けたダメージの合計ではない
  - 戦闘不能人数:
    - 0人なら最高スコア
- スコアの算出基準は、バトルによって異なる
- Very Hard のSSランクは、各項目の最高スコアを目指すくらいの難易度になっている
- 高速討伐では達成したランクのドロップ内容になる

###### 属性耐性
- 各攻撃属性（火・氷・雷・風・斬・打・突）への耐性
- HPダメージやブレイクダメージに影響する
- 相手の属性耐性が-10%なら1.1倍、10%なら0.9倍になる
- 相手の属性耐性が-25%以下ならWEAK、25%以上ならRESISTになる




###### タイムライン
- バトル中に表示され、味方と敵の行動順と効果パネルを確認できる
- タイムラインの右にいるキャラから行動する
- 行動順はウェイトで決まる
- 味方に強化パネルやバーストパネル、敵に弱体パネルを与えるようにするなど、タイムラインを確認しながらスキルを選択していくのがバトルのコツの一つ

  
  
###### 願いの輝石
- ショップで所持済みキャラのピースと交換できるアイテム
- 入手手段: ガチャで所持済みキャラを獲得する
  - 入手量: ★=1個、★★=10個、★★★=50個

###### ピース
- キャラの覚醒に必要なアイテム
- 入手手段:
  - ピースクエスト
  - ガチャで所持済みキャラを獲得
  - ショップのピース交換
    - レートは各ピースの累計交換個数によって異なる
    - 交換個数1〜25
      - ピース1個/願いの輝石1個
    - 交換個数26〜50
      - ピース1個/願いの輝石2個
    - 交換個数51〜75
      - ピース1個/願いの輝石3個
    - 交換個数76〜100
      - ピース1個/願いの輝石4個
    - 交換個数101〜
      - ピース1個/願いの輝石5個

###### ピースクエスト
- ピースを獲得できる最重要クエスト
- 1日の挑戦回数: 3回+回復2回
  - 回復に必要な星導石: 1回目20個、2回目30個
- 出撃キャラのピースを入手できる
  - 入手量: 上級:1回あたりピース3個
- 星導石50個で2回回復はかなり美味しいので上級を最速で突破しておきたい


###### クリティカル
- 攻撃の際、一定の割合で発生する
- 与えるダメージが+50%(1.5倍)される
  - クリティカルダメージアップと加算
  - ダメージアップとは別枠
- ブレイクダメージには影響しない
- 攻撃が敵にヒットしたときのダメージの色が黄色になることで判別できる

###### 素早さ
- キャラに設定されているステータス
- バトル開始時やバトル中の行動順に影響する
- 素早さが高いほど行動順が早くなる = ウェイトが短くなる
- ウェイトに影響するのは他にスキルウェイトがある



###### ブレイク
- 敵のブレイクゲージを0にするとブレイク状態にさせ、敵を弱体化できるシステム
- 弱体化内容:
  - 被ダメージアップ
    - 属性耐性に-50%を加算
    - あくまで計算式の話で、敵の属性耐性そのものが下がるわけではない
  - 行動順が遅くなる
    - 「ブレイク状態が短い」という敵が存在し、敵によって遅くなる量が異なる
    - ブレイク状態が短い敵は行動順が変わらない場合があるため、ウェイトが追加されるというのが正しい表現かも
  - カウンターやかばう効果が発動しない
- キャラやバトルによって、ブレイク時やブレイク中などがトリガーの効果がある

###### ブレイク時
- 対象をブレイクさせたときのこと
- 対象がブレイク中のときではない

<!-- ###### ロール
- キャラに設定されている役割
- 4種類ある
  - アタッカー: HPダメージを与えることに特化
  - ブレイカー: ブレイクダメージを与えることに特化
  - ディフェンダー: HPや防御が高く、味方を守ることに特化
  - サポーター: 味方への回復や強化に特化
- アタッカー寄りのサポーターなどがいるため、あくまでも設定上の役割
 -->


<script>

document.getElementById('searchBox').addEventListener('input', function(e) {
    var searchText = e.target.value.toLowerCase();
    var headers = document.querySelectorAll('h6'); // これを変更

    headers.forEach(function(header) {
        var nextElement = header.nextElementSibling; // 次の要素
        var combinedText = header.textContent.toLowerCase() 
            + (nextElement ? nextElement.textContent.toLowerCase() : "");
        if (searchText === '' || combinedText.includes(searchText)) {
            header.style.display = 'block';
            if (nextElement && nextElement.tagName === 'UL') {
                nextElement.style.display = 'block';
            }
        } else {
            header.style.display = 'none';
            if (nextElement && nextElement.tagName === 'UL') {
                nextElement.style.display = 'none';
            }
        }
    });
});

</script>
