// this is for entry page header
import React, { useState } from "react";
import { Moon,Sun } from "lucide-react";



const EntryHeader = () => {

  const body = document.getElementById("body");
  const [DarkMode, setDarkMode] = useState(false)
  

  const handleNightMode = () => {

    setDarkMode(!DarkMode);

    if(DarkMode){
      body.classList.add("night")
    }
    else{
      body.classList.remove("night")
    }
    
  }
  return (
    <>
      <div className="headerWrapper w-full">
        <h1 className="text-2xl font-bold py-5 px-5">TakeOver AI</h1>
        
      </div>
      <div className="nighMode flex item-end justify-end px-5">
      <button onClick={handleNightMode}>{DarkMode ? <Sun/> : <Moon/>}</button>
      </div>
    </>
  );
};

export default EntryHeader;
