import  { useEffect, useState } from "react"

export default function TestApi() {

    const [actividad, setActividad] = useState({})

    useEffect(()=> {
        fetch("https://www.boredapi.com/api/activity")
        .then((response)=> response.json())
        .then((res)=> {
             setActividad(res)
        } )
    },[])

    return(
        <div>
           actividad: {actividad.activity} <br/>
           Tipo: {actividad.type} <br/>
           precio: {actividad.price}
        </div>
    )
}