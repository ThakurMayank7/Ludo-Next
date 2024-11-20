import YellowPawn from '@/resources/pawns/YellowPawn';
import React from 'react'
type PropsPavillion={
    pavillion: Array<boolean>;
}
function GridTR({pavillion}:PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-yellow-400">
        <div className='bg-yellow-200 rounded-full m-[20%] border-yellow-900 border-4 flex justify-center items-center'>{pavillion[0]?(<YellowPawn/>):""}</div>
        <div className='bg-yellow-200 rounded-full m-[20%] border-yellow-900 border-4 flex justify-center items-center'>{pavillion[1]?(<YellowPawn/>):""}</div>
        <div className='bg-yellow-200 rounded-full m-[20%] border-yellow-900 border-4 flex justify-center items-center'>{pavillion[2]?(<YellowPawn/>):""}</div>
        <div className='bg-yellow-200 rounded-full m-[20%] border-yellow-900 border-4 flex justify-center items-center'>{pavillion[3]?(<YellowPawn/>):""}</div>
    </div>
  )
}

export default GridTR