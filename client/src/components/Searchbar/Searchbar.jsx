import React, { useState } from 'react';
import './Searchbar.css';
import searchIcon from '../../utils/icons/search.svg'

function Searchbar() {
  return (
    <div className='search-filter'>
      <div className='searchbar'>
        <img className='search-icon' src={searchIcon} alt='search icon'/>
        <input type='text' placeholder='Search conversations' />
      </div>
      <div className='filters'>
        <button>All chats</button>
        <button>with Friends</button>
        <button>with Chatbot</button>
      </div>
    </div>
  )
}

export default Searchbar;