// 1. Depsite some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7..play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a Amout to deposite: ");
    const numberDepositeAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0) {
      console.log("Invalid deposite amount, try again.");
    } else {
      return numberDepositeAmount;
    }
  }
};
let balance = deposit();
console.log(balance);

const CountNumberOfLines = () => {
  while (true) {
    const lines = prompt("enter a number of  lines (1-3): ");
    const NumberOfLines = parseFloat(lines);
    if (isNaN(NumberOfLines) || NumberOfLines <= 0 || NumberOfLines > 3) {
      console.log("enter a vaild number");
    } else {
      return NumberOfLines;
    }
  }
};
const NumberOfLines = CountNumberOfLines();
console.log(NumberOfLines);

const getBet = (balance, lines) => {
  while (true) {
    const amount = prompt("Enter a amount to bet per line: ");
    const enterAmount = parseFloat(amount);
    if (
      isNaN(enterAmount) ||
      enterAmount <= 0 ||
      enterAmount > balance / lines
    ) {
      console.log("low balance OR INVALID");
    } else {
      return enterAmount;
    }
  }
};
let betAmount = getBet(balance, NumberOfLines);
console.log(betAmount);

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};
const reels = spin();
console.log(reels);
