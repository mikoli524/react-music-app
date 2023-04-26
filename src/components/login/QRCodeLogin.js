import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../config'
import QRCode from 'qrcode.react';
import './QRCodePopup.css'
const apiUrl = API_URL;

const QRCodeLogin = () => {
    const [qrKey, setQrKey] = useState('');
    const [qrUrl, setQrUrl] = useState('');
    const [qrStatus, setQrStatus] = useState('');

    useEffect(() => {
        generateQRKey();
    }, [])

    useEffect(() => {
        if (qrKey) {
            generateQRCode(qrKey);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qrKey]);

    useEffect(() => {
        if (qrStatus === 803) {
            console.log('授权登录成功');
            //在这里可以处理登录成功后的逻辑，例如保存用户信息、跳转等
        }
    }, [qrStatus]);

    //生成二维码key
    const generateQRKey = async () => {
        try {
            const response = await axios.get(`${apiUrl}/login/qr/key`);
            setQrKey(response.data.data.unikey);
        } catch (error) {
            console.error('生成二维码key出错', error);
            setQrUrl(false);
        }
    };

    //生成二维码
    const generateQRCode = async key => {
        try {
            const response = await axios.get(`${apiUrl}/login/qr/create?key=${key}`);
        setQrUrl(response.data.data.qrurl);
        checkQRCodeStatus(key);
    } catch (error) {
        console.error('生成二维码出错：', error);
        setQrUrl(false);
    }
};

const checkQRCodeStatus = async key => {
    try {
        const response = await axios.get(`${apiUrl}/login/qr/check?key=${key}`);
        setQrStatus(response.data.code);

        if (response.data.code === 800) {
            //二维码过期，重新生成
            generateQRKey();
        } else if (response.data.code === 801 || response.data.code === 802) {
            //等待扫码或待确认，继续轮询检查状态
            setTimeout(() => checkQRCodeStatus(key), 1000);
        }
    } catch (error) {
        console.error('检查二维码状态出错：', error);
        setQrUrl(false);
    }
};
return (
    <div>
        {qrUrl && <div className='qrCode'><QRCode value={qrUrl} /></div>}
        {!qrUrl &&
            <div className='qrCodeError'>
                <p>二维码获取失败</p>
                <p>请检查服务器/请求体格式</p>
            </div>
        }
        <div className='login-text'>请使用<a href='https://music.163.com/#/download'>网易云音乐APP</a>扫描二维码登录</div>
    </div >
);
};

export default QRCodeLogin;