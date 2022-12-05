import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ( {item} ) => {
    const { id, nombre, precio, caracteristicas, imagen } = item;

    return (
        <div className="itemDetailContainer">
            <div className="item">
                <div className="itemDetailImageContainer">
                    <img className="itemDetailImage" src={require(`../../catalog/imagenes/${imagen}.webp`)} alt={nombre} />
                </div>
                <div className="itemPanel">
                    <div className="itemInfo">
                        <p className="itemDetailNombre"> {nombre} </p>
                        <p className="itemDetailPrecio"> $ {precio} </p>
                    </div>
                    <div className="itemTransaction">
                        <ItemCount start={1} max={10} />
                        <button className="btn-AddToCart">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <div className="itemFeatures">

                <strong className="featuresTitle">Características: </strong>
                <p> {caracteristicas} </p>

                <strong className="featuresTitle">Para pedidos contactarse por:</strong>
                <strong className="featuresTitle">Whatsapp: +54929147203502</strong>
                <strong className="featuresTitle">Mail: info@newcomputer.com.ar</strong>
            </div>
        </div>
    )

}

export default ItemDetail;
