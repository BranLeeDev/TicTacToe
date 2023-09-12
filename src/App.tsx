import { useState } from "react";
import Square from "./components/Square";
import confetti from "canvas-confetti";

interface Turns {
  x: string;
  o: string;
}

function App(): JSX.Element {
  const TURNS: Turns = {
    x: "❌",
    o: "⚪",
  };

  const initialArrayIcons = Array(9).fill(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (arrayIcons: (string | null)[]) => {
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

  const [arrayIcons, setArrayIcons] =
    useState<(string | null)[]>(initialArrayIcons);

  const [turn, setTurn] = useState<boolean>(true);

  const [winner, setWinner] = useState<string | null | false>(null);

  const handleUserTurn = (index: number): void => {
    const currentArray: (string | null)[] = [...arrayIcons];
    if (currentArray[index] === TURNS.x || currentArray[index] === TURNS.o)
      return;
    currentArray[index] = turn ? TURNS.x : TURNS.o;
    setArrayIcons(currentArray);
    const whoIsWinner = checkWinner(currentArray);
    if (whoIsWinner) {
      const execConfetti = async (): Promise<void> => {
        try {
          await confetti();
        } catch (error) {
          console.error(error);
        }
      };
      execConfetti()
        .then(() => {
          console.log("Confetti completed");
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setWinner(whoIsWinner);
    setTurn(!turn);
  };

  const handleCloseModal = (): void => {
    setWinner(null);
    setArrayIcons(initialArrayIcons);
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
            <div className="absolute left-0 top-0 flex h-full min-h-[30rem] w-full min-w-[20rem] items-center justify-center">
              <section className="flex h-[19rem] w-[18rem] flex-col items-center justify-center rounded-xl border-2 bg-zinc-900 am:h-[22rem] am:w-[20.5rem]">
                <div className="flex h-2/3 w-2/3 flex-col items-center justify-between gap-4">
                  <h2 className="text-2xl font-normal text-zinc-50 am:text-3xl">
                    {winner === false ? "Tie" : "Won"}
                  </h2>
                  <p className="text-4xl text-zinc-50 am:text-5xl">
                    {winner === false ? "᛫" : winner}
                  </p>
                  <button
                    className="rounded-xl border-2 bg-zinc-950 px-8 py-4 text-xl text-zinc-50 am:text-2xl"
                    onClick={handleCloseModal}
                  >
                    Start Over
                  </button>
                </div>
              </section>
            </div>
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
