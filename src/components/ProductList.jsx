
import ProductItem from "./ProductItem"
import './ProductList.css'


export default function ProductList ({productData}) {  
    return(
    <div className="productList row">
   
     {productData.map((productData)=>(
       <ProductItem productData={productData} key={productData.id} /> 
     ))}  
    
    </div>
 )
 
}

