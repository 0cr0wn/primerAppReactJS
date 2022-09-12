import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ Boton1, Boton2, Boton3 }) {
	return (
		<div className='container-fluid'>
			<NavLink to='/'>
				<img className='logo' src='/Logo PlanetGames.png' alt='logo' />
			</NavLink>

			<div className='container col-6'>
				<NavLink to='/' className='col-3 btnNv'>
					{Boton1}
				</NavLink>

				<NavLink to='/category' className='col-3 btnNv'>
					{Boton2}
				</NavLink>
				<NavLink to='/checkout' className='col-3 btnNv'>
					{Boton3}
				</NavLink>
			</div>
			<NavLink to='/cart'>
				<CartWidget className='col-3' />
			</NavLink>
		</div>
	)
}
