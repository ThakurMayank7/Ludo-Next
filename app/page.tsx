"use client";

import Grid from "@/components/Grid";
import DiceBox from "@/components/ui/DiceBox";
import { PawnDetails } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  /*
    0-->bottom  1-->left  2-->top 3-->right

    then single from 1 to 18

    0-red 1 green 2yellow 3 blue
*/

  const [pawns, setPawns] = useState<PawnDetails[]>([
    {
      id: 1,
      win: false,
      position: 1,
      positionBlock: "top",
      color: "red",
      unlocked: false,
    },
    {
      id: 2,
      win: false,
      position: 2,
      positionBlock: "top",
      color: "red",
      unlocked: false,
    },
    {
      id: 3,
      win: false,
      position: 2,
      positionBlock: "top",
      color: "red",
      unlocked: false,
    },
    {
      id: 4,
      win: false,
      position: 3,
      positionBlock: "top",
      color: "red",
      unlocked: false,
    },
    {
      id: 1,
      win: false,
      position: 3,
      positionBlock: "top",
      color: "green",
      unlocked: false,
    },
    {
      id: 2,
      win: false,
      position: 3,
      positionBlock: "top",
      color: "green",
      unlocked: false,
    },
    {
      id: 3,
      win: false,
      position: 4,
      positionBlock: "top",
      color: "green",
      unlocked: false,
    },
    {
      id: 4,
      win: false,
      position: 4,
      positionBlock: "top",
      color: "green",
      unlocked: false,
    },
    {
      id: 1,
      win: false,
      position: 4,
      positionBlock: "top",
      color: "yellow",
      unlocked: false,
    },
    {
      id: 2,
      win: false,
      position: 4,
      positionBlock: "top",
      color: "yellow",
      unlocked: false,
    },
    {
      id: 3,
      win: false,
      position: 0,
      positionBlock: null,
      color: "yellow",
      unlocked: false,
    },
    {
      id: 4,
      win: false,
      position: 0,
      positionBlock: null,
      color: "yellow",
      unlocked: false,
    },
    {
      id: 1,
      win: false,
      position: 0,
      positionBlock: null,
      color: "blue",
      unlocked: false,
    },
    {
      id: 2,
      win: false,
      position: 0,
      positionBlock: null,
      color: "blue",
      unlocked: false,
    },
    {
      id: 3,
      win: false,
      position: 0,
      positionBlock: null,
      color: "blue",
      unlocked: false,
    },
    {
      id: 4,
      win: false,
      position: 0,
      positionBlock: null,
      color: "blue",
      unlocked: false,
    },
  ]);

  const [board, setBoard] = useState([]);

  return (
    <div className="flex flex-row text-white">
      <div className="ml-auto flex flex-col mr-4">
        <div className="mb-auto mt-2">
          <DiceBox />
        </div>
        <div className="mt-auto mb-2">
          <DiceBox />
        </div>
      </div>
      <Grid pawns={pawns} />
      <div className="mr-auto flex flex-col ml-4">
        <div className="mb-auto mt-2">
          <DiceBox />
        </div>
        <div className="mt-auto mb-2">
          <DiceBox />
        </div>
      </div>
    </div>
  );
}
