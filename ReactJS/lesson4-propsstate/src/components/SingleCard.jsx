import React, { Component } from 'react'

 class SingleCard extends Component {
  render() {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.desc}</p>
                    <a href="/" className={`btn btn-${this.props.color}`}>Read more</a>
                </div>
            </div>
        </div>

    )
  }
}

export default SingleCard