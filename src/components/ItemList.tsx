import React from 'react';
import { stock } from '../data/stock';
import Item from './Item';



function ItemList() {

  return (
    <div className='itemList'>
        {stock.map((item) => <Item name={item.nombre} price={item.precio} img={item.img} id={item.id} description={item.descripcion} image={item.img}/>)}
    </div>
  );
}

export default ItemList;