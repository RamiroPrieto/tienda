import React from 'react';
import { useState } from 'react';

function NavBar() {

  //   

  const [openMenu, setOpenMenu] = useState(false);

  function abrirMenu(){
    setOpenMenu(!openMenu);
  }

  return (
    <div className="navBar">
        <button onClick={abrirMenu}>NavBar</button>
        {openMenu && 
            <ul className='menu' id='menu' >
                <li className='menu__lista'><a href="/"> Descuentos </a></li>
                <li className='menu__lista'><a href="/"> Remeras </a></li>
                <li className='menu__lista'><a href="/"> Buzos </a></li>
                <li className='menu__lista'><a href="/"> Zapatillas </a></li>
                <li className='menu__lista'><a href="/"> Contacto </a></li>
        </ul>}
    </div>  
  );
}

export default NavBar;
