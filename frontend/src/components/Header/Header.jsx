import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from '@clerk/clerk-react';

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
        <nav className="navbar">
          <Link to="/">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Home</span>
          </Link>
          <Link to="/about">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">About</span>
          </Link>
          <Link to="/astroventure">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Astroventure</span>
          </Link>
          <Link to="/contact">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</span>
          </Link>
        </nav>

        {/* Login BTN */}
        <Link>
          <div>
            <SignedIn>
              {/* Display User Profile Icon when signed in */}
              <UserButton />
            </SignedIn>

            <SignedOut>
              {/* Display Sign-In button when not signed in */}
              <SignUpButton mode="modal">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                  Sign In
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
