// ISBNを取得する関数
function getISBN() {
  // 全てのa-text-boldクラスを持つspan要素を取得
  let isbnElements = document.querySelectorAll("li span.a-text-bold");
  for (let element of isbnElements) {
    // テキストが "ISBN-10" かどうか確認
    if (element.textContent.includes("ISBN-10")) {
      // 次の兄弟要素にISBN番号があるので、それを取得
      return element.nextElementSibling.textContent.trim();
    }
  }
  return null;
}

// ボタンを追加する関数
function addCalilButton(isbn) {
  let button = document.createElement("button");
  button.textContent = "Calilで確認";

  // ボタンのデザインを指定
  button.style.width = "100%"; // 左右に目一杯広げる
  button.style.height = "29px"; // 左右に目一杯広げる
  button.style.padding = "1px 6px"; // 上下1px, 左右6pxのパディング
  button.style.textAlign = "center"; // 文字を中央に配置
  button.style.color = "white"; // 文字色を白に
  button.style.border = "none"; // ボーダーを消す
  button.style.backgroundColor = "#2ab6e9"; // 背景色を#2ab6e9に
  button.style.cursor = "pointer"; // マウスオーバー時のカーソルをポインタに
  button.style.fontSize = "14px"; // フォントサイズを指定
  button.style.marginBottom = "8px"; // 下に8pxのマージンを追加
  button.style.borderRadius = "100px"; // 角を丸める（5pxの半径）

  // マウスオーバー時の効果を追加
  button.onmouseover = function () {
    button.style.backgroundColor = "#249cc5"; // 少し暗い色に
  };
  button.onmouseout = function () {
    button.style.backgroundColor = "#2ab6e9"; // 元の色に戻す
  };

  // ボタンを<div id="addToCart_feature_div">の上に挿入
  let addToCartElement = document.getElementById("addToCart_feature_div");
  if (addToCartElement) {
    addToCartElement.insertAdjacentElement("beforebegin", button);
  }

  // ボタンをクリックするとカーリルのページを新しいタブで開く
  button.onclick = function () {
    window.open(`https://calil.jp/book/${isbn}`, "_blank");
  };
}

// ISBNを取得し、ボタンを追加
let isbn = getISBN();
if (isbn) {
  addCalilButton(isbn);
}
