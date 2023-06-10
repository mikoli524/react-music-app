import React, { useState } from 'react';
import './css/Header.css'

import QRCodePopup from './QRCodePopup';
import LoginButton from './LoginButton';


function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const handleLoginButtonClick = () => {
    setShowPopup(true);
  }
  const handleClosePopup = () => {
    setShowPopup(false);
  }
  return (
    <div className="header">
      <div className='router'>
        <button className='prev'>后退</button>
        <button className='next'>前进</button>
      </div>
      <div className='space' />
      <LoginButton onLogin={handleLoginButtonClick} />
      {showPopup && <QRCodePopup onClose={handleClosePopup} />}
    </div>
  );
}

export default Header;