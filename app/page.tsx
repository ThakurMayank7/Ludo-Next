'use client';

import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {

  const [darkMode,setDarkMode]=useState(true);

  const ToggleDark=()=>{
    setDarkMode(!darkMode);
  }

  return (
    <Header darkMode={darkMode} setDark={ToggleDark}/>
  );
}
