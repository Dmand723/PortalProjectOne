let cardsList = document.querySelector(".cards");
let cards = [];

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array
function Card(title, link, bgColor = "white") {
  this.title = title;
  this.url = link;
  this.bgColor = bgColor;
  cards.push(this);
}
//create card elemets
const dawsonApp = new Card(
  "About Dawson App",
  "https://dmand723.github.io/AboutDawson/",
  "#e76f51"
);
const zombiesClub = new Card(
  "Zombies Club Website",
  "https://dmand723.github.io/ZombiesClubWebsite/",
  "#103a52"
);
const cafeMenu = new Card(
  "Cafe Menu",
  "https://dmand723.github.io/CoffeeMenu/",
  "burlywood"
);
const businessPage = new Card(
  "Business Page",
  "https://dmand723.github.io/RestaurantsPage/",
  "#f4acb7"
);
const memoryGame = new Card(
  "Memory Game Website",
  "https://dmand723.github.io/MemoryGame/",
  "#1c7ccc"
);
const quizApp = new Card(
  "Quiz Application Website",
  "https://dmand723.github.io/QuizApplication/",
  "#004466"
);
const buttonApp = new Card(
  "Fun Button App",
  "https://dmand723.github.io/JS_ButtonProject/",
  "gray"
);
//crete cards on portal
cards.map((item) => {
  //create main card div
  let card = document.createElement("div");
  card.className = "card";
  card.id = item.title;
  //create card inner
  let cardInner = document.createElement("div");
  cardInner.className = "card-inner";
  //create card front
  let cardFront = document.createElement("div");
  cardFront.className = "card-front";
  cardFront.style.backgroundColor = item.bgColor;

  //create card front title
  let cardTitle = document.createElement("h2");
  cardTitle.innerText = item.title;
  // create card back
  let cardBack = document.createElement("div");
  cardBack.className = "card-back";
  //create card link
  let cardLink = document.createElement("a");
  cardLink.setAttribute("href", item.url);
  cardLink.innerText = `${item.title} link`;
  //add all eleemts to card
  cardFront.appendChild(cardTitle);
  cardBack.appendChild(cardLink);
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  cardsList.appendChild(card);
});
