import React, {useState} from "react";
import contactImage from '../images/contacto.jpg';
import iconPhone from '../images/icon-phone.png';
import iconEmail from '../images/icon-email.png';
import iconLocation from '../images/icon-location.png';
import './Contacto.css';


const Contacto = () => {
    const [submitted, setSubmitted] = useState(false);
   
    return (
        <div className="contacto-container">
            <div className="contact-image-div">
                <img src={contactImage} className="contact-image" alt="contacto"></img>
                <div className="contact-text">
                    <p>Contáctenos, nuestros agentes están esperando para asesorarlo.</p>
                    <p>También puede comunicarse directamente por Whatsapp.</p>
                </div>
            </div>
            <div className="contact-info-container">
                <div className="column">
                    <div className="row">
                        <img src={ iconPhone } className="icon" alt=""></img>
                        <h3>+54 9 2914047191</h3>
                    </div>
                    <div className="row">
                        <img src={ iconEmail } className="icon" alt=""></img>
                        <h3>info@newcomputer.com.ar</h3>
                    </div>
                    <div className="row">
                        <img src={ iconLocation } className="icon" alt=""></img>
                        <h3>Buenos Aires - Argentina</h3>
                    </div> 
                </div>
                <div className="column">
                    {submitted ?
                        <div className="submitted-container">
                            <div className="submitted-text">
                                <h3>¡Su mensaje fue enviado!</h3>
                                <p>Nos pondremos en contacto a la brevedad.</p>
                            </div>
                        </div>
                        :
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <label>Nombre</label>
                                <input></input>
                            </div>
                            <div className="form-row">
                                <label>Email</label>
                                <input type="email"></input>
                            </div>
                            <div className="form-row">
                                <label>Teléfono</label>
                                <input></input>
                            </div>
                            <div className="form-row">
                                <label>Mensaje</label>
                                <textarea rows="8"></textarea>
                            </div>
                            <button className="form-button" onClick={()=> setSubmitted(true) }>Enviar</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default Contacto;