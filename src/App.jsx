import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

function App() {
  return(
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/*<Home />*/}
        <AboutUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App
