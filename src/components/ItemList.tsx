import React from 'react';
import { stock } from '../data/stock';
import Item from './Item';
import { item } from './Interfaces';

interface props{
  stock: item[];
}

function ItemList( {stock} : props) {


  return (
    <div className='itemList'>
        {stock.map((item) => <Item name={item.name} stock={item.stock} category={item.category} price={item.price} image={item.image} id={item.id} description={item.description} />)}
    </div>
  );
}

export default ItemList;