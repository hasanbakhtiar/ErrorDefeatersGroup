import React, { Component } from 'react'
import SingleCard from './SingleCard'

class CardList extends Component {
  render() {
    return (
      <div className='container my-5'>
        <div className="row">
        <SingleCard title="React JS" desc="very big library" color="danger"/>
        <SingleCard title = "Redux" desc="library" color="success"/>
        <SingleCard title="JavaScript" desc=" vanilla " color="primary"/>
        <SingleCard title="CSS" desc="css is style" color="dark"/>

        </div>
      </div>
    )
  }
}

export default CardList