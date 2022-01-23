import React from 'react';
import NavBar from './NavBar';
import './Header.css'
import Carrito from './Carrito'

function Header() {
  return (
    <header className="header">
       <NavBar/>
       <div>
           TIENDA VIRTUAL
       </div>
       <Carrito/>
    </header>
  );
}

export default Header;
