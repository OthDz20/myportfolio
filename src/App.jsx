import { useState } from 'react'
import Menu from './Components/Menu'
import Main from './Components/Main'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {

 
  return (
    <div className="relative h-screen bg-cover bg-center" >
      <Menu />
      <Main />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
