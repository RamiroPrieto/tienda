import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemByCategory, getStock, getItems } from '../helpers';
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

  const [ stock  ,  setStock ] = useState<item[]>( [] );

  
  useEffect( () => {
    if(categoria.category){
      const items : item[] = getItemByCategory(categoria.category);
      setStock(items);
    }else{
      const items : item[] = getItems();
      setStock(items);

    }
    
  }, [categoria.category])
  
  useEffect( () =>{
    // console.log(stock);

  }, [stock])
  
  
  return (
    <div className='itemContainer'>
        {ocultar && 
        <ItemList stock={stock} />}
    </div>
  );
}

export default ItemListContainer;