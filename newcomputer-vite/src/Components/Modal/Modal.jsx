import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';


const Modal = ({ showModal, setShowModal, orderId }) => {
    const { clearCart } = useContext(CartContext)


    return (
        <>
            {
                { showModal, orderId } &&
                <div className="modal-container">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">¡La compra fue realizada con éxito!</h3>
                                
                            </div>
                            <div className="modal-body">
                                <p>Puede hacer seguimiento del pedido con su codigo de orden: </p>
                                <p> {orderId} </p>
                            </div>
                            <div className="modal-footer">
                                <Link to='/'>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={clearCart}>Aceptar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default Modal;

