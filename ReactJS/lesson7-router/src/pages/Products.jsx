import axios from 'axios';
import React, { Component } from 'react'
import SingleCard from '../components/SingleCard';

class Products extends Component {
    constructor(){
        super();
        this.state={
            productdata:[]
        }
    }
    
    componentDidMount(){
        const fetchApi = async()=>{
            const comingdata = await axios.get('https://fakestoreapi.com/products');
            this.setState({
                productdata:comingdata.data
            })
        }
        fetchApi();
    }
  render() {
    return (
      <div className='row'>
        {this.state.productdata.length === 0 ? <h1>Loading...</h1>:this.state.productdata.map(item=>{
            return <SingleCard photo={item.image} title={item.title}/>
        })}
      </div>
    )
  }
}

export default Products