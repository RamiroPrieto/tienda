import React from 'react';
import { useParams } from 'react-router-dom';


function ItemDetail() {

  const { id } = useParams();


  return (
    <div className='itemDetail'>
        Detalle item {id}
    </div>
  );
}

export default ItemDetail;