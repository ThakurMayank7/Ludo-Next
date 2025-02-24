import { PawnDetails } from "@/lib/types";
import React from "react";
import { Pawn } from "./Pawn";
type PropsPavillion = {
  pawns: PawnDetails[];
};
function GridLR({ pawns }: PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-blue-700 aspect-square border-2 border-black">
      <div className="bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "blue" && pawn.id === 1 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="blue" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "blue" && pawn.id === 2 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="blue" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "blue" && pawn.id === 3 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="blue" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "blue" && pawn.id === 4 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="blue" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GridLR;
