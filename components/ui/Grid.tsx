import React from 'react'

type GridProps = {
    darkMode: boolean;
    clickBlock:(block:number)=>void;
}

function Grid({}:GridProps) {
  return (
    <div>Grid</div>
  )
}

export default Grid