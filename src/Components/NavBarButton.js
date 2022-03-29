import React from 'react'
import './NavBarButton.css';

export const NavBarButton = () => {
  return (
    <div className="NavBarButtonContainer" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="450" data-aos-duration="500">
      <input type="button" className="NavBarButton" value="Contact me"/>
    </div>
  )
}

export default NavBarButton;
