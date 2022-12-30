import React from "react";
import './Styles.css';

const Loader = () => {
    return (
        <div className="loaderContainer">
            <h3 className="loadingMessage">Cargando</h3>
            <div className="loader"></div>
        </div>
        
    )
}

export default Loader;