import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import cartIcon from '../../images/CartIcon.png';
import './CartWidget.css'

const cartWidget = () => {
    const { cartTotalItemsAmount } = useContext (CartContext)
    return (
        <div className="cartIcon">
            <img src={ cartIcon } alt="cart-icon" ></img>
            <p className="cartNotification"> { cartTotalItemsAmount() } </p>
        </div>
    )
}

export default cartWidget;

