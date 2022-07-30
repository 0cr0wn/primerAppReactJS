import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"
import './NavBar.css'
import ProductList from "./ProductList";
export default function NavBar ({Boton1, Boton2, Boton3}) {
   

 return(<div className="container-fluid">
    <h1 className="col-3">Games planet</h1>

    <div className="container col-6">
   
    <Link to={<ProductList/>} className="col-3 btnNv">{Boton1}</Link>
    
    <Link to={<ProductList/>} className="col-3 btnNv">{Boton2}</Link>
    <Link to={<ProductList/>} className="col-3 btnNv">{Boton3}</Link>
    </div>
  <CartWidget className="col-3" ></CartWidget>
  
  </div>
)}



