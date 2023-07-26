import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const { data, valor, setValor } = useContext(DataContext);
  const navigate = useNavigate();

  const handlerClick = (id) => {
    navigate(`/pizza/${id}`);
  };
  return (
    <Container fluid>
      <Header />
      <Container fluid="md">
        <Row>
          {data.map((pizza) => (
            <Col key={pizza.id}>
              <Card
                border="warning"
                style={{
                  width: "30rem",
                  margin: "20px",
                  fontWeight: "bolder",
                }}
              >
                <Card.Img src={pizza.img} />
                <Card.ImgOverlay>
                  <Card.Title>{pizza.name}</Card.Title>
                  <div>
                    {pizza.ingredients.map((ingredient) => (
                      <p key={ingredient}>🍕{ingredient}</p>
                    ))}
                  </div>
                  <Button onClick={() => handlerClick(pizza.id)}>
                    Ver más 👀
                  </Button>{" "}
                  <Button
                    onClick={() => setValor(+valor + pizza.price)}
                    className="bg-danger"
                  >
                    Añadir 🛒
                  </Button>
                  <Card.Footer className="text-center">
                    ${pizza.price}
                  </Card.Footer>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
