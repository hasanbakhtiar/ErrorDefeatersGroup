import React, { Component } from 'react'

class SingleCard extends Component {
  render() {
    const {name,email,address} = this.props.userdata;
    return (
      <div className='col-12 col-sm-6 col-md-4'>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}</p>
                <p className="card-text">{address.street}</p>
            </div>
            </div>

      </div>
    )
  }
}

export default SingleCard