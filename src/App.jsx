import React from 'react'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import AboutPage from './components/AboutPage/AboutPage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import ContactPage from './components/ContactPage/ContactPage'
import './App.css'

function App() {

  return (
    <div>
      <div className='sideNav'>
        <Header />
      </div>
      <LandingPage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </div>
  )
}

export default App
