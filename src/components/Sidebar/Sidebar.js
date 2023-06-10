import React from 'react';
import './css/Sidebar.css'
import Logo, { HomeLogo, SearchLogo, LibraryLogo, OnHomeLogo, OnSearchLogo, OnLibraryLogo,/* OnHomeLogo, OnSearchLogo, OnLibraryLogo*/ } from './Logo';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className='sidebar'>
            <Link to='/welcome'>
                <div className='logo'><Logo /></div>
            </Link>
            <NavLink to='/home' >
                {({ isActive }) => (
                    <div className='menu-item'>
                        <span className='item-ico'>
                            {isActive ? <OnHomeLogo /> : <HomeLogo />}
                        </span>
                        <span className={`${({isActive}) => isActive ? 'active' : ''} item-text`}>
                            主页
                        </span>
                    </div>
                )}
            </NavLink>
            <NavLink to='/search' >
                {({ isActive }) => (
                    <div className='menu-item'>
                        <span className='item-ico'>
                            {isActive ? <OnSearchLogo /> : <SearchLogo />}
                        </span>
                        <span className={`${({isActive}) => isActive ? 'active' : ''} item-text`}>
                            搜索
                        </span>
                    </div>
                )}
            </NavLink>
            <NavLink to='/library' >
                {({ isActive }) => (
                    <div className='menu-item'>
                        <span className='item-ico'>
                            {isActive ? <OnLibraryLogo /> : <LibraryLogo />}
                        </span>
                        <span className={`${({isActive}) => isActive ? 'active' : ''} item-text`}>
                            音乐库
                        </span>
                    </div>
                )}
            </NavLink>
        </nav>
    );
}
export default Sidebar;
