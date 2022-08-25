import React from 'react'
import { useContext } from 'react'
import { cartContext } from './CartContextComponent'


export default function Cart() {
  const {cart, totalCount, totalToPay, deleteFromCart} = useContext(cartContext)

  return (
    <>
    {cart.map((productData)=>(
    <>
    <div>
      {productData.name + " " + productData.count}{" "}
      <button className='btn-danger' onClick={()=> deleteFromCart(productData.id)}>
      Eliminar
      </button>
   </div>
    </>
    ))}
    <div>
      Tienes {totalCount} productos en tu Carro! tu compra total es: {totalToPay}
    </div>
    </>
  )
}
