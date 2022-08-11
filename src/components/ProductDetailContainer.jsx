import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react"

export default function ProductDetailContainer  ({productData})  {
    

    return(
        
        <ProductDetail productData={productData}/>

    
    )
    }