import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const[theme,setTheme]=useState("light-theme");

  const ToggleEvent=()=>{
    if(theme==="dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
  }
  useEffect(()=>{
    document.body.className=theme;
  },[theme])

  return (
    <nav>
      <a href="#home" className='logo'>Logo</a>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={menuOpen ? "open" : ""} id='ul'>
        <Link  id='li' onClick={()=>ToggleEvent()}><i className={`fa-solid ${theme !== "light-theme" ? 'fa-sun' : 'fa-moon'}`}></i></Link>
        <Link  id='li' to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link  id='li' to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About me</Link>
        <Link  id='li' to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link  id='li' to="services" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Services</Link>
        <Link  id='li' to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link  id='li' to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
