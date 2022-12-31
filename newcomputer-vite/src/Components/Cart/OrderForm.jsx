import React from "react";
import { Link } from "react-router-dom";
import './Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const OrderForm = ( {createOrder, name, setName , email, setEmail, notValid, phone, setPhone, setShowModal } ) => {

    
        return (
        <div>
            <form onSubmit={createOrder} className="form-container">
                <div className="form-entries">
                    <div className="form-field">
                        <label className="form-label" htmlFor="buyerName">Nombre <span className="form-spanRequired">*</span> </label>
                        <input required value={name} onChange={(e) => setName(e.target.value)} className="form-input" type="text" placeholder="Ingrese su nombre..."></input>    
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="buyerEmail">Correo electrónico <span className="form-spanRequired">*</span> </label>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} className={notValid ? "form-input border-red" : "form-input"}  type="email" placeholder="Ingrese su correo electrónico..." pattern="[^@\s]+@[^@\s]+\.[^@\s]+"></input>    
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="buyerPhone">Número de teléfono <span className="form-spanRequired">*</span> </label>
                        <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" type="tel" placeholder="Ingrese su teléfono..."></input>    
                    </div>
                </div>
                <div className="form-actions">
                    <Link to='/cart'>
                    <button className='btn btn-outline-primary' > ← Volver</button>
                    </Link>
                    <button type="submit" disabled={notValid} className='btn btn-outline-primary' >Confirmar</button>
                </div>
            </form> 
        </div>
    )

}

export default OrderForm;