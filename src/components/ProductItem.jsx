import { useState } from 'react'
import './ProductItem.css'

const ProductItem = ({titulo,descripcion}) =>{
  const [addProducto,setAddProducto] = useState(0)

  const suma = () => {
    setAddProducto(addProducto + 1)
    console.log(suma)
  }

    return(
    <div className="card">
    
  <img src="./imgRE8.jpg" className="card-img-top" alt="..."/>
   <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{descripcion}</p>
    <button href="#" onClick={()=> suma()} className="btn btn-primary">Agregar</button>
  </div>
</div>
     
)

}

export default ProductItem