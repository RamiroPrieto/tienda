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
        <button onClick={abrirMenu}>
          <svg className='hamburger' fill='white' viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </button>
        {openMenu && 
            <ul className='menu' id='menu' >
                <li key="remeras" className='menu__lista'><a href="/category/remeras"> Remeras </a></li>
                <li key="buzos" className='menu__lista'><a href="/category/buzos"> Buzos </a></li>
        </ul>}
    </div>  
  );
}

export default NavBar;
