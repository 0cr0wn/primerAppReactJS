import { useState } from "react"
import ButtonAdd from "./ButtonAdd"



export default function ButtonDelete () {
       const [addProducto,setAddProducto] = useState(0)
 
     const suma = ()=>{ setAddProducto(setAddProducto+1)
     }
     const resta = ()=> setAddProducto(setAddProducto-1)

return <ButtonAdd suma={suma} resta={resta} addProducto={addProducto}/>
}