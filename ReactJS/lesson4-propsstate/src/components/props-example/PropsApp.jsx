import React, { Component } from 'react'
import CardList from './CardList'
import Nav from './Nav'

 class PropsApp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CardList />
      </div>
    )
  }
}

export default PropsApp