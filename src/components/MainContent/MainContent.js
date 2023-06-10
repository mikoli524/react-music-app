import React from 'react'
import './css/MainContent.css'
import AppRoutes from '../../routes';

import Header from '../Header/Header';

function MainContent() {
  return (
    <div className='main-content'>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default MainContent;
