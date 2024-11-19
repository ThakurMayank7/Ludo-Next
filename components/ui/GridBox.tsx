import React from "react";
import GridTL from "./GridTL";
import GridTM from "./GridTM";
import GridTR from "./GridTR";
import GridML from "./GridML";
import GridMM from "./GridMM";
import GridMR from "./GridMR";
import GridLL from "./GridLL";
import GridLM from "./GridLM";
import GridLR from "./GridLR";

type GridBoxProps = {
  type: string;
};

function GridBox({ type }: GridBoxProps) {

  switch (type) {
    case "upperL":return(<GridTL/>);
      break;
    case "upperM":return(<GridTM/>);
      break;
    case "upperR":return(<GridTR/>);
      break;
    case "middleL":return(<GridML/>);
      break;
    case "middleM":return(<GridMM/>);
      break;
    case "middleR":return(<GridMR/>);
      break;
    case "lowerL":return(<GridLL/>);
      break;
    case "lowerM":return(<GridLM/>);
      break;
    case "lowerR":return(<GridLR/>);
      break;

    default:
      break;
  }

  return (<span className="text-red-600">Some Error Occurred</span>);
}

export default GridBox;
