import ProductList from './components/ProductList'
import './index.css'
import NavBar from "./components/NavBar"
function App() {
    return(
    <div>
     <NavBar 
     Boton1='Inicio'
     Boton2='Juegos'
     Boton3='Contacto'>
     </NavBar>
     <ProductList/>
    </div>)
}

export default App