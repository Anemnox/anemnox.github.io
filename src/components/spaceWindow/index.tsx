import React, { useEffect, useRef, useState } from 'react';

import EarthModel from '../earth/EarthModel';
import TypeWriter from '../typewriter';

import "./style.css";


const SpaceWindow = (): JSX.Element => {
 
  return (
    <div className="relative w-full h-[90%] flex items-center">
      <div className="relative bg-gray-300 w-[85vw] h-[85vw] md:w-[55vw] md:h-[55vw] md:max-w-[65vh] md:max-h-[65vh] p-px rounded-full mx-auto shadow-2xl">
        <div className='relative bg-gradient-radial from-gray-500 from-50% to-gray-200 to-100% w-[95%] h-[95%] p-px mt-[2.5%] mx-auto rounded-full mb-12 shadow-lg'>
          <div className="porthole relative bg-black w-[95%] h-[95%] rounded-full mx-auto mt-[2.5%] overflow-hidden">
            <EarthModel className="relative w-[100%] h-[100%]" />
            <Door></Door>
          </div>
        </div>
      </div>
    </div>
  );
};


const Door = (): JSX.Element => {
  const [isOpen, openDoor]: [boolean, Function] = useState(false);

  const STYLE : React.CSSProperties = {
    position: "absolute",
    top: (isOpen ? "-100%" : "0%"),

  };

  return (
    <div style={STYLE} className='transition-[top] duration-700	delay-250 bg-gradient-radial from-gray-100 from-60% to-gray-300 to-100% flex flex-col	gap-x-0.5	content-center justify-evenly bg-white w-[100%] h-[100%] rounded-full'>
      <div className='bg-black w-3/4 p-4 text-center mx-auto rounded' >
        <TypeWriter
            className={'font-terminal text-green-500'}
            color={"green"}
            text={"Welcome Aboard!"}
            speed={100}
            isReversed={false}
            callback={() => {
            }}
          />
      </div>
      <div
        onClick={() => openDoor(true)} 
        className="relative bg-red-600 w-[10%] h-[10%] pt-1/4 rounded-full mx-auto shadow-btn cursor-pointer hover:bg-red-500 active:red-700 active:shadow-none active:top-[-0.5vw]">

      </div>
    </div>
  );
}

/*
Amongus
  <div className="relative bg-yellow-500 w-[10%] h-[15%] mx-auto rounded-t-xl overflow-">
    <div className="bg-black rounded-xl w-[80%] h-[20%] absolute top-[20%] left-[15%]">

    </div>
    <div className="bg-yellow-500 w-[20%] h-[50%] absolute top-[20%] left-[-10%] rounded-l-xl">

    </div>
    <div className="bg-white w-[20%] h-[30%] absolute top-[80%] left-[40%]">

    </div>
  </div>
*/

export default SpaceWindow;
