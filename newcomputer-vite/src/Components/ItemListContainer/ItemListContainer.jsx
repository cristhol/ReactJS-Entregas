
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import './ItemListContainer.css'


// acciones  api -> resultado (asincrónico)

const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)
    const{id} = useParams ()
    
    useEffect(()=>{
    
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')

        

        if (id) {
            const queryFiltrada = query(queryCollection, where('categoria','==', id)) 
            getDocs( queryFiltrada )
            .then (data => setProduct (data.docs.map(product => ({ id: product.id , ... product.data()}) )  ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            getDocs( queryCollection )
            .then (data => setProduct (data.docs.map(product => ({ id: product.id , ... product.data()}) )  ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

}, [id] )


    return (
        <div>
        
                {loading ? 
                    <Loader />
            : 
            <div style ={{display:'flex',
                            flexDirection:'row',
                            flexWrap:'wrap'}}> 
                            
                    <ItemList products={products}/>
            </div>      
            }            
            
        </div>
    )
}

export default ItemListContainer
