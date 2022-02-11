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
        {producto?.description}
        {producto?.id}
        {producto?.name}
        {producto?.price}
        {producto?.category}
    </div>
  );
}

export default ItemDetail;