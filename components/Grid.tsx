import React from 'react'
import GridTL from './ui/GridTL';
import GridTM from './ui/GridTM';
import GridTR from './ui/GridTR';
import GridML from './ui/GridML';
import GridMM from './ui/GridMM';
import GridMR from './ui/GridMR';
import GridLL from './ui/GridLL';
import GridLM from './ui/GridLM';
import GridLR from './ui/GridLR';


type GridProps = {
  pavillion: Array<boolean>;
    // darkMode: boolean;
    // clickBlock:(block:number)=>void;
}

function Grid({pavillion}:GridProps) {
  return (
    <div className=' flex justify-center items-center p-1 md:p-2 lg:p-4 bg-gray-400'>
        <div className='grid grid-cols-3 grid-rows-3 aspect-square w-screen md:w-[50%] lg:w-[50%] gap-0.5 md:mx-auto'>
          <GridTL pavillion={pavillion[1]}/>
          <GridTM/>
          <GridTR pavillion={pavillion[2]}/>
          <GridML/>
          <GridMM/>
          <GridMR/>
          <GridLL pavillion={pavillion[0]}/>
          <GridLM/>
          <GridLR pavillion={pavillion[3]}/>
        </div>
    </div>
  )
}

export default Grid