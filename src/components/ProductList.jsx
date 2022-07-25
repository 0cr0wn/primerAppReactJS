import ProductItem from "./ProductItem"
import './ProductList.css'

export default function ProductList (){    return(
    <div className="productList row">
    <div className="col-3">   
    <ProductItem
        titulo = 'Resident Evil 8'
        descripcion = 'Resident Evil Village es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'
         
        ></ProductItem>
    </div>
    <div className="col-3"> 
        <ProductItem
        titulo = 'Resident Evil 7'
        descripcion = 'Resident Evil 7 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'
         ></ProductItem>
    </div>
    <div className="col-3">   
    <ProductItem
        titulo = 'Resident Evil 6'
        descripcion = 'Resident Evil Village es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'
         
        ></ProductItem>
    </div>
    <div className="col-3"> 
        <ProductItem
        titulo = 'Resident Evil 5'
        descripcion = 'Resident Evil 7 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'
         ></ProductItem>
    </div>
    <div className="col-3">   
    <ProductItem
        titulo = 'Resident Evil 4'
        descripcion = 'Resident Evil Village es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'
         
        ></ProductItem>
    </div>
    <div className="col-3"> 
        <ProductItem
        titulo = 'Resident Evil 3'
        descripcion = 'Resident Evil 7 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'
         ></ProductItem>
    </div>
    </div>
    )
}

