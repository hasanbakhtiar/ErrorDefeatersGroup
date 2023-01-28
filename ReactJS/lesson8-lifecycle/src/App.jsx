import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }


  componentDidMount(){
    console.log('componentDidMount is running...');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate is running...');
    document.querySelector('span').style.backgroundColor='red'
    document.querySelector('span').style.color='white'
  }

  
  render() {
    return (
      <div className="mt-5 container">
        <span>{this.state.count}</span>
        <button
          className="ms-3 btn btn-primary"
          c
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          action
        </button>
      </div>
    );
  }
}

export default App;
