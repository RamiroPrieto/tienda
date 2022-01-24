import React from 'react';
import NavBar from './NavBar';
import './Header.css'
import Carrito from './Carrito'

function Header() {
  return (
    <header className="header">
       <NavBar/>
       <a href='/' className='logo'>
           TIENDA VIRTUAL
       </a>
       <Carrito/>
    </header>
  );
}

export default Header;
