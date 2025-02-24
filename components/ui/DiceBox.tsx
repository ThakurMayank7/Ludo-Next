import React from "react";

function DiceBox({
  color,
  turn,
  playTurn,
  turnNumber,
}: {
  color: "red" | "green" | "blue" | "yellow";
  turn: "red" | "green" | "blue" | "yellow";
  playTurn: () => void;
  turnNumber: number;
}) {
  const handleClick = () => {
    if (turn === color) {
      playTurn();
    }
  };

  return (
    <div
      className={`w-20 h-20 bg-gray-200 border-2 border-gray-400 ${
        turn === color ? "cursor-pointer bg-orange-300" : ""
      }`}
      onClick={handleClick}
    >
      {turn === color ? turnNumber : ""}
    </div>
  );
}

export default DiceBox;
