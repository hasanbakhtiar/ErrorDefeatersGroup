import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
    const [products,setProducts] = useContext(ProductContext)
    const { totalItems } = useCart();

  return (
    <Navbar bg="dark" className="navbar-dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Products</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">

            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/shop">
              <Nav.Link>Shop({products.length})</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
       <LinkContainer to='/cart'>
       <Button>Cart({totalItems})</Button>
       </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default Header;
