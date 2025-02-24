import { PawnDetails } from "@/lib/types";
import RedPawn from "@/resources/pawns/RedPawn";
import React from "react";

type PropsPavillion = {
  pawns: PawnDetails[];
};

function GridLL({ pawns }: PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-red-700 aspect-square border-2 border-black">
      <div className="bg-red-300 rounded-full m-[20%] border-red-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "red" && pawn.id === 1 && !pawn.unlocked
        ) ? (
          <RedPawn />
        ) : (
          ""
        )}
      </div>
      <div className="bg-red-300 rounded-full m-[20%] border-red-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "red" && pawn.id === 2 && !pawn.unlocked
        ) ? (
          <RedPawn />
        ) : (
          ""
        )}
      </div>
      <div className="bg-red-300 rounded-full m-[20%] border-red-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "red" && pawn.id === 3 && !pawn.unlocked
        ) ? (
          <RedPawn />
        ) : (
          ""
        )}
      </div>
      <div className="bg-red-300 rounded-full m-[20%] border-red-900 border-4 flex justify-center items-center">
        {pawns.find(
          (pawn) => pawn.color === "red" && pawn.id === 4 && !pawn.unlocked
        ) ? (
          <RedPawn />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GridLL;
