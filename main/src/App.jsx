import React,{ useState } from "react";

import "./App.css";
import MainSection from "./Components/Body";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";

function App() {
  const [info,setInfo]=useState("");
   const setdata=(data)=>
   {
    setInfo(data);
    console.log(info);
   }

  return (
    <>
      
          <Navbar />
          <MainSection onChange={setdata} send={info}/>
        
    </>
  );
}

export default App;
