import React from 'react';
import { useState } from 'react';
import ItemList from './ItemList';


interface props{
    mensaje: string;
}

function ItemListContainer(props : props) {

  const [ocultar, setOcultar] = useState(false);
  
  
  const delay = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa resuelta');
    }, 2000)
  })
  
  delay.then( res =>{
    setOcultar(true);
  });

  return (
    <div className='itemContainer'>
        {ocultar && 
        <ItemList/>}
    </div>
  );
}

export default ItemListContainer;