
import { item } from "./components/Interfaces";
import { stock } from "./data/stock";

export const getStock = ( () => {
    const items : item[] = stock;
    return items;
})


export const getItem  = function( id : number , items : item[] ){
    return items.find(item => item.id === id)
}

export const getItemByCategory = function ( category : string ){
    const items : item[] = stock.filter((el) => el.category === category);
    return items;
}

export const getItems  = function (  ){
    const items : item[] = stock;
    return items;
}