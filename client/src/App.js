import React, { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import './utils/variables.css';
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'

function App(){
  return(
    <div>
      <main>
        <Navbar />
        <Searchbar />
      </main>
    </div>
  )
}

export default App;
