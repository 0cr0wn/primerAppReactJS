import { useContext, useEffect } from 'react'
import { cartContext } from './CartContextComponent'
import './CartWidget.css'

const CartWidget = () => {
	const { totalCount } = useContext(cartContext)
	useEffect(() => {
		totalCount
	}, [])

	return (
		<>
			<h2 className='carrito'>🛒 {totalCount} </h2>
		</>
	)
}

export default CartWidget
