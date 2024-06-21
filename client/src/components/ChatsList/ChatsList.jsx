import React, { useState } from 'react';
import './ChatsList.css';
import defaultProfile from '../../utils/img/default_profile_photo.webp'

function ChatsList() {
  return (
    <div className='chats-list'>
      <ChatPreview />
    </div>
  )
}

function ChatPreview() {
  return (
    <div className='list-item'>
      <div className='preview'>
        <img src={defaultProfile} alt='default spongebob'/>
        <div className='chat-info'>
          <h3>spongebob</h3>
          <p>I see you.</p>
        </div>
      </div>
      <p>Yesterday</p>
    </div>
  )
}
export default ChatsList;