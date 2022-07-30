import { useState } from "react"

export default function ProductCount(){
 
    const [addProducto,setAddProducto] = useState(0)
  const suma = () => {
    setAddProducto(addProducto++)
    suma()
  }
  
}

