import { PawnDetails } from "@/lib/types";
import BluePawn from "@/resources/pawns/BluePawn";
import React from "react";
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
          <BluePawn />
        ) : (
          ""
        )}
      </div>
      <div className="bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "blue" && pawn.id === 2 && !pawn.unlocked
        ) ? (
          <BluePawn />
        ) : (
          ""
        )}
      </div>
      <div className="bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "blue" && pawn.id === 3 && !pawn.unlocked
        ) ? (
          <BluePawn />
        ) : (
          ""
        )}
      </div>
      <div className="bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "blue" && pawn.id === 4 && !pawn.unlocked
        ) ? (
          <BluePawn />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GridLR;
