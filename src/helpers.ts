
import { item } from "./components/Interfaces";
import { stock } from "./data/stock";

export const getStock = new Promise<item[]>( (res , rej) => {
    const items : item[] = stock;
    res(items);
})

export const getProductos = new Promise<item[]>( (resolve, reject) => {
    const items : item[] = stock;
    resolve(items);
    reject("error, no se pudo encontrar el stock");
})


export const getItem  = function( id : number , items : item[] ){
    return items.find(item => item.id === id)
}

export const getItemByCategory = function ( category : string , stock : item[]){
    const items : item[] = stock.filter((el) => el.category === category);
    return items;
}

export const getItems  = function (  ){
    const items : item[] = stock;
    return items;
}
