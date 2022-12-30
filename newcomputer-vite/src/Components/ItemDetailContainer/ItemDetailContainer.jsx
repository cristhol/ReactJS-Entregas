import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [loading, setLoading] = useState(true)
    const [ product, setProduct ] = useState({})
    


    useEffect (() => {
        setLoading(true);
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productId)
        getDoc(queryDoc)
        .then (resp => setProduct( { id: resp.id, ...resp.data()}))
        .catch (err => console.log (err))
        .finally(() =>setLoading(false))
    } , [])


    return (
        <div className="containerDetail">
            {loading ? 
            <Loader />
            :
            <ItemDetail product= {product}/>
            }
        </div> 
        
    )
    
} 

export default ItemDetailContainer;
