 import { collection , getDocs , query , where } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { getItemByCategory } from '../helpers';
import { item } from './Interfaces';
import ItemList from './ItemList';



function ItemListContainer() {

  const [ocultar, setOcultar] = useState(true);
  
  const categoria = useParams();
  
  console.log(categoria)
  const [ stock  ,  setStock ] = useState<item[]>( [] );
  
  useEffect( () => {
    const productosRef = collection(db, 'productos');
    const q = categoria.category ? query(productosRef, where('category', "==", categoria.category)) : productosRef;
    getDocs(q)
      .then((resp) => {
        setStock(resp.docs.map((doc) => {
          return{
            id : doc.id,
            ...doc.data()
          }
        }));
      })



  }, [])
  
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