import './ProductItem.css'
import { Link } from 'react-router-dom'
const ProductItem = ({ productsData }) => {
	return (
		<div className='col-3'>
			<div className='card'>
				<img
					src={productsData.img}
					className='card-img-top'
					alt={productsData.name}
				/>
				<div className='card-body'>
					<h5 className='card-title'>{productsData.name}</h5>
					<p className='card-text'>{productsData.description}</p>
					<Link to={'/product/' + productsData.id}>
						<button id='btnDetail' className='btn btn-primary'>
							Ver Detalle
						</button>
					</Link>
					<br />
				</div>
			</div>
		</div>
	)
}

export default ProductItem
