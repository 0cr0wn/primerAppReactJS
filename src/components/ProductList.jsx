import ProductItem from './ProductItem'
import './ProductList.css'

export default function ProductList({ productsData }) {
	return (
		<div className='productList row'>
			{productsData.map((productsData) => (
				<ProductItem productsData={productsData} key={productsData.id} />
			))}
		</div>
	)
}
