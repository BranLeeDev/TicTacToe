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
        className="am:w-24 am:h-24 am:text-4xl flex h-20 w-20 cursor-pointer items-center justify-center border text-3xl"
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
};

export default Square;
