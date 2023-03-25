import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BlogForm from '../../../components/admin/BlogForm';
import {  addBlogToDatabase } from '../../../manager/actions/blogAction';

const AddBlog = props => {
   
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='my-5 text-center'>Add Blog</h1>
       <BlogForm blogSubmit={items=>{props.dispatch(addBlogToDatabase(items))
       navigate('/dashboard')
       window.location.reload();
       }}/>
    </div>
  )
}

export default connect()(AddBlog)