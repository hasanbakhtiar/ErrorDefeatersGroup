import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';


const SingleCard = ({photo,title,price,id,alldata}) => {
  const { addItem } = useCart();
  return (
    <Col md={4}>
    <Card>
    <Card.Img height={300} variant="top" src={photo}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Price:{price}$
      </Card.Text>
<LinkContainer to={`/shop/${id}`}>
<Button variant="primary">Read more</Button>
</LinkContainer>
<Button variant="warning" className='ms-3' onClick={() => addItem(alldata)}>Add to cart</Button>
    </Card.Body>
  </Card>
    </Col>
  )
}

export default SingleCard