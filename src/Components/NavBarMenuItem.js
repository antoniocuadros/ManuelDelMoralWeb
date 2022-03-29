import React from 'react'
import './NavBarMenuItem.css';


export const NavBarMenuItem = ({itemText, link, delay}) => {
  return (
        <a href={'#' + link} className="NavBarMenuItem" data-aos="fade-up" data-aos-easing="ease" data-aos-delay={delay}>{itemText}</a> 
  )
}
export default NavBarMenuItem;
  