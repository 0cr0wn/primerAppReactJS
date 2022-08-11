


export default function ButtonAdd  ({suma, resta, addProducto}) {
 
   
     
    return(
  <>
  <button onClick={()=>{addProducto, suma}} className="btn btn-success">Agregar</button>
  <button onClick={()=> {addProducto, resta}} className="btn btn-danger">Eliminar</button>
  </>
    
)}