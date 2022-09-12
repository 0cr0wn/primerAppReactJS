import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ProductDetail from './ProductDetail'

export default function ProductDetailContainer() {
	const [productData, setProductData] = useState({})
	const { idProduct } = useParams()

	useEffect(() => {
		const db = getFirestore()
		const docRef = doc(db, 'products', idProduct)

		getDoc(docRef).then((product) => {
			const productItem = { ...product.data(), id: product.id }

			setProductData(productItem)
		})
	}, [idProduct])

	return (
		<>
			<ProductDetail productData={productData} />
		</>
	)
}
