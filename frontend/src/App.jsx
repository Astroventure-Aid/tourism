import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from './components/Header/Header.jsx'; // Adjust the path according to your folder structure
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import TripForm from './pages/TripForm/TripForm.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import AllForms_Admin from './pages/AllForms_Admin/AllForms_Admin';
import AllTrips_Admin from './pages/AllTrips_Admin/AllTrips_Admin';

function App() {
  const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <div className='app__main'>
          {children}
        </div>
        <Footer />
      </>
    );
  };

  const { isLoaded, isSignedIn, user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const isAdmin = user?.publicMetadata?.role === 'admin';
    setIsAdmin(isAdmin)
    
  }, [isLoaded, isSignedIn])


  return (
    <Routes>
      {/* Public routes */}
      <Route exact path="/" element={<Layout> <Home /> </Layout>} />
      <Route exact path="/about" element={<Layout>  </Layout>} />
      <Route exact path="/contact" element={<Layout>  </Layout>} />
      <Route exact path="/astroventure" element={<Layout>  </Layout>} />
      <Route exact path="/trip/:tripId" element={<Layout> <TripForm /> </Layout>} />
      {
        isAdmin &&
        <Route exact path="/admin/allTrips" element={<Layout> <AllTrips_Admin /> </Layout>} />
      }
      {
        isAdmin &&
        <Route exact path="/admin/tripFroms/:tripId" element={<Layout> <AllForms_Admin /> </Layout>} />
      }

      <Route path="*" element={<Layout> <NotFound /></Layout>} /> {/* 404 Route */}
    </Routes>
  );
}

export default App;
