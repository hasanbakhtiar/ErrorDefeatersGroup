import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface propsType{
  ptitle:string;
  pdesc:string;
  pphoto:string;
}


function SingleCard({ptitle,pdesc,pphoto}:propsType) {
  return (
   <Col sm={12} md={4}>
    <Card>
      <Card.Img variant="top" src={pphoto} />
      <Card.Body>
        <Card.Title>{ptitle}</Card.Title>
        <Card.Text>
         {pdesc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </Col>
  );
}

export default SingleCard;