import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Map from './components/pages/Map';
import About from './components/pages/About';
import BookFlight from './components/pages/BookFlight';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/map' element={<Map />} />
        <Route path='/book-flight' element={<BookFlight />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;