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
  button.textContent = "図書館でさがす";

  // ボタンのデザインを指定
  button.style.width = "100%";       // 幅を左右に目一杯広げる
  button.style.height = "29px";      // 高さを29pxに設定
  button.style.padding = "1px 6px";  // 上下1px, 左右6pxのパディング
  button.style.marginTop = "8px";    // 上に8pxのマージンを追加
  button.style.marginBottom = "16px"; // 下に16pxのマージンを追加

  button.style.border = "none";         // ボーダーを消す
  button.style.borderRadius = "100px";  // 角を丸める（100pxの半径）
  button.style.backgroundColor = "#2ab6e9";  // 背景色を#2ab6e9に

  button.style.textAlign = "center";  // 文字を中央に配置
  button.style.color = "white";       // 文字色を白に
  button.style.fontSize = "14px";     // フォントサイズを14pxに設定

  button.style.cursor = "pointer";    // マウスオーバー時のカーソルをポインタに

  // マウスオーバー時の効果を追加
  button.onmouseover = function () {
    button.style.backgroundColor = "#249cc5"; // 少し暗い色に
  };
  button.onmouseout = function () {
    button.style.backgroundColor = "#2ab6e9"; // 元の色に戻す
  };

  // ボタンを<div id="quantityRelocate_feature_div">の下に挿入
  let quantityRelocateElement = document.getElementById("quantityRelocate_feature_div");
  if (quantityRelocateElement) {
    quantityRelocateElement.insertAdjacentElement("afterend", button);
  }

  // ボタンをクリックするとカーリルのページを新しいタブで開く
  button.onclick = function (event) {
    event.preventDefault(); // デフォルトの動作を防ぐ
    event.stopPropagation(); // イベントのバブリングを防ぐ
    window.open(`https://calil.jp/book/${isbn}`, "_blank");
  };
}

// ISBNを取得し、ボタンを追加
let isbn = getISBN();
if (isbn) {
  addCalilButton(isbn);
}
