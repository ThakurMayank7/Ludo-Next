'use client';

import Grid from "@/components/Grid";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {

  const [darkMode,setDarkMode]=useState(true);

  const ToggleDark=()=>{
    setDarkMode(!darkMode);
  }
/*
    0-->bottom  1-->left  2-->top 3-->right

    then single from 1 to 18

    0-red 1 green 2yellow 3 blue
*/

  const [pavillion,setPavillion]=useState([
    [true,true,true,true],
    [true,true,true,true],
    [true,true,true,true],
    [true,true,true,true]]);

    const [board,setBoard]=useState(
      [[[],[]],[]]
    );


  return (
    <div>

    <Header darkMode={darkMode} setDark={ToggleDark}/>
    <Grid pavillion={pavillion}/>
    </div>
  );
}
