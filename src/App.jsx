import './index.css'
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListContainer from './components/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import CartContextComponent from './components/CartContextComponent'
import Category from './components/category'




export default function App() {


    return(
    
   <> 
   <CartContextComponent>
     <BrowserRouter>
   
       <NavBar 
        Boton1='Inicio'
        Boton2='Juegos'
        Boton3='Carrito'/>
    
     
     <Routes>
         <Route path="/" element={<ProductListContainer/>}/>
         <Route path="/category" element={<Category/>}/>
         <Route path="/category/:idCategory" element={<ProductListContainer/>}/>
         <Route path='/product/:idProduct' element={<ProductDetailContainer/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
    
     </BrowserRouter>
    </CartContextComponent>
 </>

    )
}

