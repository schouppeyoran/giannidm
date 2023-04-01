import React, { useEffect, useState } from 'react';
import './navbar.css';
import {images} from '../../constants';
import  {RiCloseLine, RiMenu2Line, RiDiscordFill} from 'react-icons/ri';
import {FaTwitterSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const navLinks = [
  {
    title: 'Home',
    id: '#hero'
  },
  {
    title: 'About',
    id: '#about'
  },
  {
    title: 'Portfolio',
    id: '#portfolio'
  },
  {
    title: 'Results',
    id: '#results'
  },
]

const socials = {
  twitter: 'https://twitter.com/GianniDM98',
  discord: 'Gianni#4778',
}
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#hero');

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(socials.discord);
    window.alert(`Copied Discord ID to clipboard!`);
  };

  return (
    <nav className='container'>
      <div className='app__navbar'>
        <ul className='app__navbar-links'>
          {navLinks.map((navLink) => (
            <a href={navLink.id} onClick={() => setActiveNav(`${navLink.id}`)} className={activeNav === `${navLink.id}` ? 'active' : ''}><li>{navLink.title}</li></a>
          ))}
        </ul>
        <div className="app__navbar-mobile">
        {toggleMenu
        ? <RiCloseLine onClick={() => setToggleMenu(false)} />
        : <RiMenu2Line onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='app__navbar-mobile-links-container scale-up-center'>
            <ul className='app__navbar-mobile-links'>
              {navLinks.map((navLink) => (
                <a href={navLink.id}><li>{navLink.title}</li></a>
              ))}
            </ul>
          </div>
        )}
        </div>
        <div className="app__navbar-logo">
          <h1>Gianni DM</h1>
          <h2>Content Manager</h2>
          <h2>Video Editor</h2>
        </div>
        <div className="app__navbar-socials">
          <a href={socials.twitter} target='_blank'><FaTwitterSquare/></a>
          <a href={socials.discord} onClick={handleClick}><RiDiscordFill /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar