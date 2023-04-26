import React from "react";
import QRCodeLogin from '../login/QRCodeLogin'
import '../login/QRCodePopup.css';

const QRCodePopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-header">
                    登录
                </div>
                <QRCodeLogin />
                <button className="close-button" onClick={onClose}>
                    关闭
                </button>
            </div>
        </div>
    )
};

export default QRCodePopup;
