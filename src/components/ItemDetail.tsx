import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStock } from '../helpers';



function ItemDetail() {

  const { idItem } = useParams();

  const [item, setItem] = useState();

  useEffect( () => {
    getStock
      .then(( res ) => 
        console.log( res )
      )
      .catch(( err ) =>
        console.log( err )
      )

  })

  return (
    <div className='itemDetail'>
        Detalle item {idItem}
    </div>
  );
}

export default ItemDetail;