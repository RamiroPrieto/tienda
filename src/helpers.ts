
import { item } from "./components/Interfaces";
import { stock } from "./data/stock";

export const getStock = new Promise( (resolve, reject) => {
    const items : item[] = stock;
    resolve(items);
    reject("error, no se pudo encontrar el stock");
})


export const getItem = function( id : number , items : item[] ){
    items.forEach((item) =>{
        if(item.id === id){
            return item;
        }
    })
};  

export const getItemByCategory = function ( category : string ){
    const items : item[] = stock.filter((el) => el.category === category);
    return items;
}