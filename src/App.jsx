import './App.css'
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import NavBar from './assets/Components/NavBar/NavBar'
import Hero from './assets/Components/Hero/Hero';
import About from './assets/Components/About/About';
import Skills from './assets/Components/Skills/Skills';
import Project from './assets/Components/Project/Project'
import Contact from './assets/Components/Contact/Contact';
import Footer from './assets/Components/Footer/Footer';
import { ThemeContext } from './context/ThemeContext'

function getInitialTheme() {
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])


return (
    <ThemeContext.Provider value={theme}>
        <div className={`theme ${theme}-theme`}>
          <NavBar 
            onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}
          />
          <div className={theme === 'dark' ? 'bgDark' : 'bgLight'}>
          <Hero />
          <About />
          <Skills />
          <Project />  
          <Contact />
          <Footer />
          </div>
        </div>
    </ThemeContext.Provider>
)
}

export default App
