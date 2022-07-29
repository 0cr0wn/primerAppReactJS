import CartWidget from "./CartWidget";
import {link} from "react-router-dom"
import './NavBar.css'
export default function NavBar ({Boton1, Boton2, Boton3}) {
   

 return(<div className="container-fluid">
    <h1 className="col-3">Games planet</h1>

    <ul className="container col-6">
   
    <li className="col-3" onClick={()=>alert('Seccion Inicio')}>{Boton1}</li>
    
    <li className="col-3"  onClick={()=>alert('Seccion Juegos')}>{Boton2}</li>
    <li className="col-3"  onClick={()=>alert('Seccion Contacto')}>{Boton3}</li>
  </ul>
  <CartWidget className="col-3" ></CartWidget>
  
  </div>
)}



