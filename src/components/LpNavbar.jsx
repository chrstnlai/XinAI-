import React from 'react';
import './LpNavbar.css'; 
import Logo from '/src/assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <img src={Logo} alt="Logo" className="navlogo" />
      </ul>
    </nav>
  );
};

export default Navbar;
