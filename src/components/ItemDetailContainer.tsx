import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem, getStock } from '../helpers';
import { item } from './Interfaces';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
    
    const { idItem } = useParams();
    
    const [item, setItem] = useState<item>(  );

    let id : number = 0;
    
    if(idItem){
        id = parseInt(idItem);
    }
    
    useEffect( () => {
        let items : item[] = [];
        getStock.then(res =>{
            setTimeout(()=>{

                items = res; 
                let prod : item | undefined = getItem(id , items);
                
                setItem(prod);
            }, 2000)
        })
        

    }, [])
    
    
    return(
        <ItemDetail producto={item} />
    )
}

export default ItemDetailContainer;