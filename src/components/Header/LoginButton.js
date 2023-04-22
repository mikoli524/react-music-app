import React from 'react';
import '../css/LoginButton.css'

function LoginButton({ onLogin }) {
    return (
        <>
        <button className="login-button" onClick={onLogin}>
            <span className='button-inner'>登录</span>
        </button>
        </>
    );
}

export default LoginButton;