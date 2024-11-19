'use client';

import React from 'react'
import Toggle from './ui/Toggle'

type HeaderProps=
    {
        darkMode: boolean;
        setDark:()=>void;
    }



function Header({darkMode,setDark}:HeaderProps) {

    const setDarkMode=()=>{
        setDark();
    }

  return (
    <div className="bg-gray-600 h-20 w-screen flex">
        <span className="text-white text-6xl self-center mx-auto ">Ludo</span>

        {/* container for toggle button */}
        <div className="flex-row ml-auto self-center pr-6">
            <div className='flex self-start'>
            <Toggle setDarkMode={setDarkMode}/>
            </div>
                
            <span className='self-end'>{darkMode?"Light Mode":"Dark Mode"}</span>
        </div>

    </div>
  )
}

export default Header