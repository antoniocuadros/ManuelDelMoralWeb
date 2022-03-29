import React from 'react'
import './NavBarLogo.css';

export const NavBarLogo = () => {
  return (
    <a href="/#" onclick="window.location.href = 'http://example.com';" className="NavBarLogoContainerBig">
      <div className="NavBarLogoContainer">
        <p className="NavBarLogoTitle">Manuel del Moral</p>
        <p className="NavBarLogoSubTitle">Solo pianist</p>
      </div>
    </a>
  )
}

export default NavBarLogo;
