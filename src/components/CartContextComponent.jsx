import { useState, useEffect,  createContext} from 'react'
export const cartContext = createContext();

export default function CartContextComponent({children}) {
    const [cart, setCart] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const addToCart = (productData, count) => {
      const cartAux = [...cart]
      let inCart = false

      for (let i = 0; i < cartAux.length; i++) {
         if(cartAux[i].id == productData.id){
          cartAux[i].count = cartAux[i].count + count;
          inCart=true
         }
      }

      if(!inCart){
        cartAux.push({...productData, count});
      }

      setCart(cartAux)
    }

    useEffect(() => {
     setTotalCount(cart.reduce((acc, productData) => acc + productData.count,  0))
     }, [cart]);

  return (
    <cartContext.Provider value={{cart, addToCart, totalCount}}>
    {children}
    </cartContext.Provider>
  )
}
