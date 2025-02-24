import { PawnDetails } from "@/lib/types";
import React from "react";
import { Pawn } from "./Pawn";
type PropsPavillion = {
  pawns: PawnDetails[];
};
function GridTR({ pawns }: PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-yellow-400 aspect-square border-2 border-black">
      <div className="bg-yellow-200 rounded-full m-[20%] border-yellow-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "yellow" && pawn.id === 1 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="yellow" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-yellow-200 rounded-full m-[20%] border-yellow-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "yellow" && pawn.id === 2 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="yellow" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-yellow-200 rounded-full m-[20%] border-yellow-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "yellow" && pawn.id === 3 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="yellow" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-yellow-200 rounded-full m-[20%] border-yellow-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "yellow" && pawn.id === 4 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="yellow" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GridTR;
