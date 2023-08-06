const hitButton = document.querySelector("#hit");
let counter = document.querySelector("#counter");
const table = document.querySelector("#table");
const rulesContent = document.querySelector("#rules-content");
const resetButton = document.querySelector("#reset");
const rulesButton = document.querySelector("#rules");
const rulesClose = document.querySelector("#rules-close");
const gameWinner = document.querySelector("#game-winner");
const newGame = document.querySelector("#new-game-button");
const cardContainer = document.querySelector("#card-container");

resetButton.addEventListener("click", resetGame);

function resetGame() {
  cardsArray.length = 0;
  counter.textContent = 0;
  cardContainer.innerHTML = "";
}

rulesClose.addEventListener("click", closeRules);

function closeRules() {
  rulesContent.style.display = "none";
  hitButton.addEventListener("click", addCount);
  resetButton.addEventListener("click", resetGame);
}

rulesButton.addEventListener("click", showRules);

function showRules() {
  rulesContent.style.display = "flex";
  hitButton.removeEventListener("click", addCount);
  resetButton.removeEventListener("click", resetGame);
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

function addCard () {
  const newCard = cards[(Math.floor(Math.random() * cards.length))];
  counter.textContent = 0;
  cardsArray.push(newCard);
  cardContainer.innerHTML = "";
  let cardCount = 0;

  for (let i = 0; i < cardsArray.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", cardCount++);
    let topLeftNumber = document.createElement("div");
    topLeftNumber.classList.add("top-left-number")
    let centerNumber = document.createElement("div");
    centerNumber.classList.add("center-number");
    let bottomRightNumber = document.createElement("div");
    bottomRightNumber.classList.add("bottom-right-number");
    topLeftNumber.textContent = cardsArray[i].name;
    centerNumber.textContent = cardsArray[i].name;
    bottomRightNumber.textContent = cardsArray[i].name;
    card.appendChild(topLeftNumber);
    card.appendChild(centerNumber);
    card.appendChild(bottomRightNumber);
    cardContainer.append(card);
  };
}

function addCount() {
  addCard();
  
  let total = 0;
  for (let i of cardsArray) {
    total += i.value;
  }

  counter.textContent = total;

  if (total > 21) {
    showWinner();
  }
}

function showWinner() {
  gameWinner.style.display = "flex";
  rulesButton.removeEventListener("click", showRules);
  hitButton.removeEventListener("click", addCount);
  resetButton.removeEventListener("click", resetGame);
}

newGame.addEventListener("click", startNewGame);

function startNewGame () {
  gameWinner.style.display = "none";
  hitButton.addEventListener("click", addCount);
  rulesButton.addEventListener("click", showRules);
  resetButton.addEventListener("click", resetGame);
  cardsArray.length = 0;
  counter.textContent = 0;
  cardContainer.innerHTML = "";
}