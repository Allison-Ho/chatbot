import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './utils/variables.css';
import MainView from './components/MainView/MainView';
import ChatsView from './components/ChatView/ChatView';

function App(){
  return(
    <div>
      <main>
        <Routes>
          <Route index element={<MainView />}/>
          <Route path={'/MainView'} element={<MainView />}/>
          <Route path={'/ChatView'} element={<ChatsView />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;
