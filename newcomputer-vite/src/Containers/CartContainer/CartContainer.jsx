import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const CartContainer = () => {

    const { cartList} = useCartContext()

  return (
    <div>
      {cartList.map(prod => <div key={prod.id}> 
                                      <img src={ prod.foto } alt="" />
                                      Nombre { prod.nombre } - Categoria: {prod.categoria} - Precio: {prod.precio}
                                      
                            </div>)}

    </div>
  )
}

export default CartContainer