import React from 'react'
import './NavBarMenuItem.css';


export const NavBarMenuItem = ({itemText, link}) => {
  return (
        <a href={'#' + link} className="NavBarMenuItem">{itemText}</a> 
  )
}
  
export default NavBarMenuItem;
  