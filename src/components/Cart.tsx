import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from './Context';
import ItemCart from './ItemCart';
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart() {

  const {cart} = useContext(CarContext);

  const [exist, setExist] = useState<boolean>(false);

  const [total, setTotal] = useState<number>(0);


  // console.log(cart)
  useEffect(()=>{
    if(cart.length != 0){
      setExist(true);
    }else{
      setExist(false)
    }
    var tot : number = 0;
    tot = cart.forEach((car) => tot + car.price);
    console.log(tot);
    setTotal(tot);
  }, [])



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
              Total de la compra:  $
            </div>
            <button className='cart__boton' type='submit'>
              Terminar compra
            </button>
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
  