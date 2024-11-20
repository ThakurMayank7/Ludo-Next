import RedPawn from '@/resources/pawns/RedPawn'
import React from 'react'

type GridBlock = {
  
}

function GridLM({}:GridBlock) {
  return (
    <div className='grid grid-cols-3 grid-rows-6 items-center justify-center gap-[2px] bg-black'>
      <div className='bg-white flex flex-row w-fill h-fill'>
        <div className='w-fill h-fill flex items-center justify-center'>
        <RedPawn/>

        </div>
      <RedPawn/>
      <RedPawn/>
      <RedPawn/>
      <RedPawn/>
      </div>
      <div className='bg-white'><RedPawn/></div>
      <div className='bg-white'>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
      <div>here</div>
    </div>
  )
}

export default GridLM