import { useState } from "react"
import CartWidget from "./CartWidget"
import ProductItem from "./ProductItem"

export default function ProductCount(){
 
    const [addProducto,setAddProducto] = useState(0)
  const suma = () => {
    setAddProducto(addProducto++)
    
  }
  console.log({addProducto});
  return(
    <>
    <CartWidget addProducto={addProducto}/>
    <ProductItem addProducto={addProducto}/>
    </>
     
  )

}

