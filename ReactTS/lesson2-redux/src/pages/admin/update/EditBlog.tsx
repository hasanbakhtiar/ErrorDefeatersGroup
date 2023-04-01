import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../../../components/admin/BlogForm'
import {  editBlogFromDatabase, removeBlogFromDatabase } from '../../../manager/actions/blogAction'


interface propType{
  pvalue:any
}


const EditBlog:React.FC<propType> = (props:any) => {
  const navigate = useNavigate();
  return (
    <div>
        <h1 className='my-5 text-center'>Edit Blog</h1>
        

            <BlogForm editblog={props.pvalue}
            blogSubmit={(items:any)=>{
              props.dispatch(editBlogFromDatabase(props.pvalue.id,items))
              navigate('/dashboard')
            }}
            />
            <div className=" mt-2 d-flex align-items-center justify-content-end">
            <div className="col-9"><Button variant='danger'
            onClick={()=>{props.dispatch(removeBlogFromDatabase(props.pvalue.id))
            navigate('/dashboard')
          }
            }>Delete</Button></div>
            </div>
    </div>
  )
}

const mapStateToProps =(state:any)=>{

  const link = window.location.pathname.slice(16,99 );
  return {
    pvalue: state.find((p:any)=>p.id === link)
  }
}

export default connect(mapStateToProps)(EditBlog)