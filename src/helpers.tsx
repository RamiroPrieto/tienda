import { stock } from "./data/stock"

export const getStock = new Promise( (resolve, reject) => {
    resolve(stock);
    reject("error");
})