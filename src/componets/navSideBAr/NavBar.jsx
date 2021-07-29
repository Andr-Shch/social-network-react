import React from 'react';

import navi from './Navbar.module.css'
const Nav = () => {
    return (
        <nav>
        <div className={navi.item}><a href='/profile'>Profile</a></div>
        <div className={navi.item}><a href='/message'>Message</a></div>
        <div className={navi.item}><a href='/news'>News</a></div>
        <div className={navi.item}><a href='/events'>Events</a></div>
        <div className={navi.item}><a>Setings</a></div>
        
      </nav>
    )
}

export default Nav