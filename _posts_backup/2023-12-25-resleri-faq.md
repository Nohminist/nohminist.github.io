---
layout: post
title:  "レスレリ攻略FAQ"
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

レスレリの攻略におけるFAQをまとめます。

<input type="text" id="searchBox" placeholder="検索...">





###### ガチャで所持済みキャラを獲得すると
- キャラの代わりに以下アイテムを入手できる
  - 該当キャラのピース
    - 入手量: ★=1個、★★=10個、★★★=50個
    - ★★★ピックアップキャラの場合100個になる
  - 願いの輝石
    - 入手量: ★=1個、★★=10個、★★★=50個
    - ★★★ピックアップキャラの場合も変わらず





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

