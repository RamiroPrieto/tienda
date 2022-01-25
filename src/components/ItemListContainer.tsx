import React from 'react';

interface props{
    mensaje: string;
}

function ItemListContainer(props : props) {
  return (
    <div className='itemContainer'>
        {props.mensaje}
    </div>
  );
}

export default ItemListContainer;