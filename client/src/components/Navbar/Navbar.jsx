import React, { useState } from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
import editIcon from '../../utils/icons/edit_icon.svg'

function Navbar(props) {
  return(
    <div className='navbar'>
      <Sidebar currUser={props.currUser} />
      <h1>Saved Chats</h1>
      <img className='edit-icon' src={editIcon} alt='edit icon' />
    </div>
  )
}

export default Navbar;
