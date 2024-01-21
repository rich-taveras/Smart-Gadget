// App.jsx

import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Navbar />
    
      <p className="title">Smart Gadgets</p>
      <h2>Coming Soon</h2>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
