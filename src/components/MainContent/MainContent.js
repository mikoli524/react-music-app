import React from 'react'
import './css/MainContent.css'
import AppRoutes from '../../routes';

import HomePage from './HomePage/HomePage';
import Header from '../Header/Header';

function MainContent({ tab }) {
  return (
    <div className='main-content'>
      <Header />
      {tab === 'home' && <HomePage />}
      {tab === 'search' && 'search page'}
      {tab === 'library' && 'library page'}
      <AppRoutes />
    </div>
  );
}

export default MainContent;