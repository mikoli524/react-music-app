import React from 'react';
import '../css/Sidebar.css'
import Logo, { HomeLogo, SearchLogo, MusicStorage } from './Logo';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo'><Logo /></div>
            <div className='menu-item'><span className='item-ico'><HomeLogo /></span>主页</div>
            <div className='menu-item'><span className='item-ico'><SearchLogo /></span>搜索</div>
            <div className='menu-item'><span className='item-ico'><MusicStorage /></span>音乐库</div>
        </div>
    );
}



export default Sidebar;