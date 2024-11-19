import React from 'react'

function Toggle() {
  return (
    <label
      htmlFor="check"
      className=" bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full ml-auto self-center"
    >
      <input
        type="checkbox"
        id="check"
        className="sr-only peer"
        // on click
      />
      <span className="w-2/5 h-4/5 bg-cyan-200 absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-11 transition-all duration-500"></span>
    </label>
  )
}

export default Toggle