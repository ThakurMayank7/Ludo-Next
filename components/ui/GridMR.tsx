import React from "react";
import GridBox from "./GridBox";
import { PawnDetails } from "@/lib/types";

function GridMR({ pawns }: { pawns: PawnDetails[] }) {
  return (
    <div className="grid grid-cols-6 grid-rows-3">
      <GridBox pawns={pawns} position={1} positionBlock="top" />
      <GridBox pawns={pawns} position={2} positionBlock="top" />
      <GridBox pawns={pawns} position={3} positionBlock="top" />
      <GridBox pawns={pawns} position={4} positionBlock="top" />
      <GridBox pawns={pawns} position={5} positionBlock="top" />
      <GridBox pawns={pawns} position={6} positionBlock="top" />
      <GridBox pawns={pawns} position={18} positionBlock="top" />
      <GridBox pawns={pawns} position={17} positionBlock="top" />
      <GridBox pawns={pawns} position={16} positionBlock="top" />
      <GridBox pawns={pawns} position={15} positionBlock="top" />
      <GridBox pawns={pawns} position={14} positionBlock="top" />
      <GridBox pawns={pawns} position={7} positionBlock="top" />
      <GridBox pawns={pawns} position={13} positionBlock="top" />
      <GridBox pawns={pawns} position={12} positionBlock="top" />
      <GridBox pawns={pawns} position={11} positionBlock="top" />
      <GridBox pawns={pawns} position={10} positionBlock="top" />
      <GridBox pawns={pawns} position={9} positionBlock="top" />
      <GridBox pawns={pawns} position={8} positionBlock="top" />
    </div>
  );
}

export default GridMR;
