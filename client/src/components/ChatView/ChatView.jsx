import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChatView.css';
import leftArrow from '../../utils/icons/left_arrow.svg';
import sendIcon from '../../utils/icons/send.svg';
import defaultProfile from '../../utils/img/default_profile_photo.webp';

function ChatsView() {
  return (
    <div className='chat-view'>
      <div className='topbar'>
        <Link to="/MainView">
          <img src={leftArrow} alt='left arrow' />
        </Link>
        <img className='sm-profile-photo' src={defaultProfile} alt='default spongebob'/>
        <h3>spongebob</h3>
      </div>
      <div className='chat-window'>
        {chatBubble()}
        <div className='input-text'>
          <input type='text' placeholder='Type a new message' />
          <img src={sendIcon} alt='send icon' />
        </div>
      </div>
    </div>
  )
}

function chatBubble() {
  return (
    <div className='chat-bubble'>
      <p className='timestamp'>1:03 PM</p>
      <div className='chat'>
        <div className='bubble send'>
          <p>Testing chat bubble</p>
        </div>
        <img className='sm-profile-photo' src={defaultProfile} alt='default spongebob'/>
      </div>
    </div>
  )
}

export default ChatsView;