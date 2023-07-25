import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import { Button, Card } from "react-bootstrap";

export default function Pizza() {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const [pizza, setPizza] = useState();

  const filterPizza = () => {
    const [findPizza] = data.filter((pizza) => pizza.id === id);
    console.log(findPizza);
    setPizza(findPizza);
  };

  useEffect(() => {
    filterPizza();
  }, [id]);

  if (!pizza) return <div>producto no disponible</div>;

  return (
    <>
      <Card className="m-auto border" style={{ width: "25rem" }}>
        <Card.Img
          src={pizza?.img}
          style={{ width: "17rem" }}
          className="mx-auto p-2"
        />
        <Card.Body>
          <Card.Header>
            <Card.Title>{pizza?.name}</Card.Title>
          </Card.Header>
          <Card.Text>{pizza?.desc}</Card.Text>
          <div>
            Ingredientes:
            {pizza?.ingredients.map((ingredient) => (
              <p key={ingredient}>🍕{ingredient}</p>
            ))}
          </div>
          <Button className="bg-danger">Añadir 🛒</Button>
          <Card.Footer className="text-center">${pizza.price}</Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
