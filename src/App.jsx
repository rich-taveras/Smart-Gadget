// App.jsx

import React from 'react';
import './styles/App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Navbar />
      <h2>NEW ARRIVALS</h2>
      <Products/>
      <h2>NEW ARRIVALS</h2>
      <Footer/>
    </>
  );
}

export default App;
