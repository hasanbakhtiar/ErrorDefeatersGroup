import React, { Component } from 'react'
import SingleUser from './SingleUser'

class UserList extends Component {
  render() {
    return (

       <div className='container mt-5'>
        <div className="row">
        {this.props.uservalue.map(item=>{
            return <SingleUser useritems={item} key={item.id}/>
        })}
       
        </div>
       </div>

    )
  }
}

export default UserList