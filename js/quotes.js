const quotes = [
    {
        quote : "When you go through hardships and decide not to surrender, that is strength.",
        author : "Arnold Schwarzenegger"
    },
    {
        quote : "It is kind of fun to do the impossible.",
        author : "Walt Disney"
    },
    {
        quote : "There are better starters than me but I’m a strong finisher.",
        author : "Usain Bolt"
    },
    {
        quote : "Tough times never last, but tough people do.",
        author : "Robert H. Schulle"
    },
    {
        quote : "I’ve failed over and over and over again in my life and that is why I succeed",
        author : "Michael Jordan"
    },
    {
        quote : "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author : "Angelina Jolie"
    },
    {
        quote : "But I know, somehow, that only when it is dark enough can you see the stars.",
        author : "Martin Luther King, Jr"
    },
    {
        quote : "Grind Hard, Shine Hard.",
        author : "Dwayne Johnson"
    },
    {
        quote : "I didn’t get there by wishing for it or hoping for it, but by working for it. ",
        author : "Estée Lauder"
    },
    {
        quote : "I never dreamed about success, I worked for it",
        author : "Estée Lauder"
    }
]

const quote = document.querySelector("#quotes span#quote");
const author = document.querySelector("#quotes span#author");

function randomSetQuotes(){
    
    // Randomly, take the elements of the qutoes array
    const randomNumber =  Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[randomNumber].quote;
    author.innerText = quotes[randomNumber].author;

    new TypeIt(quote, {
        speed: 90,
        loop:true,
    })
    .go();
}

randomSetQuotes();
