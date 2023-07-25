import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand>
            <NavLink className="text-decoration-none" to="/">
              🍕
            </NavLink>
          </Navbar.Brand>

          <Navbar.Collapse>
            <Nav>
              <NavLink to="/" className="text-decoration-none text-white">
                Pizzería Mamma mía
              </NavLink>
              <NavLink to="/carrito" className="text-decoration-none me-auto">
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
