import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import data from "../../catalog/data.json"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [catalogo, setCatalogo] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const { state } = useLocation()

    useEffect (() => {
        const getDB = new Promise((resolve,reject) => {
            setLoading(true)
            setTimeout(() => {
                resolve(
                setCatalogo(data),
                setLoading(false)
            );
            }, 2000);
        });
        getDB.then((result) => {
            console.log('result', result)
        })
    }, []); 

    return (
        <div className="containerDetail">
            {loading ? <h3 className="loadingMessage">Cargando...</h3>
            :
            <ItemDetail item={state} />
            }
        </div> 
    )
    
} 

export default ItemDetailContainer;
