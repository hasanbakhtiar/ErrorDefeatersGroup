import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../../../components/admin/BlogForm'
import { editBlog } from '../../../manager/actions/blogAction'

const EditBlog = (props) => {
  const navigate = useNavigate();
  return (
    <div>
        <h1 className='my-5 text-center'>Edit Blog</h1>
        

            <BlogForm editblog={props.pvalue}
            blogSubmit={items=>{
              props.dispatch(editBlog(props.pvalue.id,items))
              navigate('/dashboard')
            }}
            />
            <div className=" mt-2 d-flex align-items-center justify-content-end">
            <div className="col-9"><Button variant='danger'>Delete</Button></div>
            </div>
    </div>
  )
}

const mapStateToProps =(state)=>{

  const link = window.location.pathname.slice(16,99 );
  return {
    pvalue: state.find(p=>p.id === link)
  }
}

export default connect(mapStateToProps)(EditBlog)