import { PawnDetails } from "@/lib/types";
import React from "react";
import { Pawn } from "./Pawn";
type PropsPavillion = {
  pawns: PawnDetails[];
};
function GridTL({ pawns }: PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-green-700 aspect-square border-2 border-black">
      <div className="bg-green-300 rounded-full m-[20%] border-green-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "green" && pawn.id === 1 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="green" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-green-300 rounded-full m-[20%] border-green-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "green" && pawn.id === 2 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="green" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-green-300 rounded-full m-[20%] border-green-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "green" && pawn.id === 3 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="green" />
        ) : (
          ""
        )}
      </div>
      <div className="bg-green-300 rounded-full m-[20%] border-green-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "green" && pawn.id === 4 && !pawn.unlocked
        ) ? (
          <Pawn pavillion color="green" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GridTL;
