import { useState } from 'react'
import { Routes, Route, Router } from 'react-router'
import './App.css'
import { Navbar } from './pages/Navbar'
import { Footer } from './pages/Footer'
import { Lander } from './pages/Lander'


function App() {
  return (
    <>
      <Navbar />

      hi

      <Routes>
        <Route path="/" element={<Lander />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
