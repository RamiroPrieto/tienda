import { type } from 'os';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStock } from '../helpers';
import { CarContext } from './Context';
import { item } from './Interfaces';
import ItemCount from './ItemCount';
import './itemDetail.css'
interface producto{
  producto ?: item ;
}


function ItemDetail( {producto} : producto ) {


  const [counter, setCounter] = useState(1);

  const { cart, setCart } = useContext(CarContext);

  const [isInCart, setIsInCart] = useState<boolean>();

  const handleItem = () => {
    const addItem = {
      id : producto.id,
      name : producto?.name,
      image : producto?.image,
      price : producto?.price, 
      category : producto?.category, 
      stock : producto?.stock,
      cant: counter
    }
    
    const found = cart.find(el => el.id === addItem.id)

    if(!found){
      setCart([...cart, addItem])
    }else{
      setIsInCart(true)
    }

  }
  
  return (
    <div className='itemDetail'>
      <img src={producto?.image} alt="" />
      <div className='itemDetail__lista'>
        <div className='itemDetail__punto'>
          Nombre del producto: {producto?.name}
        </div>
        <div className='itemDetail__punto'>
          Precio: {producto?.price}$
        </div>
        <div className='itemDetail__punto'>
          Descripcion: {producto?.description}
        </div>
        <div className='itemDetail__punto'>
          Categoria: {producto?.category}
        </div>
        <div className='itemDetail__punto'>
            <ItemCount counter={counter} setCounter={setCounter}/>
        </div>

        {
          isInCart ?
            <a href="/cart">
              Terminar mi compra
            </a>
            :
          <button
            onClick={handleItem}
          >
            Agregar al carrito
          </button>
        }

      </div>
    </div>
  );
}

export default ItemDetail;