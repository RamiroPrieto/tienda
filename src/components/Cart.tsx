import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from './Context';
import ItemCart from './ItemCart';
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart() {

  const {cart} = useContext(CarContext);

  const [exist, setExist] = useState<boolean>(false);

  const [total, setTotal] = useState<number>();


  // console.log(cart)
  useEffect(()=>{
    if(cart.length !==  0){
      setExist(true);
    }else{
      setExist(false)
    }

  }, [cart])
  
  useEffect(()=>{
    var tot :number = cart.reduce((acc, prod) => acc + prod.cant * prod.price, 0);
  
    setTotal(tot)
  })


  // console.log(exist)
    return (
        <>
        { exist ?
          <div className='cart'>
            <div className='cart__titulo'>
              Productos en el carrito
            </div>
            {cart.map((item) => <ItemCart name={item.name} stock={item.stock} category={item.category} price={item.price} image={item.image} id={item.id} description={item.description} />)}
            <div className='cart__titulo'>
              Total de la compra: {total} $
            </div>
            <Link to="/checkout" className='cart__boton' type='submit'>
              Terminar compra 
            </Link>
          </div>
          :
          <div className='cart__titulo'>
            
            <div>No hay items en el carro</div> 

            <Link to={"/"}>Volver al inicio</Link>
          </div>
          
        }
        
      </>
    );
}
  
export default Cart;
  