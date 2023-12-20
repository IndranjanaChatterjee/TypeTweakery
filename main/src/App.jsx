import { useState } from "react";

import "./App.css";
import MainSection from "./Components/body";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="outer flex w-screen min-h-[100vh] flex-col sm:flex-row ">
        <div className="second  w-[100%] h-[65vh] sm:w-[70%] sm:h-[100vh] bg-[url('./assets/notes.jpg')] bg-no-repeat bg-center bg-cover">
          <Navbar />
          <MainSection />
        </div>
        <div className="first  w-[100%] h-[35vh] sm:w-[30%] sm:h-[100vh] flex justify-center items-center bg-[#0e1428]">
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
