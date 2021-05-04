$(function() {
 //変数
let searchText; //入力文字列;
let targetText; //リストのテキスト

$(document).on("input", "#search-tex", function () {
  searchText = $(this).val(); //入力文字取得

  if (searchText !== " ") {
    //入力があった場合
    $(".target-area li").each(function () {
      //リスト毎に行う
      targetText = $(this).text(); //リストのテキストを取得
      if (targetText.indexOf(searchText) !== -1) {
        //リストに入力された文字列が存在する場合
        $(this).removeClass("hidden");
      } else {
        $(this).addClass("hidden");
      } //if indexOz
    }); //jq each
  } //if serchText
  if (targetText.indexOf(searchText) === " ") {
    //リストに入力された文字列が存在しない場合
    $(this).removeClass("hidden");
  }
}); //jq documen
});