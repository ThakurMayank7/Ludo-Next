import BluePawn from '@/resources/pawns/BluePawn';
import React from 'react'
type PropsPavillion={
    pavillion: Array<boolean>;
}
function GridLR({pavillion}:PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-blue-700">
        <div className='bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center'>{pavillion[0]?(<BluePawn/>):""}</div>
        <div className='bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center'>{pavillion[1]?(<BluePawn/>):""}</div>
        <div className='bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center'>{pavillion[2]?(<BluePawn/>):""}</div>
        <div className='bg-blue-300 rounded-full m-[20%] border-blue-900 border-4 flex justify-center items-center'>{pavillion[3]?(<BluePawn/>):""}</div>
        
    </div>
  )
}

export default GridLR