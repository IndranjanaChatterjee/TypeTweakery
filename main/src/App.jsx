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
        <div className="second bg-indigo-700 w-[100%] h-[70vh] sm:w-[70%] sm:h-[100vh] bg-[url('./assets/notes.jpg')] bg-no-repeat bg-center bg-cover">
          <Navbar />
          <MainSection />
        </div>
        <div className="first bg-sky-500 w-[100%] h-[30vh] sm:w-[30%] sm:h-[100vh] flex justify-center items-center bg-[#0E1428]">
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
