import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DataContext from "../context/DataContext";

function Navigation() {
  const { valor } = useContext(DataContext);

  const isActiveLink = ({ isActive }) => {
    const styleActive = "text-decoration-none me-3";
    return isActive ? `text-white ${styleActive}` : ` text-info ${styleActive}`;
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="text-decoration-none me-3">
              🍕 Pizzería Mamma mía
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink to="/carrito" className={isActiveLink}>
              🛒 ${valor}
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
