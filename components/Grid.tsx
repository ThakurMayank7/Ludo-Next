import React from "react";
import GridTL from "./ui/GridTL";
import GridTM from "./ui/GridTM";
import GridTR from "./ui/GridTR";
import GridML from "./ui/GridML";
import GridMM from "./ui/GridMM";
import GridMR from "./ui/GridMR";
import GridLL from "./ui/GridLL";
import GridLM from "./ui/GridLM";
import GridLR from "./ui/GridLR";
import { PawnDetails } from "@/lib/types";

type GridProps = {
  pawns: PawnDetails[];
};

function Grid({ pawns }: GridProps) {
  return (
    <div className="w-[90vh] aspect-square bg-white my-1">
      <div className="h-full w-full flex flex-col">
        <div className="flex-[6] flex flex-row">
          <div className="flex-[6]">
            <GridTL pawns={pawns} />
          </div>
          <div className="flex-[3]">
            <GridTM pawns={pawns} />
          </div>
          <div className="flex-[6]">
            <GridTR pawns={pawns} />
          </div>
        </div>

        <div className="flex-[3] flex flex-row">
          <div className="flex-[6]">
            <GridML pawns={pawns} />
          </div>
          <div className="flex-[3]">
            <GridMM />
            </div>
          <div className="flex-[6]">
            <GridMR pawns={pawns} />
            </div>
        </div>

        <div className="flex-[6] text-white flex flex-row">
          <div className="flex-[6]">
            <GridLL pawns={pawns} />
          </div>
          <div className="flex-[3]">
            <GridLM pawns={pawns} />
            </div>
          <div className="flex-[6]">
            <GridLR pawns={pawns} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
