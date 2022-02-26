import React, { useContext } from 'react';
import { CarContext } from './Context';
import { item } from './Interfaces';



function ItemCart( item : item ) {


    const {cart, setCart} = useContext(CarContext);
    
    const eliminarItem = () =>{
        const array : item[] = cart.filter(cart => cart.id === item.id)
        console.log(array)
        setCart(array);
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
                <button onClick={eliminarItem}>X</button>
            </div>
        </>
    );
}
  
export default ItemCart;
  