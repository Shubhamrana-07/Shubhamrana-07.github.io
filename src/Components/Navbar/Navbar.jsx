import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' />
      <img src={menu_open} alt='Menu Open' onClick={toggleMenu} className='nav-mob-open' />
      
      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <img src={menu_close} alt='Menu Close' onClick={toggleMenu} className='nav-mob-close' />
        <li><AnchorLink className="anchor-link" href='#home' onClick={() => {setMenu("home"); setIsMenuOpen(false);}}><p>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="underline" />:<></>}</li>   
        <li><AnchorLink className="anchor-link" offset={50} href='#about' onClick={() => {setMenu("about"); setIsMenuOpen(false);}}><p>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt="underline" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#services' onClick={() => {setMenu("services"); setIsMenuOpen(false);}}><p>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt="underline" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#work' onClick={() => {setMenu("work"); setIsMenuOpen(false);}}><p>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt="underline" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#contact' onClick={() => {setMenu("contact"); setIsMenuOpen(false);}}><p>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="underline" />:<></>}</li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
