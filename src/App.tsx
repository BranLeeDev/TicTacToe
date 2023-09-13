import { useState } from "react";

// Components
import Square from "./components/Square";
import ModalWinner from "./components/ModalWinner";

// Types
import { type Turns, type ArrayIcons } from "./types";

// Utils
import checkWinner from "./utils/checkWinner";
import startOrResumeGame from "./utils/startOrResumeGame";
import startOrResumeTurn from "./utils/startOrResumeTurn";
import execConfetti from "./utils/execConfetti";

function App(): JSX.Element {
  // Represents the possible turns in a tic tac toe game
  const TURNS: Turns = {
    x: "❌",
    o: "⚪",
  };

  // Initial array for start game or to resume the game from where the user left off
  const [arrayIcons, setArrayIcons] = useState<ArrayIcons[]>(startOrResumeGame);

  // User's turn in the game
  const [turn, setTurn] = useState<boolean>(startOrResumeTurn);

  // Check if there is a winner
  const [winner, setWinner] = useState<ArrayIcons | false>(null);

  const handleUserTurn = (index: number): void => {
    const currentArray: ArrayIcons[] = [...arrayIcons];
    if (currentArray[index] === TURNS.x || currentArray[index] === TURNS.o)
      return;
    currentArray[index] = turn ? TURNS.x : TURNS.o;

    // Saves the updated copy of currentArray to the browser's local storage.
    window.localStorage.setItem("currentArray", JSON.stringify(currentArray));
    window.localStorage.setItem("turnUser", JSON.stringify(turn));

    setArrayIcons(currentArray);

    // checks if there's a winner
    const whoIsWinner: ArrayIcons | false = checkWinner(currentArray);

    setWinner(whoIsWinner);

    if (whoIsWinner) {
      execConfetti();
      return;
    }

    setTurn(!turn);
  };

  const handleCloseModal = (): void => {
    setWinner(null);
    setTurn(true);
    setArrayIcons(Array(9).fill(null));
    window.localStorage.clear();
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <header>
          <h1 className="text-center font-serif text-3xl font-semibold tracking-widest text-zinc-50 am:text-4xl">
            Tic Tac Toe
          </h1>
        </header>
        <main className="flex flex-col items-center gap-8">
          <section className="grid grid-cols-3 grid-rows-3 gap-4">
            {arrayIcons.map((icon, index) => (
              <Square key={index} handleUserTurn={handleUserTurn} index={index}>
                {icon}
              </Square>
            ))}
          </section>
          {winner !== null && (
            <ModalWinner handleCloseModal={handleCloseModal} winner={winner} />
          )}
          <section className="flex flex-row gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded am:h-16 am:w-16 am:text-3xl ${
                turn ? "bg-blue-700" : ""
              } text-2xl`}
            >
              {TURNS.x}
            </div>
            <div
              className={`flex h-14 w-14 items-center justify-center rounded am:h-16 am:w-16 ${
                turn ? "" : "bg-blue-700"
              } text-3xl`}
            >
              {TURNS.o}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
