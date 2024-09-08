/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import Model from './Components/Model';

const App = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Model/>
    </main>
  );
};

export default App;
