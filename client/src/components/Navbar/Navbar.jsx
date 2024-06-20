import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Navbar.css';
import editIcon from '../../utils/icons/edit_icon.svg'

function Navbar() {
  return(
    <div className='navbar'>
      <Sidebar />
      <h1>Saved Chats</h1>
      <img className='edit-icon' src={editIcon} alt='edit icon' />
    </div>
  )
}

function Sidebar() {
  return (
    <div id="outer-container">
      <Menu isOpen={false} width={ '75vw' } left pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <main id="page-wrap">
          <h2>Test</h2>
        </main>
      </Menu>
    </div>
  );
}

export default Navbar;