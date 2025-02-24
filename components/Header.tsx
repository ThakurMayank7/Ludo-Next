"use client";

import React from "react";

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-5xl py-2 text-gray-300">Ludo</h1>
      </div>
    </header>
  );
}

export default Header;
