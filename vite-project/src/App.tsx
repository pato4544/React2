import { useState } from 'react'
import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'



function App() {

  // useEfect mantiene su estado entre renderizados, no vuelve a su valor inicial, se 
  return (
    <>
      < Navbar />
      < Hero />
    </>
  )
}

export default App
