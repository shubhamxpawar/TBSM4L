import React from 'react'
import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './pages/Footer'
import { Lander } from './pages/Lander'
import { Bayaan } from './pages/Bayaan'
import { N } from './pages/N'
import { Nayaab } from './pages/Nayaab'
import { Lunchbreak } from './pages/Lunchbreak'
import { Kshama } from './pages/Kshama'
import { Dl91 } from './pages/Dl91'


function App() {

  const navigate = useNavigate();
  const location = useLocation()
  const showControls = location.pathname !== '/'

  return (
    <>
      
      <div className='w-full my-6 flex justify-around items-center mx-4 absolute z-10'>
        <img src="/vite.svg" alt="smlogo" className='w-14 cursor-pointer' onClick={() => navigate('/')}/>
        <Navbar />
      </div> 

      <Routes>
        <Route path="/" element={<Lander />} />
        <Route path="/bayaan" element={<Bayaan />} />
        <Route path='/N' element={<N />}></Route>
        <Route path='/Nayaab' element={<Nayaab />}></Route>
        <Route path='/Lunchbreak' element={<Lunchbreak />}></Route>
        <Route path='/Kshama' element={<Kshama />}></Route>
        <Route path='/Dl91' element={<Dl91 />}></Route>
      </Routes>

      {showControls && <Footer />}
        
    </>
  )
}

export default App
