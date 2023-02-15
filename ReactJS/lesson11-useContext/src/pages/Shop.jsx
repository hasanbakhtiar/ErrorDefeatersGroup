import React, { useContext } from 'react'
import { Row } from 'react-bootstrap';
import SingleCard from '../components/SingleCard';
import { MovieContext } from '../context/MovieContext'

const Shop = () => {
    const [movies,setMovies] = useContext(MovieContext);
  return (
  <>
  <h1 className='text-center my-5'>Movies</h1>
  <Row className='g-5'>
   
   {movies.map(item=>{
       return <SingleCard 
       key={item.id} 
       id={item.id}
       title={item.title}
       photo={item.img}
       price={item.price}
       />
   })}
</Row>
  
  </>
  )
}

export default Shop