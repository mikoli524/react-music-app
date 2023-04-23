import React from 'react';
import './css/Sidebar.css'
import Logo, { HomeLogo, SearchLogo, MusicStorage } from './Logo';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo'><Logo /></div>
            <div className='menu-item'><span className='item-ico'><HomeLogo /></span><span className='item-text'>主页</span></div>
            <div className='menu-item'><span className='item-ico'><SearchLogo /></span><span className='item-text'>搜索</span></div>
            <div className='menu-item'><span className='item-ico'><MusicStorage /></span><span className='item-text'>音乐库</span></div>
        </div>
    );
}

export default Sidebar;