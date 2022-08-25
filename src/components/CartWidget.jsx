import { useContext, useEffect } from 'react'
import { cartContext } from './CartContextComponent'
import './CartWidget.css'


const CartWidget =()=> {
    const { totalCount} = useContext(cartContext)
    useEffect(()=>{
        totalCount
    },[])
    
    
    return(
        <>
        <img className="icon" src="/CartWidgetIcon.png" alt="icono carrito"/>
         {totalCount} 
        </>
        
    )
}

export default CartWidget