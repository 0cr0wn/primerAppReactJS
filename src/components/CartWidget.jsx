import { useContext, useEffect } from 'react'
import { cartContext } from './CartContextComponent'
import './CartWidget.css'


const CartWidget =()=> {
    const {cart, totalCount} = useContext(cartContext)
    useEffect(()=>{
        totalCount
    },[cart])
    
    
    return(
        <>
        <img className="icon" src="/CartWidgetIcon.png" alt="icono carrito"/>
         {totalCount} 
        </>
        
    )
}

export default CartWidget