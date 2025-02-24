"use client";

import Grid from "@/components/Grid";
import DiceBox from "@/components/ui/DiceBox";
import { getRandomNumber } from "@/lib/helpers";
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

  const [turn,setTurn] = useState<"green" | "red" | "yellow" | "blue">("green");

  const playTurn = () => {
    const turnNumber:number=getRandomNumber();
    console.log(turnNumber);
  };

  return (
    <div className="flex flex-row text-white">
      <div className="ml-auto flex flex-col mr-4">
        <div className="mb-auto mt-2">
          <DiceBox turn={turn} color="green" />
        </div>
        <div className="mt-auto mb-2">
          <DiceBox turn={turn} color="red" />
        </div>
      </div>
      <Grid pawns={pawns} />
      <div className="mr-auto flex flex-col ml-4">
        <div className="mb-auto mt-2">
          <DiceBox turn={turn} color="yellow" />
        </div>
        <div className="mt-auto mb-2">
          <DiceBox turn={turn} color="blue" />
        </div>
      </div>
    </div>
  );
}
