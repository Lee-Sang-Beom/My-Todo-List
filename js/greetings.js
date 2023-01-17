const loginInput = document.querySelector("#login-form div input");
const loginButton = document.querySelector("#login-form div button");
const loginForm = document.querySelector("#login-form");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;

  // 로컬 스토리지에 username key, username value 기록
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  const quote = document.querySelector("#quotes span#quote");
  const author = document.querySelector("#quotes span#author");
  const greeting = document.querySelector("#greeting");
  const todoForm = document.querySelector("#todo-form");
  const linkLogo = document.querySelector("#link-icon");
  const ball = document.querySelector(".ball");
  const body = document.body;
  const todoFormInput = document.querySelector("#todo-form-input");
  const todoFormBtn = document.querySelector("#todo-form-btn");

  // debug test 2023-01-17
  console.log(todoFormInput);
  console.log(todoFormBtn);

  // main greeing page greeting
  greeting.innerText = `Welcome '${username}'`;

  // remove unnecessary tag
  greeting.classList.remove(HIDDEN_CLASS);
  todoForm.classList.remove(HIDDEN_CLASS);
  linkLogo.classList.remove(HIDDEN_CLASS);
  quote.classList.remove(HIDDEN_CLASS);
  author.classList.remove(HIDDEN_CLASS);
  body.classList.remove(HIDDEN_CLASS);
  todoFormBtn.classList.remove(HIDDEN_CLASS);
  todoFormInput.classList.remove(HIDDEN_CLASS);
  ball.classList.add(HIDDEN_CLASS);

  document.querySelector("h1#clock").classList.remove(HIDDEN_CLASS);
}

// 로컬 스토리지에 username key에 대한 value 요청
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
