import React from 'react';
import NavBar from './NavBar';
import './Header.css'
import Carrito from './Carrito'

interface props{
  name : string;
}

function Header({ name } : props) {
  return (
    <header className="header">
       <NavBar/>
       <a href='/' className='logo'>
          {name}
       </a>
       <Carrito/>
    </header>
  );
}

export default Header;
