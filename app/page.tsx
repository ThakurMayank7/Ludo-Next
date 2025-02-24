"use client";

import Grid from "@/components/Grid";
import DiceBox from "@/components/ui/DiceBox";
import { getRandomNumber } from "@/lib/helpers";
import { PawnDetails } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [gameState, setGameState] = useState<"roll" | "playingTurn">("roll");

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

  const [turn, setTurn] = useState<"green" | "red" | "yellow" | "blue">(
    "green"
  );

  const [turnNumber, setTurnNumber] = useState<number>(0);

  const [turnListener, setTurnListener] = useState<
    "green" | "red" | "yellow" | "blue" | null
  >(null);

  const [turnPlayed, setTurnPlayed] = useState<boolean>(false);

  const checkWin = () => {};

  const playTurn = () => {

    if (turnPlayed) {
      return;
    }

    const turnNumber: number = getRandomNumber();
    setTurnNumber(turnNumber);
    setTurnPlayed(true);

git add



    setTimeout(() => {
      setTurnPlayed(false);
      console.log("Event triggered after 3 seconds!");
    }, 3000);
  };

  return (
    <div className="flex flex-row text-black">
      <div className="ml-auto flex flex-col mr-4">
        <div className="mb-auto mt-2">
          <DiceBox
            turn={turn}
            color="green"
            playTurn={playTurn}
            turnNumber={turnNumber}
          />
        </div>
        <div className="mt-auto mb-2">
          <DiceBox
            turn={turn}
            color="red"
            playTurn={playTurn}
            turnNumber={turnNumber}
          />
        </div>
      </div>
      <Grid pawns={pawns} />
      <div className="mr-auto flex flex-col ml-4">
        <div className="mb-auto mt-2">
          <DiceBox
            turn={turn}
            color="yellow"
            playTurn={playTurn}
            turnNumber={turnNumber}
          />
        </div>
        <div className="mt-auto mb-2">
          <DiceBox
            turn={turn}
            color="blue"
            playTurn={playTurn}
            turnNumber={turnNumber}
          />
        </div>
      </div>
    </div>
  );
}
