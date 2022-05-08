const clock = document.querySelector("h1#clock");

// time information collection
function getClock(){
    const date = new Date();
    const hours = String(date.getHours().toString()).padStart(2,"0");
    const minutes = String(date.getMinutes().toString()).padStart(2,"0");
    const seconds = String(date.getSeconds().toString()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
