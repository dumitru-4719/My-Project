const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});
const message = document.getElementById('message');
const param = new URLSearchParams(window.location.search);
const username = param.get('username');
const pw = param.get('pw');

if(username.toLowerCase() === 'codecademy' && pw === 'ilovecoding'){
  message.innerHTML = 'We love coding too!';
} else if(!username || !pw){
  message.innerHTML = 'Add some client-side validation!';
} else {
  message.innerHTML = "Hurray for client-side";
}