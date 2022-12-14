import { useState } from 'react'



const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial)

    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    return (
        <div className="card m-5">
            <div className="card-header">
                <label htmlFor="">{count}</label>
            </div>
            <div className="card-body">
                <button onClick={sumar} className="btn btn-outline-primary">+</button>
                <button onClick={restar} className="btn btn-outline-primary">-</button>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-success" onClick={() => onAdd(count)}> Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount