import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
<div className="container px-4 py-5" id="featured-3">
  <h2 className="pb-2 border-bottom">Columns with icons</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection" /></svg>
      </div>
      <h3 className="fs-2">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link d-inline-flex align-items-center">
        Call to action
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right" /></svg>
      </a>
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle" /></svg>
      </div>
      <h3 className="fs-2">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link d-inline-flex align-items-center">
        Call to action
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right" /></svg>
      </a>
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2" /></svg>
      </div>
      <h3 className="fs-2">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link d-inline-flex align-items-center">
        Call to action
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right" /></svg>
      </a>
    </div>
  </div>
</div>

    )
  }
}

export default About