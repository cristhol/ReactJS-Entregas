import React, { useState } from "react";
import './Styles.css';

const ItemCount = ( {start, max, handleAmount} ) => {
    const [count, setCount] = useState(start);
      
    const onAdd = () => {
        if (count < max) {
            setCount(prev => prev + 1)
            handleAmount(count + 1)
        }
    }

    const onSubtract = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
            handleAmount(count - 1)
        }
    }

    return (
        <div className="ItemCountContainer">
            <h3>Cantidad</h3>
            <p>(La compra máxima es de 5 unidades)</p>
            <div className="itemCount">
                <button onClick={onSubtract} disabled={count <= 1}>-</button>
                <label> {count} </label>
                <button onClick={onAdd} disabled={count >= max}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;