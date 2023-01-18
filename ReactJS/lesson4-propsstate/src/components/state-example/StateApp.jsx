import React, { Component } from 'react'
// import Counter from './Counter'
import BookApp from './BookApp'

class StateApp extends Component {
  render() {
    return (
      <div className='mt-5 container'>
        {/* <Counter /> */}
        <BookApp />
      </div>
    )
  }
}

export default StateApp