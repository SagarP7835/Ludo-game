let currentPlayer = 1;

document.getElementById("rollDice").addEventListener("click", () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("diceResult").textContent = dice;
  document.getElementById("message").textContent = `Player ${currentPlayer} rolled a ${dice}`;

  // Switch turn
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("currentPlayer").textContent = `Player ${currentPlayer}`;
});
