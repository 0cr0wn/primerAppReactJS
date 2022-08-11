import ButtonAdd from './ButtonAdd'
import './CartWidget.css'


const CartWidget =({addProducto})=> {
    const carrito = []
    return(
        <>
        <img className="icon" src="/CartWidgetIcon.png" alt="icono carrito"/>
        <div>
        <ButtonAdd carrito={carrito}/>
            <p>cantidad: {addProducto}</p>
        </div>
        </>
        
    )
}

export default CartWidget