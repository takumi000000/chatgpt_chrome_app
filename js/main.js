// チャットの入力フォームと送信ボタンを取得
// var chatInput = document.getElementById("prompt-textarea");
const chatSubmit = document.getElementsByClassName('enabled:bg-brand-purple');

// // 送信ボタンがクリックされたときのイベントリスナーを登録
// chatSubmit.addEventListener("click", function (event) {
//   // 入力フォームの値を取得
//   const chatValue = chatInput.value;

// });
// Input form -------------------------------
document.addEventListener("input", function() {
  if (document.getElementById("prompt-textarea").value){
    document.getElementById("prompt-textarea").addEventListener("input", function(txtEvent) {
      var changedValue = txtEvent.target.value;
      // 変更された値を処理するための任意の処理をここに記述する
      console.log("Input value changed:", changedValue);
      document.getElementById("prompt-textarea").value = document.getElementById("prompt-textarea").value.replace('あああ', 'いいい')
      document.getElementById("prompt-textarea").value = document.getElementById("prompt-textarea").value.replace('田中太郎', '仮姓仮名')
    });
  }
});

// Send form -------------------------------
document.addEventListener("change", function() {
  document.getElementsByClassName("enabled:bg-brand-purple")[0].addEventListener("click", confirmCheck, { once: true });
});

document.addEventListener("keypress", function(event) {
  // Press Enter
  if (event.keyCode == 13) {
    event.preventDefault();
  }
})
document.addEventListener("keydown", function(event) {
  // エンターキーの場合
  if (event.key == "Enter" || event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
}, true);

function confirmCheck(event){
  // confirm function
  const confirmed = confirm(`Are you sure you want to send "${document.getElementById("prompt-textarea").value}"?`);
  // OK でなければ、イベントの伝播とデフォルトの動作を停止
  debugger
  if (!confirmed) {
    event.stopPropagation();
    event.preventDefault();
  }
  console.log('submit ChatGPT')
}
  