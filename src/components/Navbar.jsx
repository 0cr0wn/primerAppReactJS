


export default function NavBar ({Boton1, Boton2, Boton3}) {

 return(<div>
    <ul style={{display: 'flex', margin: '10px', padding:'10px', justifyContent: 'center', listStyle: 'none'}}>
    <li style={{padding:'10px'}} onClick={()=>alert('Seccion Tulio')}>{Boton1}</li>
    <li style={{padding:'10px'}} onClick={()=>alert('Seccion Desarrollador')}>{Boton2}</li>
    <li style={{padding:'10px'}} onClick={()=>alert('Seccion Contacto')}>{Boton3}</li>
  </ul>
  </div>
)}



