import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
export default function MainSection() {
  return (
    <div className="h-[80%] flex justify-center items-center flex-col m-2">
      <h2 className="text-[2rem] text-[#0e1428]">Enter your text here:</h2>
      <textarea rows="10" cols="40" className="p-[0.5rem] m-[2rem]"></textarea>
      <button><FontAwesomeIcon icon={faCopy} className="text-[1.5rem] hover:cursor-pointer"/></button>
      
    </div>
  );
}
