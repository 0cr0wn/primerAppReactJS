import { Link } from 'react-router-dom'

export default function Category() {
	return (
		<>
			<Link to={'/category/action'}>
				<div className='card col-4 row' style={{ width: '20rem' }}>
					<div className='card-body'>
						<h2 className='card-title'>Acción</h2>
						<img
							src='https://cdn.xgn.es/upload/201803/mejores-juegos-de-accion-para-pc-en-2018.jpg'
							className='card-img-top'
							alt='...'
						/>
					</div>
				</div>
			</Link>
			<Link to={'/category/horror'}>
				<div className='card col-4 ' style={{ width: '20rem' }}>
					<div className='card-body'>
						<h2 className='card-title'>Terror</h2>
						<img
							src='https://media.vandal.net/i/620x348/5-2018/201857121827_1.jpg'
							className='card-img-top'
							alt='...'
						/>
					</div>
				</div>
			</Link>
			<Link to={'/category/adventure'}>
				<div className='card col-4 ' style={{ width: '20rem' }}>
					<div className='card-body'>
						<h2 className='card-title'>Aventura</h2>
						<img
							src='https://i.blogs.es/ab965a/nintendoswitch_tlozbreathofthewild_artwork_illustration_01.0/1366_2000.jpeg'
							className='card-img-top'
							alt='...'
						/>
					</div>
				</div>
			</Link>
		</>
	)
}
