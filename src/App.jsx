import './index.css'
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListContainer from './components/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer'

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
         <Route path="/categoria" element={<ProductListContainer/>}/>
         <Route path='/detalle' element={<ProductDetailContainer/>}/>
    </Routes>
    
    </BrowserRouter>


    )
}

export default App