
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ( {product} ) => {

    const {  agregarCarrito } = useCartContext()

    const onAdd = (cant) => {
        console.log('la cantidad seleccionada es:', cant)
        agregarCarrito( { ... product, cant} )
}

    return (
        <div className='container border border-3 border-primary rounded'>
            <div className='row'>
                <div className="col">
                    <img className="W-50" src={product.foto} alt='foto producto'></img>
                    <h3>nombre: {product.nombre}</h3>
                    <h3>categoria: {product.categoria}</h3>
                    <h4>precio: {product.precio}</h4>
                </div>
                <div className="col">
                <ItemCount stock={20} initial={1} onAdd={onAdd}/>
                  
                </div>
            </div>
        </div> 
    )

}

export default ItemDetail;
