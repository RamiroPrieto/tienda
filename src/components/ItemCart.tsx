import React, { useContext } from 'react';
import { CarContext } from './Context';
import { item } from './Interfaces';



function ItemCart( item : item ) {


    const {cart, setCart} = useContext( CarContext );
    
    const eliminarItem = () =>{
        setCart( cart.filter((prod) => prod.id !== item.id) )
    }
  
    
    return (
        <>
            <div className='cart__item'>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.price}$
                </div>
                <button className='x_boton' onClick={eliminarItem}>X</button>
            </div>
        </>
    );
}
  
export default ItemCart;
  