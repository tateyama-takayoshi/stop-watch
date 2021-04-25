
$(function(){
  //変数------------------
  const start = ('#start');//スタートボタン
  const stop = ('#stop');//ストップボタン
  const reset = ('#reset');//リセットボタン

  let hour = ('#hour');//時表示
  let min = ('#min');//分表示
  let sec = ('#sec');//秒表示
  let milise = ('#milise');//ミリ秒表示

  let i = 0;//ミリ秒
  let j = 0;//秒
  let k = 0;//分
  let l = 0;//時
  
  let countUp = 0;

  //カウント計算----------
  function count(){
    $(milise).html(i++);
    if (i === 10){//秒への切り替え処理
      i = 0;
      $(sec).html(++j);
    }
    if (j === 60){//分への切り替え処理
      j = 0;
      $(min).html(++k);
   }
    if (k === 60){//時への切り替え処理
      k = 0;
      $(hour).html(++l);
    }
  };//function

  //スタートボタンー-----------
  $(start).click(function(){
  countUp = setInterval(count,100);
  $(start).prop("disabled", true);
  });//----------スタートボタン

  //ストップボタン-----------
  $(stop).click(function(){
    clearInterval(countUp);
  $(start).prop("disabled", false);
    
  });//----------ストップボタン

    //リセットボタン---------
  $(reset).click(function(){
    clearInterval(countUp);
    i = 0;
    j = 0;
    k = 0;
    l = 0;
    $(hour).html(0);
    $(min).html(0);
    $(sec).html(0);
    $(milise).html(0);
    $(start).prop("disabled", false);
  });//----------リセットボタン

});//jq