import React from 'react';
import netflixLogo from '../img/netflixLogo.png';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <img className='Navbar__logo' src={netflixLogo} alt='Netflix Logo' />
      <img
        className='Navbar__avatar'
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='Netflix Avatar'
      />
    </nav>
  );
};

export default Navbar;
