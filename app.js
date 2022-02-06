const loginInput = document.querySelector(".login-form > input");
const loginButton = document.querySelector(".login-form > button");
const loginForm = document.querySelector(".login-form");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit)
