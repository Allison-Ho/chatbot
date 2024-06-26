import React, { useState } from 'react';
import './Sidebar.css';
import defaultProfile from '../../utils/img/default_profile_photo.webp'
import { slide as Menu } from 'react-burger-menu'

function Sidebar() {
  return (
    <div id="outer-container">
      <Menu isOpen={false} width={ '75vw' } left pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <main id="page-wrap">
          <div className='profile-info'>
            <img className='med-profile-photo' src={defaultProfile} alt='default spongebob'/>
            <h2>spongebob</h2>
          </div>

          <div className='account-setting'>
            <h2></h2>
          </div>
        </main>
      </Menu>
    </div>
  );
}

export default Sidebar;