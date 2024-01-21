// App.jsx

import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
      <Navbar />
    
      <h1 className="title">Smart Gadgets</h1>
      <h2>Coming Soon</h2>
      <div className="card"></div>
      <p className="">
        © 2024 Smart Gadgets. All Rights Reserved.
      </p>
    </>
  );
}

export default App;
