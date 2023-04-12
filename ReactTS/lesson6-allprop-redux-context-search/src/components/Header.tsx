import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { ProductContext } from "../context/ProductContext";

function Header() {
  const [product] = useContext(ProductContext);
  const [value, setValue] = useState<string>("");
  return (
    <Navbar bg="dark" className="navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blogs">
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>
          </Nav>

          <div>
            <button
              type="button"
              className="btn btn-primary me-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Search
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Search product
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter product"
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      />
                    </div>
                    <ul className="list-group">
                      {value===""? "":product.filter((p:any)=>p.title.toLocaleLowerCase().includes(value)).map((item:any)=>{
                     
                     return <LinkContainer to={`products/${item.id}`}>
                        <li className="list-group-item">{item.title}</li>
                        </LinkContainer>
                        
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <LinkContainer to="/dashboard">
            <Button variant="warning">Dashboard</Button>
          </LinkContainer>

          {localStorage.getItem("user") === null ? (
              <LinkContainer to="/login">
                <Button variant="warning">Login</Button>
              </LinkContainer>
            ) : (
              <>
                <p className="me-3 text-light">{localStorage.getItem("user")}</p>
                <Button
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.reload(); 
                  }}
                  variant="danger"
                >
                  Log out
                </Button>
              </>
            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
