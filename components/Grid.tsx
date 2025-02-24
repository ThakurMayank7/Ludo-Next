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
  // clickBlock:(block:number)=>void;
};

function Grid({ pawns }: GridProps) {
  return (
    <div className="w-[90vh] aspect-square mx-auto bg-white my-1">
      <div className="h-full w-full flex flex-col">
        <div className="flex-[6] flex flex-row">
          <div className="flex-[6]">
            <GridTL pawns={pawns} />
          </div>
          <div className="flex-[3]">
            <GridTM />
          </div>
          <div className="flex-[6]">
            <GridTR pawns={pawns} />
          </div>
        </div>

        <div className="flex-[3] flex flex-row">
          <div className="flex-[6]">
            <GridML />
          </div>
          <div className="flex-[3]">
            <GridMM />
          </div>
          <div className="flex-[6]">
            <GridMR />
          </div>
        </div>

        <div className="flex-[6] text-white flex flex-row">
          <div className="flex-[6]">
            <GridLL pawns={pawns} />
          </div>
          <div className="flex-[3]">
            <GridLM />
          </div>
          <div className="flex-[6]">
            <GridLR pawns={pawns} />
          </div>
        </div>
      </div>
    </div>
    // <div className=' flex justify-center items-center p-1 md:p-2 lg:p-4'>
    //     <div className='grid grid-cols-3 grid-rows-3 aspect-square w-screen md:w-[50%] lg:w-[50%] gap-0.5 md:mx-auto'>
    //       <GridTL pavillion={pavillion[1]}/>
    //       <GridTM/>
    //       <GridTR pavillion={pavillion[2]}/>
    //       <GridML/>
    //       <GridMM/>
    //       <GridMR/>
    //       <GridLL pavillion={pavillion[0]}/>
    //       <GridLM/>
    //       <GridLR pavillion={pavillion[3]}/>
    //     </div>
    // </div>
  );
}

export default Grid;
