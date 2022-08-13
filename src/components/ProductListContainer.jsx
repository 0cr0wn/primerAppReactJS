import { useEffect, useState } from "react"
import ProductDetailContainer from "./ProductDetailContainer"
import ProductList from "./ProductList"



export default function ProductListContainer (){
    
    const [productData, setProductData] = useState([])

    useEffect(() => {
    const products = [{id:101, titulo:'Resident Evil 8', descripcion:'Resident Evil Village es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'},
    {id:102, titulo:'Resident Evil 7', descripcion:'Resident Evil 7 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'},
    {id:103, titulo:'Resident Evil 6', descripcion:'Resident Evil 6 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'},
    {id:104, titulo:'Resident Evil 5', descripcion:'Resident Evil 5 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'},
    {id:105, titulo:'Resident Evil 4', descripcion:'Resident Evil 4 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'},
    {id:106, titulo:'Resident Evil 3', descripcion:'Resident Evil 3 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'},
    {id:107, titulo:'Resident Evil 2', descripcion:'Resident Evil Village es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'},
    {id:108, titulo:'Resident Evil 1', descripcion:'Resident Evil 1 es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom'}]



    const productItems = new Promise((res,rej)=>{
        res(products)
      
    }) 

    productItems.then((res)=>{
        setProductData(res)
    })
},[])


return (
        <div>
        <ProductList productData={productData}/>
        <ProductDetailContainer productData={productData}/>
</div>

)

}