import './ItemListContainer.css'
//export const saludar = () => console.log('saludo')

//const ItemListContainer = ( { greeting } ) => {
  //return (
    //<section className='section'>ItemListContainer
        
       // <p> { greeting }</p>
    //</section>
 // )
//}

//export default ItemListContainer

import React, { useEffect, useState} from "react";
import data from "../../catalog/data.json"
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [catalogo, setCatalogo] =  useState([]);
    const [loading, setLoading] = useState(true)
    
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
        <div className="ItemListContainer">
            
            {loading ? <h3 className="loadingMessage">Cargando...</h3>
            :
            <ItemList productos={catalogo} />}
            
        </div>
    )
}

export default ItemListContainer;