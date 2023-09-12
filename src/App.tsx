import { useState } from "react";
import Square from "./components/Square";

interface Turns {
  x: string;
  o: string;
}

function App(): JSX.Element {
  const TURNS: Turns = {
    x: "❌",
    o: "⚪",
  };

  const [arrayIcons, setArrayIcons] = useState<(string | null)[]>(
    Array(9).fill(null)
  );

  const [turn, setTurn] = useState<boolean>(true);

  const handleUserTurn = (): void => {
    setTurn(!turn);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <header>
          <h1 className="am:text-4xl text-center text-3xl text-zinc-50">
            Tic Tac Toe
          </h1>
        </header>
        <main className="flex flex-col items-center gap-8">
          <section className="grid grid-cols-3 grid-rows-3 gap-4">
            {arrayIcons.map((_, index) => (
              <Square key={index} handleUserTurn={handleUserTurn} />
            ))}
          </section>
          <section className="flex flex-row gap-4">
            <div
              className={`am:h-16 am:w-16 am:text-3xl flex h-14 w-14 items-center justify-center rounded ${
                turn ? "bg-blue-700" : ""
              } text-2xl`}
            >
              {TURNS.x}
            </div>
            <div
              className={`am:h-16 am:w-16 flex h-14 w-14 items-center justify-center rounded ${
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
