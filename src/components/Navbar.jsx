


const NavBar = ({Boton1, Boton2, Boton3}) => {
 

 return(<div>
    <h3 onClick={()=>alert('Seccion Tulio')}>{Boton1}</h3>
    <p>Mi nombre es Tulio.</p>
    <h3 onClick={()=>alert('Seccion Desarrollador')}>{Boton2}</h3>
    <h3 onClick={()=>alert('Seccion Contacto')}>{Boton3}</h3>
  </div>
)}

export default NavBar

