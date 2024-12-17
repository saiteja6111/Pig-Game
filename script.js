// Game Variables
const maxScore = 50;
let players = [];
let currentPlayer = 0;
let currentScore = 0;

// DOM Elements
const playerScoresDiv = document.getElementById("playerScores");
const rollBtn = document.getElementById("rollBtn");
const holdBtn = document.getElementById("holdBtn");
const messageDiv = document.getElementById("message");
const winnerDiv = document.getElementById("winner");

// Initialize Game
function initGame() {
    let numPlayers;
    do {
        numPlayers = prompt("Enter the number of players (2-4):");
    } while (isNaN(numPlayers) || numPlayers < 2 || numPlayers > 4);
    
    players = Array(parseInt(numPlayers)).fill(0);
    updateScores();
    messageDiv.textContent = `Player ${currentPlayer + 1}'s turn. Roll the dice!`;
}

// Update Scores on the Screen
function updateScores() {
    playerScoresDiv.innerHTML = "";
    players.forEach((score, idx) => {
        const playerDiv = document.createElement("div");
        playerDiv.className = "player";
        if (idx === currentPlayer) playerDiv.classList.add("current-turn");
        playerDiv.textContent = `Player ${idx + 1}: ${score}`;
        playerScoresDiv.appendChild(playerDiv);
    });
}

// Roll the Dice
function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;

    if (roll === 1) {
        currentScore = 0;
        messageDiv.textContent = `Player ${currentPlayer + 1} rolled a 1! Turn over.`;
        nextPlayer();
    } else {
        currentScore += roll;
        messageDiv.textContent = `Player ${currentPlayer + 1} rolled a ${roll}. Current score: ${currentScore}`;
    }
    updateScores();
}

// Hold the Score
function holdScore() {
    players[currentPlayer] += currentScore;
    currentScore = 0;

    if (players[currentPlayer] >= maxScore) {
        rollBtn.disabled = true;
        holdBtn.disabled = true;
        winnerDiv.textContent = `🎉 Player ${currentPlayer + 1} wins the game! 🎉`;
    } else {
        nextPlayer();
    }
    updateScores();
}

// Move to Next Player
function nextPlayer() {
    currentPlayer = (currentPlayer + 1) % players.length;
    messageDiv.textContent = `Player ${currentPlayer + 1}'s turn. Roll the dice!`;
}

// Event Listeners
rollBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", holdScore);

// Start the Game
initGame();
