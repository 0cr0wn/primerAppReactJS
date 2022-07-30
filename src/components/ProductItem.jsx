
import './ProductItem.css'
import ProductCount from './ProductCount'

const ProductItem = ({titulo,descripcion}) =>{


    return(
    <div className="card">
    
  <img src="./imgRE8.jpg" className="card-img-top" alt="..."/>
   <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{descripcion}</p>
    <button onClick={ProductCount} className="btn btn-primary">Agregar</button>
  </div>
</div>
     
)

}

export default ProductItem