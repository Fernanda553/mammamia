import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container fluid>
      <div className="header">
        <div className="p-4">
          <h1>! Pizzería Mamma mía ¡</h1>
          <p>! tenemos las mejores pizzas que podrás encontrar ¡</p>
        </div>
        <img src="/public/p2.png" />
      </div>
    </Container>
  );
}

export default Header;
