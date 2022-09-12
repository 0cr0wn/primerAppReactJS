import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductList from './ProductList'
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore'

export default function ProductListContainer() {
	const [productsData, setProductsData] = useState([])
	const { idCategory } = useParams()
	useEffect(() => {
		const db = getFirestore()
		let miCollection
		if (idCategory == undefined) {
			miCollection = collection(db, 'products')
			getDocs(miCollection).then((data) => {
				const products = data.docs.map((product) => ({
					...product.data(),
					id: product.id,
				}))

				setProductsData(products)
			})
		} else {
			miCollection = query(
				collection(db, 'products'),
				where('idCategory', '==', idCategory)
			)
			getDocs(miCollection).then((data) => {
				const products = data.docs.map((product) => ({
					...product.data(),
					id: product.id,
				}))

				setProductsData(products)
			})
		}
	}, [idCategory])

	return (
		<>
			<ProductList productsData={productsData} />
		</>
	)
}
