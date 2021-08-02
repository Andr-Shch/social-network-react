import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import navi from './Navbar.module.css'
const Nav = () => {
    return (
        <nav>
          <div className={navi.item}>
             <NavLink to='/profile' activeClassName={navi.active}>Profile</NavLink>
         </div>
          <div className={navi.item}>
            <NavLink to='/dialogs'  activeClassName={navi.active} >Message</NavLink>
          </div>
        
        <div className={navi.item}><a href='/news'>News</a></div>
        <div className={navi.item}><a href='/events'>Events</a></div>
        <div className={navi.item}><a href='/setings'>Setings</a></div>
        
      </nav>
    )
}

export default Nav