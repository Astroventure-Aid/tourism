import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" fixed top-0 left-0 w-full glass shadow-lg z-50">
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
        <nav className="">
          <Link to="/">
            <a className="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
          </Link>
          <Link to="/about">
            <a className="text-gray-800 hover:text-blue-600 transition duration-300">About</a>
          </Link>
          <Link to="/astroventure">
            <a className="text-gray-800 hover:text-blue-600 transition duration-300">Astroventure</a>
          </Link>
          <Link to="/contact">
            <a className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</a>
          </Link>
        </nav>

        {/* Login BTN */}
        <Link to="/login">
          <button className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out">
            login/Signup
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
