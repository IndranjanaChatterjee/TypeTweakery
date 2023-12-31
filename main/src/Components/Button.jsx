import React, { useState } from 'react';

export default function Button(props) {
  const [event,setEvent]=useState("");
  
  const UpCase=()=>
  {
    //let para=event.toUpperCase();
    setEvent(props.textsent);
    let n=event.toUpperCase();
    console.log(n);
    props.onChange(n);
  }
  return (
    <div className='flex flex-row sm:flex-col justify-center items-center w-[100%] gap-[0.4rem] sm:gap-6 flex-wrap first  w-[100%] h-[35vh] sm:w-[30%] sm:h-[100vh] flex justify-center items-center bg-[#0e1428]'>
      <button className="one text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805]  w-[10rem] text-center hover:cursor-pointer  hover:font-bold hover:text-[#0e1428] hover:bg-[#F18805] hover:rounded-2xl transition-all ease-in-out duration-[0.3s]hover:font-black" onClick={UpCase}>Upper Case</button>
      <button className="two text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805]  w-[10rem] text-center hover:cursor-pointer hover:font-bold hover:text-[#0e1428] hover:bg-[#F18805] hover:rounded-2xl transition-all ease-in-out duration-[0.3s]hover:font-black">Lower Case</button>
      <button className="thee text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805]  w-[10rem] text-center hover:cursor-pointer hover:font-bold hover:text-[#0e1428] hover:bg-[#F18805] hover:rounded-2xl transition-all ease-in-out duration-[0.3s]hover:font-black">Capitalize</button>
      <button className="four text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805]  w-[10rem] text-center hover:cursor-pointer hover:font-bold hover:text-[#0e1428] hover:bg-[#F18805] hover:rounded-2xl transition-all ease-in-out duration-[0.3s]   ">Remove spaces</button>

    </div>
    
  )
}
