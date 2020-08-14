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
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  };

  return (
    <nav className='Navbar' style={{ background: isScrolling && 'black' }}>
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
