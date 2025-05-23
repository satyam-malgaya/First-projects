import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Store from "./Pages/Store"
import Biography from "./Pages/Biography"
import Contcat from "./Pages/Contcat"

function App() {
  return (
    <div id='mian'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Biography" element={<Biography />} />
        <Route path="/Contcat" element={<Contcat />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App