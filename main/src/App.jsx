import { useState } from 'react'

import './App.css';
import MainSection from './Components/body';
import Navbar from './Components/Navbar';
import Button from './Components/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <MainSection/>
       <Button/>
    </>
  )
}

export default App
