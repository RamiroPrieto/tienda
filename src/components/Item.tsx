import React from 'react';

interface item{
    name: string;
    price: Number;
    img: String;
    description: String;
    id: Number;
    image: string;
}

function Item(props : item) {
  console.log(props);

  return (

    <div className='item'>
        <img src={props.image} alt={props.name} />
        <div>Id: {props.id}</div>
        <div>Nombre: {props.name}</div>
        <div>Descripcion: {props.description}</div>
        <div>Precio: {props.price}</div>
        <button>Ver Detalle</button>
    </div>
  );
}

export default Item;