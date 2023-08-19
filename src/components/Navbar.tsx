// Navbar.tsx
import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../Lemvigh-Müller_Logo.png'

const Navbar: React.FC = () => {

  return (
    <nav className="navbar">
      <a href="#" className="brand"><img src={Logo} height={70} width={70}/></a>
      <a href="#" className="brand"><h4 className='top-heading'>Link to GitHub</h4></a>
       
    </nav>
  );
}

export default Navbar;