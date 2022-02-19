import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemByCategory, getStock, getItems, getProductos } from '../helpers';
import { item } from './Interfaces';
import ItemList from './ItemList';



function ItemListContainer() {

  const [ocultar, setOcultar] = useState(true);
  
  const categoria = useParams();
  
  
  const [ stock  ,  setStock ] = useState<item[]>( [] );
  
  
  useEffect( () => {
     getProductos
      .then( resolve => {
          if(categoria.category){
            const items : item[] = getItemByCategory(categoria.category, resolve);
            setStock(items);
          }else{
            const items : item[] = resolve;
            setStock(items);
            
          }
      })
    
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