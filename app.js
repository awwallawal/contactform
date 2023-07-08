let formContainer = document.querySelector("#form-container");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

formContainer.addEventListener('submit', function(e){
 name.value = "";
 email.value = "";
 message.value = "";
})