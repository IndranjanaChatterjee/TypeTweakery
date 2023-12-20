import React from "react";

export default function MainSection() {
  return (
    <div className="h-[80%] flex justify-center items-center flex-col m-2">
      <h2>Enter your text here:</h2>
      <textarea rows="10" cols="40" className="p-[0.5rem] m-[2rem]"></textarea>
    </div>
  );
}
