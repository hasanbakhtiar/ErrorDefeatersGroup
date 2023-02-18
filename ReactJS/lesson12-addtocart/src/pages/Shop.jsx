import React, { useContext } from 'react'
import { Row } from 'react-bootstrap';
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext'

const Shop = () => {
    const [products,setProduct] = useContext(ProductContext);
  return (
  <>
  <h1 className='text-center my-5'>product</h1>
  <Row className='g-5'>
   
   {products.length === 0 ? <h1>Loading...</h1>:products.map(item=>{
       return <SingleCard 
       key={item.id} 
       id={item.id}
       title={item.title}
       photo={item.image}
       price={item.price}
       alldata={item}
       />
   })}
</Row>
  
  </>
  )
}

export default Shop