import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Button, Card, Form, InputGroup } from 'react-bootstrap';
import products from './data/products'



const App = () => {
  const [data,setData] = useState(products);
  const [value,setValue] = useState('');
  const inputRef = useRef();
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[])

  const filterResult =(comingItem)=>{
      const result = products.filter(fd=>{
        return fd.category === comingItem
      })
      setData(result);
  }
  return (
    <Container>
      <h1 className='text-center animate__animated animate__tada '>Products</h1>

      <Form onSubmit={(e)=>{e.preventDefault();
        setValue(inputRef.current.value)}}>
      <InputGroup className="mb-3 mb-5">
        <Form.Control
          placeholder="Search Products"
          ref={inputRef}
         
        />
        <Button variant="secondary"  type="submit">
          Search
        </Button>
      </InputGroup>
      </Form>


      <Button variant='primary' className='ms-2' onClick={()=>{filterResult("men's clothing")}}>Men</Button>
      <Button variant='primary' className='ms-2' onClick={()=>{filterResult("women's clothing")}}>Woman</Button>
      <Button variant='primary' className='ms-2' onClick={()=>{filterResult("electronics")}}>Electronics</Button>
      <Button variant='primary' className='ms-2' onClick={()=>{filterResult("jewelery")}}>Jewelery</Button>

    

      <Row className='g-5 mt-3'>
      {data.filter(p=>p.title.toLocaleLowerCase().includes(value)).map(item=>{
              return  <Col key={item.id} sm={12} md={4}>
              <Card data-aos={"zoom-in"}>
                <Card.Img height={300} variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title.substring(0,10)}</Card.Title>
                  <Card.Text>
                    {item.description.substring(0,50)}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
        </Col>
            })}
      
      </Row>
    </Container>
  )
}

export default App