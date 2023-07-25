import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink className="text-decoration-none" to="/">
              🍕
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <NavLink to="/" className="text-decoration-none text-white">
                Pizzería Mamma mía
              </NavLink>
              <NavLink to="/carrito" className="text-decoration-none">
                🛒
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
