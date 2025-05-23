import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import "../components/Navbar.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full h-20  border-zinc-700 px-4 md:px-10 flex items-center justify-between fixed top-0 bg-white z-50'>
      <div>
        <p className='uppercase text-xl md:text-2xl'>@KAY.V.H</p>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex justify-center items-center gap-3'>
        <NavLink id='nav-link' className="nav-link text-sm md:text-base font-medium py-1 px-3.5 rounded-[12px] border-1" to="/LogIn">LogIn</NavLink>
        <NavLink id='nav-link' className="nav-link text-sm md:text-base font-medium py-1 px-3.5 rounded-[12px] border-1" to="/">Home</NavLink>
        <NavLink id='nav-link' className="nav-link text-sm md:text-base font-medium py-1 px-3.5 rounded-[12px] border-1" to="/Store">Store</NavLink>
        <NavLink id='nav-link' className="nav-link text-sm md:text-base font-medium py-1 px-3.5 rounded-[12px] border-1" to="/Biography">Biography</NavLink>
        <NavLink id='nav-link' className="nav-link text-sm md:text-base font-medium py-1 px-3.5 rounded-[12px] border-1" to="/Contcat">Contcat</NavLink>
        <NavLink id='nav-link' className='border-1 py-1 px-3 bg-zinc-900 text-white rounded-[50px]'>0</NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className='md:hidden text-2xl'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='absolute top-20 left-0 w-full bg-white z-50 md:hidden shadow-lg'>
          <div className='flex flex-col p-4 gap-3'>
            <NavLink 
              id='nav-link' 
              className="nav-link text-base font-medium py-2 px-3.5 rounded-[12px] border-1" 
              to="/LogIn"
              onClick={() => setIsMenuOpen(false)}
            >
              LogIn
            </NavLink>
            <NavLink 
              id='nav-link' 
              className="nav-link text-base font-medium py-2 px-3.5 rounded-[12px] border-1" 
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              id='nav-link' 
              className="nav-link text-base font-medium py-2 px-3.5 rounded-[12px] border-1" 
              to="/Store"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </NavLink>
            <NavLink 
              id='nav-link' 
              className="nav-link text-base font-medium py-2 px-3.5 rounded-[12px] border-1" 
              to="/Biography"
              onClick={() => setIsMenuOpen(false)}
            >
              Biography
            </NavLink>
            <NavLink 
              id='nav-link' 
              className="nav-link text-base font-medium py-2 px-3.5 rounded-[12px] border-1" 
              to="/Contcat"
              onClick={() => setIsMenuOpen(false)}
            >
              Contcat
            </NavLink>
            <button className='border-1 py-2 px-3 bg-zinc-900 text-white rounded-[50px] w-fit'>0</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar