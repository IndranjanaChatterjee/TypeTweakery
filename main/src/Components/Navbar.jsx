import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <header>
      <nav className='flex backdrop-blur items-center justify-center'>
        
        <FontAwesomeIcon icon={faPenNib} className='sm:text-[3rem] text-[2rem] text-[#F18805]'/>
        <h1 className='mx-[1rem] my-[0.5rem] sm:text-[3rem] text-[2rem] text-[#F18805]'>TypeTweakery</h1>
        <FontAwesomeIcon icon={faPenNib} className='sm:text-[3rem] text-[2rem] text-[#F18805]'/>
        
      </nav>
    </header>
  )
}
