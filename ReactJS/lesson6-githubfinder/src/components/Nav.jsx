import React, { Component } from 'react'

 class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" target="_blank" rel="noreferrer" href="https://github.com">Github Finder</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
         
        </div>
        </nav>
    )
  }
}

export default Nav