import { useState } from "react";
import Square from "./components/Square";

function App(): JSX.Element {
  const [arrayIcons, setArrayIcons] = useState<(string | null)[]>(
    Array(9).fill(null)
  );

  return (
    <>
      <div className="flex flex-col gap-8">
        <header>
          <h1 className="text-center text-4xl text-zinc-50">Tic Tac Toe</h1>
        </header>
        <main className="flex flex-col items-center gap-8">
          <section className="grid grid-cols-3 grid-rows-3 gap-4">
            {arrayIcons.map((_, index) => (
              <Square key={index} />
            ))}
          </section>
          <section className="flex flex-row gap-4">
            <div className="h-16 w-16 rounded bg-blue-700"></div>
            <div className="h-16 w-16 rounded bg-blue-700"></div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
