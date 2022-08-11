import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom"
import './NavBar.css'

export default function NavBar ({Boton1, Boton2, Boton3}) {
   

 return(<div className="container-fluid">
    <h1 className="col-3">Games planet</h1>

    <div className="container col-6">
   
    <NavLink to='/' className="col-3 btnNv">{Boton1}</NavLink>
    
    <NavLink to='/categoria' className="col-3 btnNv">{Boton2}</NavLink>
    <NavLink to='/carrito' className="col-3 btnNv">{Boton3}</NavLink>
    </div>
  <CartWidget className="col-3" ></CartWidget>
  
  </div>
)}



