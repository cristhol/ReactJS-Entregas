import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext (CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (product, itemAmount) => {
        const itemQuery = cartList.findIndex(i => i.id === product.id);
        if(itemQuery > -1) {
            const currentQty = cartList[itemQuery].quantity;
            cartList.splice(itemQuery, 1);
            setCartList([...cartList, {...product, quantity: itemAmount + currentQty}]);
        } else {
            setCartList([...cartList, {...product, quantity: itemAmount}]);
        }
    }

    const isInCart = (productId) => {
        return cartList.includes((product) => product.id === productId)
    }

    const removefromCart = (productId) => {
        setCartList(cartList.filter((product) => product.id !== productId));
    }

    const clearCart = () => {
        setCartList([])
    }

    const cartTotalItemsAmount = () => {
        return cartList.length;
    }

    const cartTotalPrice = () => {
        return cartList.reduce( (acc, product) => (acc + (product.quantity * product.precio)), 0 );
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            isInCart,
            removefromCart,
            clearCart,
            cartTotalItemsAmount,
            cartTotalPrice
            }
        } >
            {children}
        </CartContext.Provider>
    )

}

