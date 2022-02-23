import React from 'react';
import { item } from './Interfaces';



function ItemCart(item : item) {


    return (
        <>
            <div className='cart__item'>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.price}$
                </div>
            </div>
        </>
    );
}
  
export default ItemCart;
  