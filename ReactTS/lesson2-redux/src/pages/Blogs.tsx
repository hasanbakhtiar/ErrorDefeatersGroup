import React from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import SingleCard from '../components/SingleCard'

interface propType{
  pvalue:any
}

const Blogs:React.FC<propType> = props => {
  return (
    <Row className='g-5 mt-5'>
      {props.pvalue.map((item:any, i:number) => {
        return <SingleCard key={i} ptitle={item.title} pphoto={item.photo} pdesc={item.desc} />
      })}
    </Row>
  )
}

const mapStateToProps = (state:string) => {
  return {
    pvalue: state
  }
}

export default connect(mapStateToProps)(Blogs)