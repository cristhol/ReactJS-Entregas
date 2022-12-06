import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ( {product} ) => {
    const onAdd = (cant) => {
        console.log(' la cantidad seleccionada es:', cant)
    }

    return (
        <div className="container border border-3 border-primary rounded">
            <div className="row">
                <div className="col">
                    <img className="W-50" src={product.foto} alt='foto producto'></img>
                    <h3>nombre: {product.nombre}</h3>
                    <h3>categoria: {product.categoria}</h3>
                    <h4>precio: {product.precio}</h4>
                </div>
                <div clasName="col">
                    <ItemCount stock={20} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </div> 
    )

}

export default ItemDetail;
