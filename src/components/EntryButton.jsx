import React from 'react'
import {BrowserRouter as Router} from "react"

const EntryButton = () => {
  return (
    <>
    <div className="buttonWrapper flex justify-center">
        <button className=' text-black border border-blue-300 hover:bg-blue-300 transition-all py-2 px-12 text-center rounded-md shadow-lg mt-8'> Get Started</button>
    </div>
    
    </>
  )
}

export default EntryButton
