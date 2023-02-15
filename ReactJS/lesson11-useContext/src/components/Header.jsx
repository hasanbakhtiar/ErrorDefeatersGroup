import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { MovieContext } from "../context/MovieContext";

const Header = () => {
    const [movies,setMovies] = useContext(MovieContext)
  return (
    <Navbar bg="dark" className="navbar-dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Movies</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">

            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/shop">
              <Nav.Link>Shop({movies.length})</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
