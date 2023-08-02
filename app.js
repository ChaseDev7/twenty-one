const hitButton = document.querySelector("#hit");
let counter = document.querySelector("#counter");
const table = document.querySelector("#table");
const card = document.querySelector(".card");
const topLeftNumber = document.querySelector("#top-left-number");
const centerNumber = document.querySelector("#center-number");
const bottomRightNumber = document.querySelector("#bottom-right-number");
const rulesContent = document.querySelector("#rules-content");
const rulesButton = document.querySelector("#rules");
const rulesClose = document.querySelector("#rules-close");
const gameWinner = document.querySelector("#game-winner");

rulesClose.addEventListener("click", closeRules);

function closeRules() {
  rulesContent.style.display = "none";
}

rulesButton.addEventListener("click", showRules);

function showRules() {
  rulesContent.style.display = "flex";
}

function showWinner() {
  gameWinner.style.display = "flex";
  const winningMessage = document.createElement("p");
  winningMessage.textContent = "Game Over!";
  gameWinner.appendChild(winningMessage);
}

const cards = [
  {
    name: "A",
    value: 1
  },
  {
    name: 2,
    value: 2
  },
  {
    name: 3,
    value: 3
  },
  {
    name: 4,
    value: 4
  },
  {
    name: 5,
    value: 5
  },
  {
    name: 6,
    value: 6
  },
  {
    name: 7,
    value: 7
  },
  {
    name: 8,
    value: 8
  },
  {
    name: 9,
    value: 9
  },
  {
    name: 10,
    value: 10
  },
  {
    name: "J",
    value: 10
  },
  {
    name: "Q",
    value: 10
  },
  {
    name: "K",
    value: 10
  }
]

const cardsArray = [];

hitButton.addEventListener("click", addCount);

function addCount() {
  const newCard = cards[(Math.floor(Math.random() * cards.length))];
  counter.textContent = 0;
  card.style.display = "flex";
  cardsArray.push(newCard.value);

  topLeftNumber.textContent = newCard.name;
  centerNumber.textContent = newCard.name;
  bottomRightNumber.textContent = newCard.name;
  
  let total = 0;
  for (let i of cardsArray) {
    total += i;
  }

  counter.textContent = total;

  if (total > 21) {
    showWinner();
  }
}