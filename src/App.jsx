import ProductList from './components/ProductList'
import './index.css'
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductCount from './components/ProductCount'
import {useState} from 'react'
function App() {

    return(
    <BrowserRouter>
    <NavBar 
     Boton1='Inicio'
     Boton2='Juegos'
     Boton3='Contacto'>
    
     </NavBar>
     <Routes>
   
          <Route path="/" element={<ProductList/>}/>
    </Routes>
    </BrowserRouter>


    )
}

export default App