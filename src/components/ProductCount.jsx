import { useState , useContext } from "react"
import { cartContext } from "./CartContextComponent"
import {Link} from 'react-router-dom'




export default function ProductCount ({productData}) {
       const [count,setCount] = useState(1)
       const [removeButton, setRemoveButton] = useState(false)
       const {cart, addToCart} = useContext(cartContext)
 const suma = ()=>{
   if(count < productData.stock)
      setCount(count + 1)
 }
 const resta = ()=>{
  if(count >= 2){
     setCount(count - 1)
}}
const onAdd = () => {
 addToCart(productData, count)
 setRemoveButton(true)
 console.log(cart);
}

  
return  <>

{removeButton ? (<>Producto Agregado!<br/>
<Link to='/'><button className="btn btn-primary">Seguir Comprando</button></Link></>
):(<><button onClick={resta} className="btn btn-danger m-2 d-inline">Eliminar</button>
<span>{count}</span>
<button onClick={suma} className="btn btn-success m-2 d-inline">Agregar</button>
<br />
<button onClick={onAdd} className='btn btn-primary m-2'>Agregar al Carrito</button></>)}
</>
}