
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../helpers/gfetch'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

// acciones  api -> resultado (asincrónico)

const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)
    const{id} = useParams ()
    
    useEffect(()=>{
        if (id) {
        gFetch()// consulta a un api pero solo simulación 
        // .then( respuesta => respuesta )
        .then(data => setProduct(data.filter(prod => prod.categoria ===id)))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        }    else {
        gFetch()// consulta a un api pero solo simulación 
        // .then( respuesta => respuesta )
        .then(data => setProduct(data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }
}, [id])

    console.log(products)

    return (
        <div>
        
            {   loading ? 
                    <h2>loading...</h2> 
                :
                    <ItemList products={products}/>
            }            
        
        </div>
    )
}

export default ItemListContainer
