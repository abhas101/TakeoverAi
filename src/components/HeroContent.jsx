import React from "react";

const HeroContent = () => {
  return (
    <>
      <div className="wrapper md:flex md:justify-center mt-10">
        <div className="waveWrapper bg-black md:w-1/2 md:flex md:flex-col justify-center">
          <section className="HeroCallout  text-white p-10 flex justify-center mt-10">
            <p className="font-mono text-5xl flex-shrink-0">Join the WAVE</p>
            
          </section>

          <section className="button flex justify-center">
            <button className=" rounded-md px-10 p-3 font-bold uppercase mb-10  bg-gradient-to-r from-teal-400 to-yellow-200">Purchase Now</button>
          </section>
          
        </div>
      </div>
    </>
  );
};

export default HeroContent;
