import React from "react";
import GridBox from "./GridBox";
import { PawnDetails } from "@/lib/types";

function GridLM({ pawns }: { pawns: PawnDetails[] }) {
  return (
    <div className="grid grid-cols-3 grid-rows-6">
      <GridBox pawns={pawns} position={13} positionBlock="bottom" />
      <GridBox pawns={pawns} position={18} positionBlock="bottom" />
      <GridBox pawns={pawns} position={1} positionBlock="bottom" />
      <GridBox pawns={pawns} position={12} positionBlock="bottom" />
      <GridBox pawns={pawns} position={17} positionBlock="bottom" />
      <GridBox pawns={pawns} position={2} positionBlock="bottom" />
      <GridBox pawns={pawns} position={11} positionBlock="bottom" />
      <GridBox pawns={pawns} position={16} positionBlock="bottom" />
      <GridBox pawns={pawns} position={3} positionBlock="bottom" />
      <GridBox pawns={pawns} position={10} positionBlock="bottom" />
      <GridBox pawns={pawns} position={15} positionBlock="bottom" />
      <GridBox pawns={pawns} position={4} positionBlock="bottom" />
      <GridBox pawns={pawns} position={9} positionBlock="bottom" />
      <GridBox pawns={pawns} position={14} positionBlock="bottom" />
      <GridBox pawns={pawns} position={5} positionBlock="bottom" />
      <GridBox pawns={pawns} position={8} positionBlock="bottom" />
      <GridBox pawns={pawns} position={7} positionBlock="bottom" />
      <GridBox pawns={pawns} position={6} positionBlock="bottom" />
    </div>
  );
}

export default GridLM;
