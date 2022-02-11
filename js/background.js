const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
]

const randomNumber =  Math.floor(Math.random()*images.length);
const chosenImage = images[randomNumber];

const bgImage = document.createElement("img");
const bodyBackground = document.body.prepend(bgImage);

bgImage.src = `./img/${chosenImage}`;
