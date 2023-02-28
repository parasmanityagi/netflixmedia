import React from 'react'
import { NavLink } from 'react-router-dom'

const CompanyName = () => {
    return (
        <>
            <NavLink style={{ textDecoration: "none", color: 'red' }} exact to="/"><i className="bi bi-display"></i>NetflixMedia</NavLink>
        </>
    )
}

export default CompanyName