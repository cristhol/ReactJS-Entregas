import React from "react";
import { useNavigate } from 'react-router-dom'



const Item = ( { prod } ) => {  
    const {id, nombre, precio, imagen} = prod
    const navigate = useNavigate()
    const goToDetails = () => {
        navigate(`/item/${id}`, {state: prod});
    }

    return (
    <div className="cardContainer">
        <div className="cardImageContainer">
            <img className="cardImage" src={require(`../../catalog/imagenes/${imagen}.jpg`)} alt={nombre} />
        </div>
        <div className="cardInfo">
            <h3 className="cardName" onClick={goToDetails}> {nombre} </h3>
            <p className="cardPrice"> $ {precio} </p>
        </div>
    </div>
    )
}

export default Item