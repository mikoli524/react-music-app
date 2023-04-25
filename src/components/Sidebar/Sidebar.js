import React from 'react';
import './css/Sidebar.css'
import Logo, { HomeLogo, SearchLogo, LibraryLogo, OnHomeLogo, OnSearchLogo, OnLibraryLogo } from './Logo';

function Sidebar({ setTab, tab }) {
    return (
        <div className='sidebar'>
            <div className='logo'><Logo /></div>

            <div className='menu-item' onClick={() => { setTab('home') }}>
                <span className='item-ico'>
                    {tab === 'home' ? <OnHomeLogo /> : <HomeLogo />}
                </span>
                <span className={`item-text ${tab === 'home' ? 'selected' : ''}`}>主页</span>
            </div>

            <div className='menu-item' onClick={() => { setTab('search') }}>
                <span className='item-ico'>
                    {tab === 'search' ? <OnSearchLogo /> : <SearchLogo />}
                </span>
                <span className={`item-text ${tab === 'search' ? 'selected' : ''}`}>搜索</span>
            </div>

            <div className='menu-item' onClick={() => { setTab('library') }}>
                <span className='item-ico'>
                    {tab === 'library' ? <OnLibraryLogo /> : <LibraryLogo />}
                </span>
                <span className={`item-text ${tab === 'library' ? 'selected' : ''}`}>音乐库</span>
            </div>
        </div>
    );
}

export default Sidebar;
