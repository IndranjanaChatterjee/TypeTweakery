import React from 'react'

export default function Button() {
  return (
    <div className='flex flex-row sm:flex-col justify-center items-center w-[100%] gap-6 flex-wrap'>
      <button className="one text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805] rounded-xl w-[10rem]">Upper Case</button>
      <button className="two text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805] rounded-xl w-[10rem]">Lower Case</button>
      <button className="thee text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805] rounded-xl w-[10rem]">Capitalize</button>
      <button className="four text-[#F18805] text-lg p-2 border-2 border-solid border-[#F18805] rounded-xl w-[10rem]">Remove spaces</button>

    </div>
  )
}
