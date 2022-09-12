import ProductCount from './ProductCount'

export default function ProductDetail({ productData }) {
	return (
		<>
			<div>
				<h1 className='card-title m-3'>{productData.name}</h1>
				<p className='card-text m-3'>{productData.description}</p>
				<div
					id='carouselExampleControls'
					className='carousel slide w-50 h-50 m-5'
					data-bs-ride='carousel'
				>
					<div className='carousel-inner m-3'>
						<div className='carousel-item active'>
							<img src={productData.img} className='d-block w-100 ' alt='...' />
						</div>
						<div className='carousel-item'>
							<img
								src={productData.img2}
								className='d-block w-100 '
								alt='...'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src={productData.img3}
								className='d-block  w-100 '
								alt='...'
							/>
						</div>
					</div>
					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target='#carouselExampleControls'
						data-bs-slide='prev'
					>
						<span
							className='carousel-control-prev-icon'
							aria-hidden='true'
						></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target='#carouselExampleControls'
						data-bs-slide='next'
					>
						<span
							className='carousel-control-next-icon'
							aria-hidden='true'
						></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
				<div className=''>
					<p className='card-text m-3'>Stock: {productData.stock}</p>
					<p className='card-text m-3'>Precio: $ {productData.price}</p>
				</div>
				<ProductCount productData={productData} />
			</div>
		</>
	)
}
