import React, { useContext } from "react"
import { ProductContext } from "./context/ProductContext"


const App:React.FC = () => {
  const [product] = useContext(ProductContext);
  return (
  <>
    {product.map((item:any)=>(
      <p>{item.name}</p>
    ))}
  </>
  )
}

export default App