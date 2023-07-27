import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";

function CardPizza() {
  const { data, valor, setValor } = useContext(DataContext);
  const navigate = useNavigate();

  const handlerClick = (id) => {
    navigate(`/pizza/${id}`);
  };

  return (
    <>
      {data.map((pizza) => (
        <Col key={pizza.id}>
          <Card
            border="warning"
            style={{
              width: "30rem",
              margin: "auto",
              marginTop: "3rem",
              fontWeight: "bolder",
            }}
          >
            <Card.Img src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
                <div>
                  {pizza.ingredients.map((ingredient) => (
                    <p key={ingredient}>🍕{ingredient}</p>
                  ))}
                </div>
              </Card.Text>
              <Button onClick={() => handlerClick(pizza.id)}>Ver más 👀</Button>{" "}
              <Button
                onClick={() => setValor(+valor + pizza.price)}
                className="bg-danger"
              >
                Añadir 🛒
              </Button>
              <Card.Footer className="text-center">${pizza.price}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default CardPizza;
