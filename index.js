let cards = [];
let sum = 0;
let hasBlacJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("messageEl");
let sumEl = document.getElementById("sumEl");
let cardsEl = document.getElementById("cardsEl");
let player = {
  name: "Aya",
  chips: 150,
};

let playerEl = document.getElementById("playerEl");
playerEl.textContent = player.name + ": $" + player.chips;
function startGame() {
  isAlive = true;
  hasBlacJack = false;

  cards = [];
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards.push(firstCard);
  cards.push(secondCard);
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum == 21) {
    hasBlacJack = true;
    message = "Wohoo! You've got Blackjack! 🥳";
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  console.log("startGame");
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlacJack) {
    console.log("Drawing a new card from the deck!");
    let card = getRandomNumber();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * 13) + 1;

  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 1;
  } else {
    return randomNum;
  }
}
