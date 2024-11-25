// Select necessary elements
const cards = document.querySelectorAll(".card");
const movesEl = document.getElementById("moves");
const timerEl = document.getElementById("timer");
const restartBtn = document.querySelector(".restart-game");

let movesCount = 0;
let firstCard = null;
let hasFlipped = false;
let matchedCards = 0;
let timerInterval = null;
let timePlayed = 0;

// Shuffle cards on load
function shuffleCards() {
  cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * cards.length);
  });
}

shuffleCards();

// Start the timer
function startTimer() {
  if (timerInterval) return; // Prevent multiple timers
  timerInterval = setInterval(() => {
    timePlayed++;
    const minutes = String(Math.floor(timePlayed / 60)).padStart(2, "0");
    const seconds = String(timePlayed % 60).padStart(2, "0");
    timerEl.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

// Handle card flip
function flipCard(card) {
  if (hasFlipped || card.classList.contains("flipped")) return;

  startTimer();
  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card; // First card selected
    return;
  }

  // Second card selected
  hasFlipped = true;
  movesCount++;
  movesEl.textContent = movesCount;

  // if cards are matching // 
  if (getCardImage(firstCard) === getCardImage(card)) {
    firstCard.classList.add("matched");
    card.classList.add("matched");
    firstCard = null;
    matchedCards += 2;
    hasFlipped = false;

    // Check for win condition
    if (matchedCards === cards.length) {
      clearInterval(timerInterval);
      alert("Congratulations! You won!");
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      card.classList.remove("flipped");
      firstCard = null;
      hasFlipped = false;
    }, 1000);
  }
}

// Get the image name from a card
function getCardImage(card) {
  return card.querySelector(".front-face").src.split("/").pop();
}

// Restart the game
function restartGame() {
  cards.forEach((card) => card.classList.remove("flipped", "matched"));
  movesCount = 0;
  matchedCards = 0;
  timePlayed = 0;
  firstCard = null;
  hasFlipped = false;

  movesEl.textContent = "0";
  timerEl.textContent = "00:00";
  clearInterval(timerInterval);
  timerInterval = null;

  shuffleCards();
}

// Attach event listeners
cards.forEach((card) => card.addEventListener("click", () => flipCard(card)));
restartBtn.addEventListener("click", restartGame);
