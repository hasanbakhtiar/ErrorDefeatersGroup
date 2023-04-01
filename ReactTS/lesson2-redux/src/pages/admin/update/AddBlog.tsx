import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BlogForm from '../../../components/admin/BlogForm';
import {  addBlogToDatabase } from '../../../manager/actions/blogAction';



const AddBlog = (props:any) => {
   
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='my-5 text-center'>Add Blog</h1>
       <BlogForm blogSubmit={(items: any) => {
        props.dispatch(addBlogToDatabase(items));
        navigate('/dashboard');
        window.location.reload();
      } } editblog={null}/>
    </div>
  )
}

export default connect()(AddBlog)