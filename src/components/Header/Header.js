import React, { useState } from 'react';
import './css/Header.css'

import QRCodePopup from './QRCodePopup';
import LoginButton from './LoginButton';


function Header ({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleLoginButtonClick = () => {
    setShowPopup(true);
  }
  const handleClosePopup = () => {
    setShowPopup(false);
  }

    return(
        <div className="header">       
            {children}
            <LoginButton onLogin={handleLoginButtonClick} />
            {showPopup && <QRCodePopup onClose={handleClosePopup} />}
        </div>
    );
}

export default Header;