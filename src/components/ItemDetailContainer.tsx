import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { getItem } from '../helpers';
import { item } from './Interfaces';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
    
    const { idItem } = useParams();


    const [ stock  ,  setStock ] = useState<item[]>( [] );
    const [item, setItem] = useState<item>(  );

    
    
    useEffect( () => {
        const productosRef = doc(db, 'productos', idItem);
            getDoc(productosRef)
                .then((doc) => {
                    setItem({id: doc.id, ...doc.data()})
                })
            
        }, [stock])
        
        return(
        <ItemDetail producto={item} />
    )
}

export default ItemDetailContainer;