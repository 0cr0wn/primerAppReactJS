import ProductList from './components/ProductList'
import './index.css'
import NavBar from "./components/NavBar"
import { BrowserRouter } from 'react-router-dom'
function App() {
    return(
    <BrowserRouter>
    <NavBar 
     Boton1='Inicio'
     Boton2='Juegos'
     Boton3='Contacto'>
     </NavBar>
     <Routes>
   
          <Route exact path="/" element={<ProductList/>}>
            < ProductList/>
          </Route>
    </Routes>
    </BrowserRouter>


    )
}

export default App