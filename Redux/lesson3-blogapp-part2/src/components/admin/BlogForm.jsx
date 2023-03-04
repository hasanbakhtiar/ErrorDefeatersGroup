import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const BlogForm = ({blogSubmit}) => {

  const [blogphoto,setBlogphoto] = useState('');
  const [blogtitle,setBlogtitle] = useState('');
  const [blogdesc,setBlogdesc] = useState('');

  const formSubmit =e=>{
    e.preventDefault();
    if (!blogphoto || !blogtitle || !blogdesc) {
        alert('please, fill the gap!')
    }else{
      blogSubmit({
        cphoto:blogphoto,
        ctitle:blogtitle,
        cdesc:blogdesc
      })
    }

  }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
    <div className="col-6">
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Photo</Form.Label>
        <Form.Control type="text" onChange={e=>setBlogphoto(e.target.value)} value={blogphoto} placeholder="Enter photo" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" onChange={e=>setBlogtitle(e.target.value)} value={blogtitle} placeholder="Enter title" />

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" onChange={e=>setBlogdesc(e.target.value)} value={blogdesc} placeholder="Enter description" />

      </Form.Group>

      <Button variant="primary" type="submit">
        Publish
      </Button>
    </Form>
            </div>
        </div>
  )
}

export default BlogForm