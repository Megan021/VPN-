// import React from 'react'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import News from './components/News'
import Subscribe from './components/Subscribe'
import About from './components/About'
import Maping from './components/Maping'
import Team from './components/Team'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <News />
    <Contact />
    <Subscribe />
    <Footer />
        <About/>
        <Maping/>
        <Team/>
    </>
  )
}

export default App
