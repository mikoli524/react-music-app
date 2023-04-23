import React from 'react'
import './css/MainContent.css'

import HomePage from './HomePage/HomePage';
import Header from '../Header/Header';

function MainContent() {
  return (
    <div className='main-content'>
      <Header />
      <HomePage />
    </div>
  );
}

export default MainContent;