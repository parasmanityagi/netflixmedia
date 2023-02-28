import React from 'react'
import CompanyName from './SubComponent/CompanyName'
import NavMenu from './SubComponent/NavMenu'

const Footer = () => {
  return (
    <footer className='footer'>
      {/* div one for company logo */}
      <div className="footerCompanyName">
        <CompanyName />
      </div>

      {/* div two for NavMenu */}
      <div className="footerNavMenu">
        <NavMenu />
        <div className='copyRight'>Copyright all right reserved by NetflixMedia @2023</div>
      </div>

      {/* div three for social media icons */}
      <div className="socialMediaIcon">
      <span className='socialMedia'><a href="#"><i className="bi bi-instagram"></i></a></span>
      <span className='socialMedia'><a href="#"><i className="bi bi-youtube"></i></a></span>
      <span className='socialMedia'><a href="#" style={{color:'blue'}}><i className="bi bi-facebook"></i></a></span>
      <span className='socialMedia'><a href="#" style={{color:'blue'}}><i className="bi bi-linkedin"></i></a></span>
      </div>
    </footer>
  )
}

export default Footer