import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemByCategory } from '../helpers';
import { item } from './Interfaces';
import ItemList from './ItemList';



function ItemListContainer() {

  const [ocultar, setOcultar] = useState(false);
  
  const categoria = useParams();
  
  // const delay = new Promise( (resolve, reject) => {
  //   setTimeout(() => {
  //       resolve('Promesa resuelta');
  //   }, 2000)
  // })
  
  // delay.then( res =>{
  //   setOcultar(true);
  // });

  const [ productos  ,  setProductos ] = useState();

  
  useEffect( () => {
    if(categoria.category){
      const items : item[] = getItemByCategory(categoria.category);
      // setProductos(items);
      console.log(items);
    }
    
  }, [])

  
  return (
    <div className='itemContainer'>
        {ocultar && 
        <ItemList   />}
    </div>
  );
}

export default ItemListContainer;