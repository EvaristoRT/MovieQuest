import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Search from './pages/Search/Search';

function App() {
  const [darkMode, setDarkMode] = useState(true);
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
            path="/movie/:id"
            element={<MovieDetails />}
          />
          <Route 
            path="/about"
            element={<AboutUs />}
          />
          <Route 
            path='/search'
            element={<Search />}
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
