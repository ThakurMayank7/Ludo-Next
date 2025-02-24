import React from 'react'

function DiceBox({color,turn}:{color:'red'|'green'|'blue'|'yellow',turn:'red'|'green'|'blue'|'yellow'}) {
  return (
    <div className={`w-20 h-20 bg-gray-200 border-2 border-gray-400 ${turn===color?"cursor-pointer":""}`}>
        
    </div>
  )
}

export default DiceBox