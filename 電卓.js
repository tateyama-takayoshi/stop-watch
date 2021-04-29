$(function() {
 //変数
let result = "#result";

//上４段のボタン押下時処理
$(document).on("click", ".key", function () {
  const resultValue = $(result).val();
  
  //ボタン押下後に最初の０表示を削除
  if (resultValue === "0") {
    $(result).val("");
  }

  let btn = $(this).val();
  let formula = $(result).val();
  $(result).val(formula + btn);
});

// 最下段のボタン押下時処理
$(document).on("click", ".key2", function () {
  const btn = $(this).val();

  // ACボタン押下時、全て削除
  if (btn === "AC") {
    deleteAll();
  }

  // イコールがおされたら、計算処理をする
  if (btn === "=") {
    clickEqual();
  }
});

//関数　ACボタン押下時全て削除
function deleteAll() {
  $(result).val("0");
}

//関数　=ボタン押下時の計算
function clickEqual() {
  const formula = $(result).val();
  $(result).val(eval(formula));
}
});