

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext.jsx";

import ItemCount from "../ItemCount/ItemCount";
import './Styles.css';


const ItemDetail = ( {product} ) => {
    const { foto, nombre, precio, caracteristicas } = product;
    const { addToCart } = useContext(CartContext);
    const [amount, setAmount] = useState(1);

    const handleAmount = num => {
        setAmount(num);
    }
    
    
    return (
        <div className="itemDetailContainer">
            <div className="item">
                <div className="itemDetailImageContainer">
                    <img className="itemDetailImage" src={foto} alt={nombre} />
                </div>
                <div className="itemPanel">
                    <div className="itemInfo">
                        <p className="itemDetailNombre"> {nombre} </p>
                        <p className="itemDetailPrecio"> {Intl.NumberFormat("es-AR", {currency: "ARS", style:"currency"}).format(precio)} </p>
                    </div>
                    <div className="itemTransaction">
                        <ItemCount start={1} max={5} handleAmount={handleAmount} />
                        <button className="btn-AddToCart" onClick={() => {addToCart(product, amount)} }>Agregar al carrito</button>
                        <Link to='/cart' >
                            <button className="btn-AddToCart"> Ir al carrito </button>
                        </Link>

                        <Link to = '/productos'>
                            <button className="btn-AddToCart">Seguir comprando</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="itemFeatures">

                <strong className="featuresTitle">Características: </strong>
                <p> {caracteristicas} </p>
            </div>
        </div>
    )

}

export default ItemDetail;