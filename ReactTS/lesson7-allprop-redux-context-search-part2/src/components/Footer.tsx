import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <Link to="/" onClick={()=>{  window.scrollTo(0, 0);}}>Home</Link>
    </div>
  )
}

export default Footer