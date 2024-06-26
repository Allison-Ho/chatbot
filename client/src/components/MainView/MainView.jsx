import React from 'react';
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'
import ChatsList from '../ChatsList/ChatsList'

function MainView() {
  return(
    <div className='main-view'>
      <Navbar />
      <Searchbar />
      <ChatsList />
    </div>
  )
}

export default MainView;
