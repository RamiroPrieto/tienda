import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem, getStock } from '../helpers';
import { item } from './Interfaces';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
    
    const { idItem } = useParams();
    
    const [item, setItem] = useState<item>(  );

    // if(idItem){
    // const id : number = parseInt(idItem);
    // }

    
    useEffect( () => {
        let items : item[] = getStock(); 

        let prod : item | undefined = getItem(3 , items);

        setItem(prod);

    }, [])
    
    
    return(
        <ItemDetail producto={item} />
    )
}

export default ItemDetailContainer;