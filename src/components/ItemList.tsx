import React from 'react';
import { stock } from '../data/stock';
import Item from './Item';



function ItemList() {


  return (
    <div className='itemList'>
        {stock.map((item) => <Item name={item.name} category={item.category} price={item.price} image={item.image} id={item.id} description={item.description} />)}
    </div>
  );
}

export default ItemList;