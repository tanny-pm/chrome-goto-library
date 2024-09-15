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
  button.style.marginTop = "10px"; // ボタンのスタイル調整

  // ボタンを<h1 id="title">の下に挿入
  let titleElement = document.querySelector("h1#title");
  if (titleElement) {
    titleElement.insertAdjacentElement("afterend", button);
  }

  button.onclick = function () {
    window.open(`https://calil.jp/book/${isbn}`, "_blank");
  };
}

// ISBNを取得し、ボタンを追加
let isbn = getISBN();
if (isbn) {
  addCalilButton(isbn);
}
