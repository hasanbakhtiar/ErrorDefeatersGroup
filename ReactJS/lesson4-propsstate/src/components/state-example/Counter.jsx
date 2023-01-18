import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    // this.increment = this.increment.bind(this);
    this.state = {
      count: 0,
    };
  }

  // increment(){
  //     this.setState({
  //         count:this.state.count +1
  //     })
  // }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="mt-5 container">
        <button
          className="btn btn-primary"
          onClick={() => {
            if (this.state.count > 0) {
              this.setState({
                count: this.state.count - 1,
              });
            }
          }}
        >
          -1
        </button>
        <span className="mx-3">{this.state.count}</span>
        <button className="btn btn-primary" onClick={this.increment}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
