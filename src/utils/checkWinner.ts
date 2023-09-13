import { type WinningCombination, type ArrayIcons } from "../types";

// Represents all possible combinations for a winner in a tic tac toe game
const winningCombinations: WinningCombination[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Check if there is a winner or a tie in the tic tac toe game
const checkWinner = (arrayIcons: ArrayIcons[]) => {
  for (const index of winningCombinations) {
    const [a, b, c] = index;
    if (
      arrayIcons[a] &&
      arrayIcons[a] === arrayIcons[b] &&
      arrayIcons[a] === arrayIcons[c]
    )
      return arrayIcons[a];
  }

  if (!arrayIcons.includes(null)) {
    return false;
  }

  return null;
};

export default checkWinner;
