import React from 'react';
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'
import ChatsList from '../ChatsList/ChatsList'
import LoginButton from '../Auth/Login/LoginButton';
import LogoutButton from '../Auth/Logout/LogoutButton';

function MainView(props) {
  return(
    <div className='main-view'>
      <Navbar currUser={props.user}/>
      <Searchbar />
      <ChatsList />
      <LoginButton />
      <LogoutButton />
    </div>
  )
}

export default MainView;
