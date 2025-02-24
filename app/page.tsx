"use client";

import Grid from "@/components/Grid";
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
      position: 0,
      positionBlock: null,
      color: "red",
      unlocked: false,
    },
    {
      id: 2,
      win: false,
      position: 0,
      positionBlock: null,
      color: "red",
      unlocked: false,
    },
    {
      id: 3,
      win: false,
      position: 0,
      positionBlock: null,
      color: "red",
      unlocked: false,
    },
    {
      id: 4,
      win: false,
      position: 0,
      positionBlock: null,
      color: "red",
      unlocked: false,
    },
    {
      id: 1,
      win: false,
      position: 0,
      positionBlock: null,
      color: "green",
      unlocked: false,
    },
    {
      id: 2,
      win: false,
      position: 0,
      positionBlock: null,
      color: "green",
      unlocked: false,
    },
    {
      id: 3,
      win: false,
      position: 0,
      positionBlock: null,
      color: "green",
      unlocked: false,
    },
    {
      id: 4,
      win: false,
      position: 0,
      positionBlock: null,
      color: "green",
      unlocked: false,
    },
    {
      id: 1,
      win: false,
      position: 0,
      positionBlock: null,
      color: "yellow",
      unlocked: false,
    },
    {
      id: 2,
      win: false,
      position: 0,
      positionBlock: null,
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
    <div className="">
      <div className="flex-1">
        <Grid pawns={pawns} />
      </div>
    </div>
  );
}
