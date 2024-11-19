'use client';

import Grid from "@/components/Grid";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {

  const [darkMode,setDarkMode]=useState(true);

  const ToggleDark=()=>{
    setDarkMode(!darkMode);
  }

  return (
    <div>

    <Header darkMode={darkMode} setDark={ToggleDark}/>
    <Grid/>
    </div>
  );
}
