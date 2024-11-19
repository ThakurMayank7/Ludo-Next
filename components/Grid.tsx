import React from 'react'
import GridBox from './ui/GridBox';

type GridProps = {
    darkMode: boolean;
    clickBlock:(block:number)=>void;
}

function Grid({}:GridProps) {
  return (
    <div className=' flex justify-center items-center p-1 md:p-2 lg:p-4 bg-gray-400'>
        <div className='grid grid-cols-3 grid-rows-3 aspect-square w-screen md:w-[50%] lg:w-[50%] gap-0.5 md:mx-auto'>
          <GridBox type="upperL"/>
          <GridBox type="upperM"/>
          <GridBox type="upperR"/>
          <GridBox type="middleL"/>
          <GridBox type="middleM"/>
          <GridBox type="middleR"/>
          <GridBox type="lowerL"/>
          <GridBox type="lowerM"/>
          <GridBox type="lowerR"/>
        </div>
    </div>
  )
}

export default Grid