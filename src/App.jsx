import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import Navbar from './components/Navbar'
import Works from './pages/Works'
import Footer from './components/Footer'

function App() {
  return (
    <div className='h-full min-h-screen kalam-bold w-full bg-cyan text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App