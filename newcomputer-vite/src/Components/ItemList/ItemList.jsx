import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
    return (
        <div className="ItemList">
            {productos.map(prod => <Item prod={prod} key={prod.id} />)}
        </div>
    )

}

export default ItemList