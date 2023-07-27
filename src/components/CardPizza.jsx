import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";

function CardPizza() {
  const { data, cart, setCart } = useContext(DataContext);
  const navigate = useNavigate();

  const addCart = (pizza) => {
    const pizzaInCart = cart.findIndex((item) => item.id === pizza.id);

    if (pizzaInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[pizzaInCart].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...pizza,
        quantity: 1,
      },
    ]);
  };

  const handlerClick = (id) => {
    navigate(`/pizza/${id}`);
  };

  return (
    <>
      {data.map((pizza) => {
        return (
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
                {pizza.ingredients.map((ingredient) => (
                  <Card.Text key={ingredient}>🍕{ingredient}</Card.Text>
                ))}
                <Button onClick={() => handlerClick(pizza.id)}>
                  Ver más 👀
                </Button>{" "}
                <Button
                  className="bg-danger"
                  onClick={() => addCart({ pizza })}
                >
                  Añadir 🛒
                </Button>
                <Card.Footer className="text-center">
                  ${pizza.price}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default CardPizza;
