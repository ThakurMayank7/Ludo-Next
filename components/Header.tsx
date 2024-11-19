import React from 'react'
import Toggle from './ui/Toggle'

function Header() {
  return (
    <div className="bg-gray-600 h-20 w-screen flex">
        <span className="text-white text-6xl self-center mx-auto ">Ludo</span>
        <Toggle/>
    </div>
  )
}

export default Header