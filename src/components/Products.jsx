import React from 'react'

const Products = () => {
  return (
    <>

    <div className="wrapper p-5">
        <div className="itemWrapper grid grid-cols-2 items-center md:flex md:flex-wrap md:justify-center md:gap-5 md:flex-col">
            <div className="item  h-40 w-40 md:w-80 flex items-center justify-center mt-5 rounded-md shadow-md bg-gradient-to-r from-blue-200 to-cyan-200 ">
                <span className='uppercase font-mono'>ITEM</span>
            </div>
            <div className="item  h-40 w-40 md:w-80  flex items-center justify-center mt-5 rounded-md shadow-md bg-gradient-to-r from-teal-400 to-yellow-200">
                <span className='uppercase font-mono'>ITEM</span>
            </div>
            <div className="item  h-40 w-40 md:w-80   flex items-center justify-center mt-5 rounded-md shadow-md bg-gradient-to-r from-indigo-400 to-cyan-400">
                <span className='uppercase font-mono'>ITEM</span>
            </div>
            <div className="item  h-40 w-40 md:w-80  flex items-center justify-center mt-5 rounded-md shadow-md bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                <span className='uppercase font-mono'>ITEM</span>
            </div>
           
        </div>
    </div>
    
    
    </>
  )
}

export default Products
