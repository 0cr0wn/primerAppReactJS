import React from 'react'
import { useContext } from 'react'
import { cartContext } from './CartContextComponent'
import { Link } from 'react-router-dom'

export default function Cart() {
  const {cart, totalCount, totalToPay, deleteFromCart} = useContext(cartContext)
  if(cart.length == 0){
    return(
      <>
      <p>No tienes nada en el Carrito</p>
      <Link to='/'><button className="btn btn-primary">Ver productos</button></Link>
    </>)
    
  }
  return (
    <>
    {cart.map((productData)=>(
    
    <div key={productData.id}>
    <div className="card">
  
     <p className='bg-success col-1 m-auto'>{productData.count}</p>
  <img src={productData.img} className="card-img-top" alt={productData.name}/>
<div className="card-body">
<h5 className="card-title">{productData.name}</h5>
<p className="card-text">{productData.description}</p>
<button className='btn btn-danger' onClick={()=> deleteFromCart(productData.id)}>
      Eliminar
      </button>


</div>
</div>
      
   </div>
    
    ))}
    <div>
      Tienes {totalCount} productos en tu Carro! tu compra total es: {totalToPay}
    </div>
    <Link to='/checkout'><button className="btn btn-primary">Finalizar Compra</button></Link>
    </>
  )
}
