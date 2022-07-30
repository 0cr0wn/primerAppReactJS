 import './CartWidget.css'
import ProductCount from './ProductCount'
 import ProductItem from './ProductItem'

const CartWidget =()=> {
    return(
        <>
        <img className="icon" src="/CartWidgetIcon.png" alt="icono carrito"/>
        <div>
            <p>{<ProductCount/>}</p>
        </div>
        </>
        
    )
}

export default CartWidget