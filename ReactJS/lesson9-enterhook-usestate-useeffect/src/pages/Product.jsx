import axios from 'axios'
import {useState,useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard';
const Product = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>setData(res.data))
    },[])
    
    
  return (
    <>
    <h1 className='text-center'>Product List</h1>
       <Container>
            <Row>
            {data.map(item=>(
            <SingleCard />
        ))}
            </Row>
        </Container>
    
    </>
  )
}

export default Product