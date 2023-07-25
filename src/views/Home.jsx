import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  const handlerClick = (id) => {
    navigate(`/pizza/${id}`);
  };
  return (
    <Container fluid>
      <Header />
      <Container>
        <Row>
          {data.map((pizza) => (
            <Col key={pizza.id}>
              <Card className="m-4 border" style={{ width: "18rem" }}>
                <Card.Img
                  src={pizza.img}
                  style={{ width: "16rem" }}
                  className="mx-auto p-2"
                />
                <Card.Body>
                  <Card.Header>
                    <Card.Title>{pizza.name}</Card.Title>
                  </Card.Header>
                  <div>
                    {pizza.ingredients.map((ingredient) => (
                      <p key={ingredient}>🍕{ingredient}</p>
                    ))}
                  </div>
                  <Button onClick={() => handlerClick(pizza.id)}>
                    Ver más 👀
                  </Button>{" "}
                  <Button className="bg-danger">Añadir 🛒</Button>
                  <Card.Footer className="text-center">
                    ${pizza.price}
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
