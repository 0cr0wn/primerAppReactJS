 import './CartWidget.css'
 import ProductItem from './ProductItem'

const CartWidget =()=> {
    return(
        <>
        <img className="icon" src="/CartWidgetIcon.png" alt="icono carrito"/>
        <div>
            <p>{addProducto}</p>
        </div>
        </>
        
    )
}

export default CartWidget