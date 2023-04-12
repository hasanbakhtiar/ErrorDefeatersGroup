import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetails:React.FC = () => {
    const [product] = useContext(ProductContext);
    const {id}=useParams();
    const detailsdata = product.find((p:any)=>p.id.toString() === id);
  return (
    <div>
      <img src={detailsdata.image} alt="" />
      <h1>{detailsdata.title}</h1>
    </div>
  )
}

export default ProductDetails