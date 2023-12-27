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

レスレリの攻略Tipsをまとめます。

<input type="text" id="searchBox" placeholder="検索...">



###### 日課
- 無料ガチャ（各ガチャに設定）
- 広告閲覧（星導石購入画面で、星導石や手包みミニクッキーを入手）
- デイリーミッション
- 無料でスタミナ80回復
- 注文（スタミナ100回復、1日2回まで）

###### 週課
- ウィークリーミッション

###### 月課
- ショップのマンスリー商品
  - コール
    - マナ　恒常入手手段が時間経過か星導石のみなため優先度高め
    - コールは研究でも大量に要求される
  - キラキラコイン
    - 聖玉　入手手段が限られているため優先度高め
    - 聖玉以外は育成クエストで入手可能
    - キラキラコインは 2023/12/22実装の育成研究でも要求される

###### バトルに勝てないときの対処
- キャラを育成、強化する
  - レベルを上げる
    - ステータスが上がるだけでなく、レベルもダメージ計算式で参照される
  - グローボードを解放する
    - ステータスが上がるだけでなく、レベル上限も上がる
  - 装備を見直す
  - 研究を進める
- 戦略を見直す
  - 火力が足りない場合





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

