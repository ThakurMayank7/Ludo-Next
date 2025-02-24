import { colorValues } from "@/lib/values";
import React from "react";

export function Pawn({ numberOfPawns,color,pavillion }: { numberOfPawns?: number ,color:'red'|'blue'|'green'|'yellow',pavillion:boolean}) {

    if(pavillion||!numberOfPawns)
{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
          <circle
            cx={20}
            cy={20}
            r={18}
            fill={colorValues[color]}
            stroke="#000000"
            strokeWidth="2"
          />
        </svg>
      );
}
  const w: number = numberOfPawns === 1 ? 40 : numberOfPawns > 4 ? 10 : 20;
  const h: number = numberOfPawns === 1 ? 40 : numberOfPawns > 4 ? 10 : 20;
  const cx: number = numberOfPawns === 1 ? 20 : numberOfPawns > 4 ? 5 : 10;
  const cy: number = numberOfPawns === 1 ? 20 : numberOfPawns > 4 ? 5 : 10;
  const r: number = numberOfPawns === 1 ? 18 : numberOfPawns > 4 ? 4 : 9;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h}>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={colorValues[color]}
        stroke="#000000"
        strokeWidth="2"
      />
    </svg>
  );
}
