import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import News from './components/News'
import Subscribe from './components/Subscribe'
import About from './components/About'
import Maping from './components/Maping'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Offer from './components/Offer'
import Services from './components/Services'
import Welcome from './components/Welcome'
import Pricing from './components/pricing'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/maping' element={<Maping />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/services' element={<Services />} />
          <Route path='/news' element={<News />} />
          <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
