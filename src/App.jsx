import './index.css'
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListContainer from './components/ProductListContainer'

function App() {

    return(
    <BrowserRouter>
   
    <NavBar 
     Boton1='Inicio'
     Boton2='Juegos'
     Boton3='Contacto'>
    
     </NavBar>
     <Routes>
    
          <Route path="/" element={<ProductListContainer/>}/>
    </Routes>
    </BrowserRouter>


    )
}

export default App