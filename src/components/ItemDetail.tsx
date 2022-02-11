import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStock } from '../helpers';
import { item } from './Interfaces';

interface producto{
  producto ?: item ;
}


function ItemDetail( {producto} : producto ) {


  return (
    <div className='itemDetail'>
      <img src={producto?.image} alt="" />
      <div className='itemDetail__punto'>
        Nombre del producto: {producto?.name}
      </div>
      <div className='itemDetail__punto'>
        Precio: {producto?.price}
      </div>
      <div className='itemDetail__punto'>
        Descripcion: {producto?.description}
      </div>
      <div className='itemDetail__punto'>
        Categoria: {producto?.category}
      </div>
    </div>
  );
}

export default ItemDetail;