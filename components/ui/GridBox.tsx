import React from "react";

type GridBoxProps = {
  type: string;
};

function GridBox({ type }: GridBoxProps) {

  switch (type) {
    case "upperL":return(<h1>dfa</h1>);
      break;
    case "upperM":
      break;
    case "upperR":
      break;
    case "middleL":
      break;
    case "middleM":
      break;
    case "middleR":
      break;
    case "lowerL":
      break;
    case "lowerM":
      break;
    case "lowerR":
      break;

    default:
      break;
  }

  return <div className="bg-gray-800">{type}</div>;
}

export default GridBox;
