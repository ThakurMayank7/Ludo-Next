import React from 'react'
type PropsPavillion={
    pavillion: Array<boolean>;
}
function GridLR({pavillion}:PropsPavillion) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-green-700">
        <div className='bg-green-300 rounded-full m-[20%] border-green-900 border-4'></div>
        <div className='bg-green-300 rounded-full m-[20%] border-green-900 border-4'></div>
        <div className='bg-green-300 rounded-full m-[20%] border-green-900 border-4'></div>
        <div className='bg-green-300 rounded-full m-[20%] border-green-900 border-4'></div>
    </div>
  )
}

export default GridLR