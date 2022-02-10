import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { item } from './Interfaces';





function Item(props : item) {
  
  const params = useParams();
  // console.log(params);

  const [link, setLink] = useState("/detail");

  useEffect( () => {
    setLink(`/detail/${props.id}`);
  })

  return (

    <div className='item'>
        <img src={props.image} alt={props.name} />
        <div>Id: {props.id}</div>
        <div>Nombre: {props.name}</div>
        <div>Descripcion: {props.description}</div>
        <div>Precio: {props.price}</div>
        <Link to={link} className='link__detalle'>Ver Detalle</Link>
    </div>
  );
}

export default Item;