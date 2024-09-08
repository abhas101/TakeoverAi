import React from 'react'
import { House,ScanFace,Box,Car } from 'lucide-react'



const Navbar = () => {
  return (
    <>

    <div className="navbarWrapper flex justify-center">
        <div className="navbar flex bg-white/30 w-2/3 justify-evenly z-50 bottom-5 border border-slate-300 items-center px-3 py-2 rounded-md shadow-md backdrop-blur-lg mt-10 fixed opacity-95">

            <House className='navBarActive rounded-full p-1 shadow '/>
            <ScanFace/>
            <Box/>
            <Car/>

        </div>
    </div>
    
    
    </>
  )
}

export default Navbar
