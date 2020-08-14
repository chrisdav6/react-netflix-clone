import React, { useState, useEffect } from 'react';
import netflixLogo from '../img/netflixLogo.png';
import netflixAvatar from '../img/netflixAvatar.png';

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setIsScrolling(true) : setIsScrolling(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  };

  return (
    <nav className={`Navbar ${isScrolling && 'Navbar__black'}`}>
      <img className='Navbar__logo' src={netflixLogo} alt='Netflix Logo' />
      <img
        className='Navbar__avatar'
        src={netflixAvatar}
        alt='Netflix Avatar'
      />
    </nav>
  );
};

export default Navbar;
