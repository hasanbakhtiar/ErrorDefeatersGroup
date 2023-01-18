import React, { Component } from 'react'
import SingleCard from './SingleCard'
import product from '../../data/product'

class MapApp extends Component {
  render() {
    return (
      <div className="container">
        <h1 className='text-center'>Product List</h1>
   <div className="row g-5">
   {product.map((fd,i)=>{
        return  <SingleCard key={i} photo={fd.image} title={fd.title} desc={fd.description}/>
       })}
   </div>
      </div>
    )
  }
}

export default MapApp