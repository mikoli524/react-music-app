import React from 'react'
import './css/MainContent.css'
import Header from '../Header/Header';
import MainRoutes from "../../routes";

function MainContent() {

  return (
    <div className='main-content'>
        <Header />
        <MainRoutes />
    </div>
  );
}

export default MainContent;
