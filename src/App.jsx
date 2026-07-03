import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './pages/Home/Home';

function App() {
  return(
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App
