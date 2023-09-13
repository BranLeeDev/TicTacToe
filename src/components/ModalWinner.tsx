import React from "react";
import { type ArrayIcons } from "../types";

interface Props {
  handleCloseModal: () => void;
  winner: ArrayIcons | false;
}

const ModalWinner: React.FC<Props> = ({
  handleCloseModal,
  winner,
}): JSX.Element => {
  return (
    <div className="absolute left-0 top-0 flex h-full min-h-[30rem] w-full min-w-[20rem] items-center justify-center">
      <section className="flex h-[19rem] w-[18rem] flex-col items-center justify-center rounded-xl border-2 bg-zinc-900 am:h-[22rem] am:w-[20.5rem]">
        <div className="flex h-2/3 w-2/3 flex-col items-center justify-between gap-4">
          <h2 className="text-2xl font-normal text-zinc-50 am:text-3xl">
            {!winner ? "Tie" : "Won"}
          </h2>
          <p className="text-4xl text-zinc-50 am:text-5xl">
            {!winner ? "᛫" : winner}
          </p>
          <button
            className="bg-zinc-90 rounded-xl border-2 border-zinc-50 px-8 py-4 text-xl text-zinc-50 hover:border-zinc-950 hover:bg-zinc-50 hover:text-zinc-950 am:text-2xl"
            onClick={handleCloseModal}
          >
            Start Over
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalWinner;
