import { useState } from 'react'
import Menu from './Components/Menu'
import Main from './Components/Main'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

function App() {

 
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://toppng.com/uploads/preview/textured-backgrounds-for-websites-11553984870u603vxlgma.jpg')" }}>
      <Menu />
      <Main />
      <Experience />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
