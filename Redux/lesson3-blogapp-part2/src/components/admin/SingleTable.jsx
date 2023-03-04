import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SingleTable = ({photo,title,desc,id,count}) => {
  return (
    <tr>
    <td>{count+1}</td>
    <td><img src={photo} width={50} alt="" /></td>
    <td>{title}</td>
    <td>{desc}</td>
    
    <td>
      <LinkContainer to={`edit/${id}`}>
      <Button variant="warning">Edit</Button>
    </LinkContainer>
    </td>
  </tr>
  )
}

export default SingleTable