// チャットの入力フォームと送信ボタンを取得
// var chatInput = document.getElementById("prompt-textarea");
const chatSubmit = document.querySelector(".submit");

// // 送信ボタンがクリックされたときのイベントリスナーを登録
// chatSubmit.addEventListener("click", function (event) {
//   // 入力フォームの値を取得
//   const chatValue = chatInput.value;
//   // 確認モーダルを表示し、OK かどうかを判定
//   const confirmed = window.confirm(`Are you sure you want to send "${chatValue}"?`);
//   // OK でなければ、イベントの伝播とデフォルトの動作を停止
//   if (!confirmed) {
//     event.stopPropagation();
//     event.preventDefault();
//   }
// });
var inputElement = document.getElementById("prompt-textarea");
document.addEventListener("change", function() {
  if (document.getElementById("prompt-textarea").value){
    document.getElementById("prompt-textarea").addEventListener("change", function(event) {
      var changedValue = event.target.value;
      // 変更された値を処理するための任意の処理をここに記述する
      console.log("Input value changed:", changedValue);
      document.getElementById("prompt-textarea").value = document.getElementById("prompt-textarea").value.replace('あああ', 'いいい')
    });
  }
});

  