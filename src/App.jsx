import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return(
    <>
    <ScrollToTop />
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/about"
            element={<AboutUs />}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App
