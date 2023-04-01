import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar bg="dark"className='navbar-dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blogs">
            <Nav.Link >Blogs</Nav.Link>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/dashboard">
              <Button variant='warning'><i className="fa-solid fa-gauge-simple-high"></i></Button>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;