import React, { Component } from 'react'
import theStranger from '../../img/theStranger.jpg'
import theSecret from '../../img/theSecret.jpg'
class BookApp extends Component {
    constructor(){
        super();
        this.state = {
            bookName:"Secret",
            bookAdvicer:"Elmira Khalil",
            bookImg:theSecret
        }
    }


    nextBook=()=>{
        this.setState({
            bookName:"theStranger",
            bookAdvicer:"Just Nazrin",
            bookImg:theStranger
        })
    }
    previousBook=()=>{
        this.setState({
            bookName:"Secret",
            bookAdvicer:"Elmira Khalil",
            bookImg:theSecret
        })
    }
    
    
    
  render() {
    return (
      <div>
            <div className="card" style={{width: '18rem'}}>
            <img src={this.state.bookImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.state.bookName}</h5>
                <p className="card-text">by {this.state.bookAdvicer}</p>
                <button onClick={this.previousBook} className="btn btn-primary me-2">Previous book</button>
                <button onClick={this.nextBook} className="btn btn-primary">Next book</button>
            </div>
            </div>

      </div>
    )
  }
}

export default BookApp