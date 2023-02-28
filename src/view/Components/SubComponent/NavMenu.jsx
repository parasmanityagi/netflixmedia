import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
    return (
        <>
            <ul>
                <li><NavLink style={{ textDecoration: "none", color: 'white' }} exact to='/' activeClassName='active_menu' classsName='menu'>Home</NavLink></li>
                <li><NavLink style={{ textDecoration: "none", color: 'white' }} exact to='/about' activeClassName='active_menu' classsName='menu'>About</NavLink></li>
                <li><NavLink style={{ textDecoration: "none", color: 'white' }} exact to='/contact' activeClassName='active_menu' classsName='menu'>Contact</NavLink></li>
                <li><NavLink style={{ textDecoration: "none", color: 'white' }} exact to='/plan' activeClassName='active_menu' classsName='menu'>Plan</NavLink></li>
                <li><NavLink style={{ textDecoration: "none", color: 'white' }} exact to='/category' activeClassName='active_menu' classsName='menu'>Category</NavLink></li>
            </ul>
        </>
    )
}

export default NavMenu