import './CartWidget.css'


const CartWidget =({addProduct})=> {
    return(
        <>
        <img className="icon" src="/CartWidgetIcon.png" alt="icono carrito"/>
        <div>
            <p>{addProduct}</p>
        </div>
        </>
        
    )
}

export default CartWidget