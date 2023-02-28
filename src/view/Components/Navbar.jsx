import React, { useState } from 'react'
import Register from './SubComponent/Register';
import CompanyName from './SubComponent/CompanyName';
import NavMenu from './SubComponent/NavMenu';

const Navbar = () => {
    const [first, setfirst] = useState(true);
    const changeMenu = () => {
        setfirst(!first);
    }
    return (
        <>
            <nav className="navbar">
                {/* div one for company name */}
                <div className='navbar_one'>
                    <div className='companyName'>
                        <CompanyName />
                    </div>

                    {/* hamburger menu */}
                    <div className="bar" onClick={changeMenu}>
                        {first ? <i className="bi bi-list"></i> : <i className="bi bi-x"></i>}
                    </div>
                </div>

                {/* div two for navigarion menu */}
                <div className={first ? "navbar_two navbarMenuLink" : "navbar_two"}>
                    <NavMenu />

                    {/* div for login and registration */}
                    <Register />
                </div>
            </nav>
        </>
    )
}

export default Navbar