import React, { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { CarContext } from "./Context";


export const Checkout = () =>{

    const {cart} = useContext(CarContext);

    
    const [total, setTotal] = useState<number>();
    
    const [ values, setValues ] = useState({
        nombre: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) =>{
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (values.nombre.length < 1) {
            alert("El nombre es demasiado corto")
        }
        if (values.email.length < 5) {
            alert("El email es demasiado corto")
        }
        if (values.tel.length < 5) {
            alert("El telefono es demasiado corto")
        }
        

        const orden = {
            comprador: {
                name: "Ramiro",
                email: "rami.mpd@gmail.com",
                tel: 123131
            },
            items: cart,
            total: total
        }
        console.log(orden)
    }

    // MINUTO 35

    useEffect(()=>{
        var tot :number = cart.reduce((acc, prod) => acc + prod.cant * prod.price, 0);
        
        setTotal(tot)
    })
    

    if(cart.length === 0){
        <Navigate to="/"/>
    }

    return(
        <div className="checkout">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' value={values.nombre} onChange={handleInputChange} name='nombre'/>
                <input type="email" placeholder='Email' value={values.email} onChange={handleInputChange} name='email'/>
                <input type="tel" placeholder='Phone' value={values.tel} onChange={handleInputChange} name='tel'/>
                <button type='submit' className=''>
                    Submit
                </button>

            </form>
        </div>
    )

}