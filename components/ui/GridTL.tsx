import GreenPawn from '@/resources/pawns/GreenPawn';
import React from 'react'
type PropsPavillion={
    pavillion: Array<boolean>;
}
function GridTL({pavillion}:PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-green-700">
        <div className='bg-green-300 rounded-full m-[20%] border-green-900 border-4 flex justify-center items-center'>{pavillion[0]?(<GreenPawn/>):""}</div>
        <div className='bg-green-300 rounded-full m-[20%] border-green-900 border-4 flex justify-center items-center'>{pavillion[1]?(<GreenPawn/>):""}</div>
        <div className='bg-green-300 rounded-full m-[20%] border-green-900 border-4 flex justify-center items-center'>{pavillion[2]?(<GreenPawn/>):""}</div>
        <div className='bg-green-300 rounded-full m-[20%] border-green-900 border-4 flex justify-center items-center'>{pavillion[3]?(<GreenPawn/>):""}</div>
    </div>
  )
}

export default GridTL