import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './Styles.css';


const Modal = ({ showModal, setShowModal, orderId }) => {
    const { clearCart } = useContext(CartContext)


    return (
        <>
            {
                showModal, orderId &&
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-notification">
                            <h3>¡La compra fue realizada con éxito!</h3>
                            <p>Gracias por elegirnos!</p>
                            <p>Puede hacer seguimiento del pedido con su codigo de la orden:</p>
                            <p> {orderId} </p>
                        </div>
                        <div className="modal-button">
                            <Link to='/'>
                                <button className="btn-action" onClick={clearCart}>Aceptar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default Modal;