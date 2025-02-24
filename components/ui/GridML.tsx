import React from "react";
import GridBox from "./GridBox";
import { PawnDetails } from "@/lib/types";

function GridML({ pawns }: { pawns: PawnDetails[] }) {
  return (
    <div className="grid grid-cols-6 grid-rows-3">
      <GridBox pawns={pawns} position={8} positionBlock="left" />
      <GridBox pawns={pawns} position={9} positionBlock="left" />
      <GridBox pawns={pawns} position={10} positionBlock="left" />
      <GridBox pawns={pawns} position={11} positionBlock="left" />
      <GridBox pawns={pawns} position={12} positionBlock="left" />
      <GridBox pawns={pawns} position={13} positionBlock="left" />
      <GridBox pawns={pawns} position={7} positionBlock="left" />
      <GridBox pawns={pawns} position={14} positionBlock="left" />
      <GridBox pawns={pawns} position={15} positionBlock="left" />
      <GridBox pawns={pawns} position={16} positionBlock="left" />
      <GridBox pawns={pawns} position={17} positionBlock="left" />
      <GridBox pawns={pawns} position={18} positionBlock="left" />
      <GridBox pawns={pawns} position={6} positionBlock="left" />
      <GridBox pawns={pawns} position={5} positionBlock="left" />
      <GridBox pawns={pawns} position={4} positionBlock="left" />
      <GridBox pawns={pawns} position={3} positionBlock="left" />
      <GridBox pawns={pawns} position={2} positionBlock="left" />
      <GridBox pawns={pawns} position={1} positionBlock="left" />
    </div>
  );
}

export default GridML;
