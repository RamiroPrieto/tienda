import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem, getStock } from '../helpers';
import { item } from './Interfaces';



function ItemDetailContainer() {
    
    const { idItem } = useParams();
    
    const [item, setItem] = useState();

    if(idItem){
        const id : number = parseInt(idItem);
    }

    
    // const id : Number = idItem;
    
    useEffect( () => {
        getStock
        .then(( res ) => {
            console.log( typeof(res) );
        })
        .catch(( err ) =>
            console.log( err )
        )
        
        // const item : item = getItem( id , res );
    })
    
    
    return(
        <div>Hola {idItem}</div>
    )
}

export default ItemDetailContainer;