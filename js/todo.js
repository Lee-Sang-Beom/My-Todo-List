const toDoList = document.getElementById("todo-list");
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);
let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;

    toDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id);
    })
    saveToDos();
    li.remove();
}

function paintTodo(newToDoObj){

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.classList.add("deleteButton");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.id = newToDoObj.id;
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDoObj.text;

    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    newToDoObj = {
        id : Date.now(), // 아이디를 Date.now()로 줌 (겹치지않게 아무거나)
        text : newTodo,
    }
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => {
        paintTodo(item);
    })
}