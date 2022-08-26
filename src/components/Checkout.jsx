import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { cartContext } from './CartContextComponent'
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import {Link} from 'react-router-dom'


export default function Checkout() {
 
const {totalToPay, cart, deleteAllFromCart} = useContext(cartContext)
  const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [orderId, setOrderId] = useState("")
const submitForm = () =>{
  const order = {
    buyer: {name, email, phone},
    totalToPay,
    cart
  };
  
  const db = getFirestore()
  const orders = collection(db, "orders")
  addDoc(orders, order ).then(({id}) => { 
    setOrderId(id)
    deleteAllFromCart()
    })
}

  return (
    <>
    {orderId ? ('gracias por tu compra en unos minutos sera confirmada. Tu id del pedido es:'+ orderId) : (
      <>
    <input type='text' placeholder='name' onChange={(e)=> setName(e.target.value)}/>
    <input type="email" placeholder='email' onChange={(e)=> setEmail(e.target.value)}/>
    <input type='tel' placeholder='tel' onChange={(e)=> setPhone(e.target.value)}/>
    <button onClick={submitForm}>Finalizar</button>
    </>)}
    </>
  )
}
