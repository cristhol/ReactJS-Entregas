import React from "react";
import Item from "../Item/Item";
import './Styles.css';

const ItemList = ({ products }) => {
    return(
        products.map((product) => <Item key={product.id } product={product} />) 
        
    );
};

export default ItemList;
