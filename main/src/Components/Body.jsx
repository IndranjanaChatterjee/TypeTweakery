import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
export default function MainSection(props) {
  const [text,setText]=useState("");
  const [copytext,setCopyText]=useState(false);
  const Change=(event)=>
  {
    setText(event.target.value);
    

  }
  const [event,setEvent]=useState("");
  
  const UpCase=()=>
  {
    
    let n=text.toUpperCase();
    console.log(n);
    setText(n);
    
  }
  const LowCase=()=>
  {
    
    let n=text.toLowerCase();
    console.log(n);
    setText(n);
    
  }
  const CapCase=()=>
  {
    
    let n=text;
  
    let newtext="";
    let i;
    for(i=1;i<text.length;i++)
    {
      if(n.charAt(i)==" ")
      {
        newtext=newtext+" "+n.charAt(i+1).toUpperCase();
      }
      else if(n.charAt(i-1)!=" ")
      {
        newtext=newtext+n.charAt(i);
      }

    }
    newtext=n.charAt(0).toUpperCase()+newtext;
    
    setText(newtext);
    
  }
  const RemoveSpace=()=>
  {
    
    let n=text;
  
    let newtext="";
    let i;
    for(i=0;i<text.length;i++)
    {
      if(n.charAt(i)==" ")
      {
        continue;
      }
      else 
      {
        newtext=newtext+n.charAt(i);
      }

    }
   
    
    setText(newtext);
    
  }
  const Copy=()=>
  {
      setCopyText(true);
      navigator.clipboard.writeText(setText);
  }
  
  return (
    <>
    <div className="outer flex w-screen  flex-col sm:flex-row ">
    <div className="h-[80%] flex justify-center items-center flex-col  second  w-[100%] h-[65vh] sm:w-[70%] sm:h-[84vh] bg-[url('./assets/notes.jpg')] bg-no-repeat bg-center bg-cover">
      <h2 className="text-[2rem] text-[#0e1428]">Enter your text here:</h2>
      <textarea rows="10" cols="40" className="p-[0.5rem] m-[2rem]" value={text} onChange={Change}></textarea>
      <button onClick={Copy}><FontAwesomeIcon icon={faCopy} className="text-[1.5rem] hover:cursor-pointer"/></button>
      
    </div>
    <div className='flex flex-row sm:flex-col justify-center items-center w-[100%] gap-[0.4rem] sm:gap-6 flex-wrap first  w-[100%] h-[24.5vh] sm:w-[30%] sm:h-[84vh] flex justify-center items-center bg-[#0e1428] '>
      <button className="one text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805]  w-[10rem] text-center hover:cursor-pointer  hover:font-bold hover:text-[#0e1428] hover:bg-[#F18805] hover:rounded-2xl transition-all ease-in-out duration-[0.3s]hover:font-black" onClick={UpCase}>Upper Case</button>
      <button className="two text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805]  w-[10rem] text-center hover:cursor-pointer hover:font-bold hover:text-[#0e1428] hover:bg-[#F18805] hover:rounded-2xl transition-all ease-in-out duration-[0.3s]hover:font-black" onClick={LowCase}>Lower Case</button>
      <button className="thee text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805]  w-[10rem] text-center hover:cursor-pointer hover:font-bold hover:text-[#0e1428] hover:bg-[#F18805] hover:rounded-2xl transition-all ease-in-out duration-[0.3s]hover:font-black" onClick={CapCase}>Capitalize</button>
      <button className="four text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805]  w-[10rem] text-center hover:cursor-pointer hover:font-bold hover:text-[#0e1428] hover:bg-[#F18805] hover:rounded-2xl transition-all ease-in-out duration-[0.3s]" onClick={RemoveSpace}>Remove spaces</button>

    </div>
    </div>
    </>
    
  );
}
