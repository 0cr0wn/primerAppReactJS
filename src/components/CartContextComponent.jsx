import { useState, useEffect, createContext } from 'react'
export const cartContext = createContext()

export default function CartContextComponent({ children }) {
	const [cart, setCart] = useState([])
	const [totalCount, setTotalCount] = useState(0)
	const [totalToPay, setTotalToPay] = useState(0)

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('cart'))) {
			setCart(JSON.parse(localStorage.getItem('cart')))
			setTotalCount(cartLength(JSON.parse(localStorage.getItem('cart'))))
		}
	}, [])

	const addToCart = (productData, count) => {
		const cartAux = [...cart]
		let inCart = false

		for (let i = 0; i < cartAux.length; i++) {
			if (cartAux[i].id == productData.id) {
				cartAux[i].count = cartAux[i].count + count
				inCart = true
			}
		}

		if (!inCart) {
			cartAux.push({ ...productData, count })
		}

		setCart(cartAux)
		localStorage.setItem('cart', JSON.stringify(cartAux))
		setTotalCount(cartLength(cartAux))
	}

	const deleteFromCart = (id) => {
		const newCart = cart.filter((e) => e.id !== id)
		setCart(newCart)
		localStorage.setItem('cart', JSON.stringify(newCart))
		setCount(cartLength(newCart))
	}
	const deleteAllFromCart = () => {
		localStorage.setItem('cart', JSON.stringify([]))
		setCart([])
		setTotalCount([])
	}
	useEffect(() => {
		setTotalCount(cart.reduce((acc, productData) => acc + productData.count, 0))
		setTotalToPay(
			cart.reduce(
				(acc, productData) => acc + productData.count * productData.price,
				0
			)
		)
	}, [cart])

	const cartLength = (arr) => {
		return arr.reduce((sum, productData) => sum + productData.count, 0)
	}

	return (
		<cartContext.Provider
			value={{
				cart,
				addToCart,
				totalCount,
				deleteFromCart,
				totalToPay,
				deleteAllFromCart,
			}}
		>
			{children}
		</cartContext.Provider>
	)
}
