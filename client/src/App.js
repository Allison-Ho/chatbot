import React, { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import './utils/variables.css';
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import ChatsList from './components/ChatsList/ChatsList'


function App(){
  return(
    <div>
      <main>
        <Navbar />
        <Searchbar />
        <ChatsList />
      </main>
    </div>
  )
}

export default App;
