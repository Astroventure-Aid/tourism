import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    const isAdmin = user?.publicMetadata?.role === "admin";
    setIsAdmin(isAdmin);
  }, [isLoaded, isSignedIn, user]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className="header fixed top-0 left-0 w-full glass shadow-lg z-50 px-5">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Hamburger Menu Icon on the Left */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Hide Logo on Mobile */}
        <div className="hidden md:block">
          <a>
            <img className="" alt="LOGO" />
          </a>
        </div>

        {/* Navbar Links for Desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/">
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300">
              Home
            </span>
          </Link>
          <Link to="/">
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300">
              About
            </span>
          </Link>
          <Link to="/">
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300">
              Astroventure
            </span>
          </Link>
          {!isAdmin ? (
            <Link to="/">
              <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300">
                Contact
              </span>
            </Link>
          ) : (
            <Link to="/admin/allTrips">
              <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300">
                Dashboard
              </span>
            </Link>
          )}
        </nav>

        {/* Login Button */}
        <Link>
          <div>
            <SignedIn>
              {/* Display User Profile Icon when signed in */}
              <UserButton />
            </SignedIn>

            <SignedOut>
              {/* Display Sign-In button when not signed in */}
              <SignInButton mode="modal">
                <button className="bg-slate-600 text-white px-4 py-2 rounded-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-5 space-y-4">
          <Link to="/" onClick={handleMenuToggle}>
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300 block">
              Home
            </span>
          </Link>
          <Link to="/" onClick={handleMenuToggle}>
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300 block">
              About
            </span>
          </Link>
          <Link to="/" onClick={handleMenuToggle}>
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300 block">
              Astroventure
            </span>
          </Link>
          {!isAdmin ? (
            <Link to="/" onClick={handleMenuToggle}>
              <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300 block">
                Contact
              </span>
            </Link>
          ) : (
            <Link to="/admin/allTrips" onClick={handleMenuToggle}>
              <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300 block">
                Dashboard
              </span>
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
