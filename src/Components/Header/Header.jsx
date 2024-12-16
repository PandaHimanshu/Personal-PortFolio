import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const [offset, setOffset] = useState(-80);

  const ToggleEvent = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setOffset(-350); // Adjusted for mobile
      } else if (window.innerWidth <= 768) {
        setOffset(-100); // Adjusted for tablets
      } else {
        setOffset(-80); // Default for desktop
      }
    };

    handleResize();

    // Set event listener for window resizing
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav>
      <a href="#home" className='logo'>Logo</a>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" role="button">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={menuOpen ? "open" : ""} id='ul'>
        <Link id='li' onClick={() => ToggleEvent()}>
          <i className={`fa-solid ${theme !== "light-theme" ? 'fa-sun' : 'fa-moon'}`}></i>
        </Link>
        <Link id='li' to="home" smooth={true} duration={500} offset={offset} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link id='li' to="about" smooth={true} duration={500} offset={offset} onClick={() => setMenuOpen(false)}>About me</Link>
        <Link id='li' to="skills" smooth={true} duration={500} offset={offset} onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link id='li' to="services" smooth={true} duration={500} offset={offset} onClick={() => setMenuOpen(false)}>Services</Link>
        <Link id='li' to="projects" smooth={true} duration={500} offset={offset} onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link id='li' to="contact" smooth={true} duration={500} offset={offset} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
