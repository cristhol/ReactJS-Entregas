import { useContext, useState, createContext  } from "react";


  const CartContext = createContext ([])

 export const useCartContext = () => useContext (CartContext)

 export const CartContextProvider = ( {children} ) =>{

    const [ cartList, setCartList] = useState ([]) 

    const agregarCarrito = (product) => {
        setCartList ([... cartList, product])
    }



    return (
        <CartContext.Provider value={{
                cartList,
                agregarCarrito
        }}>
            {children}

        </CartContext.Provider>
    )
 }

