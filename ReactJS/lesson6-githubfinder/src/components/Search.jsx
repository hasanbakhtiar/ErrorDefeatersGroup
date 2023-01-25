import React, { Component } from 'react'

class Search extends Component {
    constructor(){
        super();
        this.state={
            keyword:"",
        }
    }

    searchForm=e=>{
        e.preventDefault()
 

        this.props.searchData(this.state.keyword)

    }
    
  render() {
    return (
        <>
        <div className="d-flex align-items-center justify-content-center mt-5">
        <form onSubmit={this.searchForm} className='col-6'>
            <div className="input-group mb-3">
            <input onChange={e=>{
                    this.setState({
                        keyword:e.target.value
                    })
            }} type="text" className="form-control" placeholder="Enter username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
            </div>
        </form>
        </div>
        <h1 className='text-center'>{this.state.searchAlert}</h1>
        </>
    )
  }
}

export default Search