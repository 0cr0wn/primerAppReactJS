
import './ProductItem.css'
const ProductItem = ({productData},{addProducto}) =>{
  return(
   
    <div className="col-3"> 
    <div className="card">
  
     
      <img src="./imgRE8.jpg" className="card-img-top" alt="..."/>
   <div className="card-body">
    <h5 className="card-title">{productData.titulo}</h5>
    <p className="card-text">{productData.descripcion}</p>
    <button onClick={addProducto} className="btn btn-primary">Agregar</button>
  </div>
  </div>
</div>
     
)

}

export default ProductItem