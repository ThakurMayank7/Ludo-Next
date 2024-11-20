import RedPawn from '@/resources/pawns/RedPawn';
import React from 'react'

type PropsPavillion={
    pavillion: Array<boolean>;
}

function GridLL({pavillion}:PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-red-700">
        <div className='bg-red-300 rounded-full m-[20%] border-red-900 border-4 flex justify-center items-center'>
        {pavillion[0]?(<RedPawn/>):""}
        </div>
        <div className='bg-red-300 rounded-full m-[20%] border-red-900 border-4 flex justify-center items-center'>
        {pavillion[1]?(<RedPawn/>):""}
        </div>
        <div className='bg-red-300 rounded-full m-[20%] border-red-900 border-4 flex justify-center items-center'>
        {pavillion[2]?(<RedPawn/>):""}
        </div>
        <div className='bg-red-300 rounded-full m-[20%] border-red-900 border-4 flex justify-center items-center'>
        {pavillion[3]?(<RedPawn/>):""}
        </div>
        
    </div>
  )
}

export default GridLL