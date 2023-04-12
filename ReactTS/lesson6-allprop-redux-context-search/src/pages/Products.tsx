import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
const Products: React.FC = () => {
    const [product] = useContext(ProductContext);
    const [count,setCount] = useState(20);
  return (
    <div>
      <Container>
        <h1 className="my-5 text-center">Products</h1>
        <Row className="g-5">
            {product.map((item:any)=>{
                return   <Col key={item.id} sm={6} md={3}>
                <Card >
                  <Card.Img variant="top" src={item.image}  height={300}/>
                  <Card.Body>
                    <Card.Title>{item.title.substring(0,count)}<p id={item.id} onClick={()=>{setCount(100)}}>...</p></Card.Title>
                    <Card.Text>
                    {item.price}$
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            })}
       
        </Row>
      </Container>
    </div>
  );
};

export default Products;
