import './App.css'
import React from 'react';
import {Route, Routes} from "react-router-dom"
import Header from './components/Header/Header.jsx'; // Adjust the path according to your folder structure
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import TripForm from './pages/TripForm/TripForm.jsx';
 

function App() {
  const Layout = ({ children}) => {
    return (
      <>
        <Header />
        <div className='app__main'>
          {children}
        </div>
        
        <Footer/>
      </>
    );
  };

  return (
    <Routes>
      <Route exact path="/" element={<Layout> <Home/> </Layout>} />
      <Route exact path="/about" element={<Layout>  </Layout>} />
      <Route exact path="/contact" element={<Layout>  </Layout>} />
      <Route exact path="/astroventure" element={<Layout>  </Layout>} />
      <Route exact path="/trip/:id" element={<Layout> <TripForm/> </Layout>} />
      
    </Routes>
  ) 
}
  
export default App
