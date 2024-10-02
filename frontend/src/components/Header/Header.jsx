import React, { useState } from 'react';
import './header.css';
// import Logo from './path/to/your/logo.png'; // Adjust the path to your logo
// import { Logo as ReactLogo } from '../assets/images/Logo.png'; // You can use the SVG logo directly  

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full glass shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div>
          <a href="#">
            {/* Using React logo temporarily */}
            <img className="h-8" alt="React Logo" />
            {/* <img src={Logo} alt="logo" className="h-8" /> */}
          </a>
        </div>
        
        {/* Navbar Links */}
        <nav className={`md:flex space-x-6 ${isMobileMenuOpen ? 'flex' : 'hidden'} md:visible`}>
          <a href="#home" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#about" className="text-gray-800 hover:text-blue-600 transition duration-300">About</a>
          <a href="#astroventure" className="text-gray-800 hover:text-blue-600 transition duration-300">Astroventure</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</a>
        </nav>
        
        {/* Login/Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href="#login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-300">Login</a>
          <a href="#signup" className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300">Signup</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none">
            <span>☰</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
