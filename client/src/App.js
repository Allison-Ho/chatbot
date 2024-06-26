import React, { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import './utils/variables.css';
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import ChatsList from './components/ChatsList/ChatsList'
import ChatView from './components/ChatView/ChatView'

function App(){
  return(
    <div>
      <main>
        {/* <Navbar />
        <Searchbar />
        <ChatsList /> */}
        <ChatView />
      </main>
    </div>
  )
}

export default App;
