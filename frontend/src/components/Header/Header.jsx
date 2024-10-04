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

  useEffect(() => {
    const isAdmin = user?.publicMetadata?.role === "admin";
    setIsAdmin(isAdmin);
  }, [isLoaded, isSignedIn]);

  return (
    <header className=" fixed top-0 left-0 w-full glass shadow-lg z-50 px-5">
  
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div>
          <a >
            <img className="" alt="LOGO " />
          </a>
        </div>

        {/* Navbar Links */}
        <nav className="navbar">
          <Link to="/">
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300">
              Home
            </span>
          </Link>
          <Link to="/about">
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300">
              About
            </span>
          </Link>
          <Link to="/astroventure">
            <span className="text-gray font-medium text-lg hover:text-red-600 transition duration-300">
              Astroventure
            </span>
          </Link>
          {!isAdmin ? (
            <Link to="/contact">
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

        {/* Login BTN */}
        <Link>
          <div>
            <SignedIn>
              {/* Display User Profile Icon when signed in */}
              <UserButton />
            </SignedIn>

            <SignedOut>
              {/* Display Sign-In button when not signed in */}
              <SignInButton mode="modal">
                <button className=" bg-slate-600 text-white px-4 py-2 rounded-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
