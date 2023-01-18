import React, { Component } from 'react'

class Dropdown extends Component{
    render(){
        return(
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {this.props.brand}
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">{this.props.modelOne}</a></li>
                <li><a className="dropdown-item" href="/">{this.props.modelTwo}</a></li>
                
            </ul>
            </li>
        )
    }
}



 class Nav extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                <Dropdown brand="Bmw" modelOne="x5" modelTwo="x7"/>
                <Dropdown brand="mercedes" modelOne="s500" modelTwo="s600"/>
                 
              
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>

    )
  }
}

export default Nav