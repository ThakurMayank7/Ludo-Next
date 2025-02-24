import { PawnDetails } from "@/lib/types";
import React from "react";
import { Pawn } from "./Pawn";

function GridBox({
  pawns,
  position,
  positionBlock,
}: {
  pawns: PawnDetails[];
  position: number;
  positionBlock: "left" | "right" | "top" | "bottom" | null;
}) {
  console.log(pawns);

  const pawnsInBox = pawns.filter(
    (pawn) =>
      pawn.position === position &&
      pawn.positionBlock &&
      pawn.positionBlock === positionBlock
  );
  return (
    <div
      className={`text-black aspect-square border-2 border-gray-700 w-full h-full grid grid-cols-${
        pawnsInBox.length > 4 ? 3 : 2
      } grid-rows-${pawnsInBox.length > 4 ? 3 : 2}`}
    >
      {position}
      {/* {pawnsInBox.map((pawn,index) => (
        <Pawn key={index} numberOfPawns={pawnsInBox.length} color={pawn.color} pavillion={false} />
      ))} */}
    </div>
  );
}

export default GridBox;
