import React, { ReactNode } from "react";

interface Props {
  index: number;
  handleUserTurn: (index: number) => void;
  children: ReactNode;
}

const Square: React.FC<Props> = ({
  handleUserTurn,
  index,
  children,
}): JSX.Element => {
  const handleClick = (): void => {
    handleUserTurn(index);
  };

  return (
    <>
      <div
        className="flex h-20 w-20 cursor-pointer items-center justify-center border text-3xl am:h-24 am:w-24 am:text-4xl"
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
};

export default Square;
