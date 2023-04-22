import React, { useState } from 'react';
import axios from 'axios';

function PhoneLogin() {
    const [phone, setPhone] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSendCaptcha = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/captcha/send?phone=${phone}`
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setErrorMessage('验证码发送失败，请稍后重试');
        }  
    };

    const handleLogin = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/captcha/vertify?phone=${phone}&captcha=${captcha}`
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setErrorMessage('验证码不正确，请重新输入');
        }
    };

    return (
        <div>
            <div>
                <label htmlFor='phone-input'>手机号码：</label>
                <input
                    type='text'
                    id='phone-input'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
            <label htmlFor='captcha-input'>验证码：</label>
                <input
                    type='text'
                    id='captcha-input'
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                />
                <button onClick={handleSendCaptcha}>发送验证码</button>
            </div>

            {errorMessage && <div>{errorMessage}</div>}
            <button onClick={handleLogin}>登录</button>
            
        </div>

    );
}

export default PhoneLogin;