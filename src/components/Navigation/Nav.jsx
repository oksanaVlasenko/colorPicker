import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return(
        <>
        <ul className="menu-main">
            <li><Link to='/' >Home</Link></li>
            <li><Link to="/color">Color Picker</Link></li>
        </ul>
        </>
    )
}

export default Nav;