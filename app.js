const hitButton = document.querySelector("#hit");
const stayButton = document.querySelector("#stay");
let counter = document.querySelector("#counter");
let dealerCounter = document.querySelector("#dealer-counter");
const table = document.querySelector("#table");
const rulesContent = document.querySelector("#rules-content");
const resetButton = document.querySelector("#reset");
const rulesButton = document.querySelector("#rules");
const rulesClose = document.querySelector("#rules-close");
const gameWinner = document.querySelector("#game-winner");
const newGame = document.querySelector("#new-game-button");
const cardContainer = document.querySelector("#card-container");
const dealerContainer = document.querySelector("#dealer-container");
const winnerMessage = document.querySelector("#winning-message");

resetButton.addEventListener("click", resetGame);

function resetGame() {
  cardsArray.length = 0;
  counter.textContent = 0;
  cardContainer.innerHTML = "";
  dealerArray.length = 0;
  dealerCounter.textContent = 0;
  dealerContainer.innerHTML = "";
}

rulesClose.addEventListener("click", closeRules);

function closeRules() {
  rulesContent.style.display = "none";
  hitButton.addEventListener("click", playRound);
  resetButton.addEventListener("click", resetGame);
}

rulesButton.addEventListener("click", showRules);

function showRules() {
  rulesContent.style.display = "flex";
  hitButton.removeEventListener("click", playRound);
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

const dealerArray = [];

hitButton.addEventListener("click", playRound);

function addCard() {
  const newCard = cards[(Math.floor(Math.random() * cards.length))];
  counter.textContent = 0;
  cardsArray.push(newCard);
  cardContainer.innerHTML = "";
  let cardCount = 0;

  for (let i = 0; i < cardsArray.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", "card" + cardCount++);
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

function addDealerCard() {
  const newCard = cards[(Math.floor(Math.random() * cards.length))];
  dealerCounter.textContent = 0;
  dealerArray.push(newCard);
  dealerContainer.innerHTML = "";
  let dealerCardCount = 0;

  for (let i = 0; i < dealerArray.length; i++) {
    let dealerCard = document.createElement("div");
    dealerCard.classList.add("dealer-card");
    dealerCard.setAttribute("id", "dealercard" + dealerCardCount++);
    let topLeftNumber = document.createElement("div");
    topLeftNumber.classList.add("top-left-number")
    let centerNumber = document.createElement("div");
    centerNumber.classList.add("center-number");
    let bottomRightNumber = document.createElement("div");
    bottomRightNumber.classList.add("bottom-right-number");
    topLeftNumber.textContent = dealerArray[i].name;
    centerNumber.textContent = dealerArray[i].name;
    bottomRightNumber.textContent = dealerArray[i].name;
    dealerCard.appendChild(topLeftNumber);
    dealerCard.appendChild(centerNumber);
    dealerCard.appendChild(bottomRightNumber);
    dealerContainer.append(dealerCard);
  };
}

function addCount() {
  let total = 0;
  for (let i of cardsArray) {
    total += i.value;
  }

  counter.textContent = total;

  if (total > 21) {
    showWinner("DEALER");
  }
}

function addDealerCount() {
  let total = 0;
  for (let i of dealerArray) {
    total += i.value;
  }

  dealerCounter.textContent = total;

  if (total > 21) {
    showWinner("PLAYER");
  }
}

function playRound() {
  addDealerCard();
  addCard();
  
  addCount();
  addDealerCount();
}

function showWinner(winner) {
  gameWinner.style.display = "flex";
  winnerMessage.textContent = winner + " wins";
  rulesButton.removeEventListener("click", showRules);
  hitButton.removeEventListener("click", playRound);
  resetButton.removeEventListener("click", resetGame);
}

newGame.addEventListener("click", startNewGame);

function startNewGame() {
  gameWinner.style.display = "none";
  hitButton.addEventListener("click", playRound);
  rulesButton.addEventListener("click", showRules);
  resetButton.addEventListener("click", resetGame);
  cardsArray.length = 0;
  dealerArray.length = 0;
  counter.textContent = 0;
  dealerCounter.textContent = 0;
  cardContainer.innerHTML = "";
  dealerContainer.innerHTML = "";
}