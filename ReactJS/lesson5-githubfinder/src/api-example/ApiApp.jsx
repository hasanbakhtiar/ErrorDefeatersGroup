import axios from 'axios';
import React, { Component } from 'react'
import SingleCard from './SingleCard';

class ApiApp extends Component {
   
    
    constructor(){
        super();
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>this.setState({users:res.data}))
        .catch(err=>console.log(err))
    }
    
   
  render() {
    return (
            <div className='container'>
                   <div className='row g-5 mt-5'>
        {this.state.users.map(item=>{
            return <SingleCard userdata={item} key={item.id}/>
        })}
      </div>
            </div>
    )
  }
}

export default ApiApp