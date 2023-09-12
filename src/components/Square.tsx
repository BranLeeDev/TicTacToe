import React from "react";

interface Props {
  handleUserTurn: () => void;
}

const Square: React.FC<Props> = ({ handleUserTurn }): JSX.Element => {
  const handleClick = (): void => {
    handleUserTurn();
  };

  return (
    <>
      <div
        className="am:w-24 am:h-24 h-20 w-20 cursor-pointer border"
        onClick={handleClick}
      ></div>
    </>
  );
};

export default Square;
