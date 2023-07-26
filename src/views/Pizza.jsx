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
      <div
        style={{
          backgroundImage: `url("/public/gala.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Card
          className="m-auto"
          border="info"
          style={{
            width: "25rem",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          <Card.Img
            src={pizza?.img}
            style={{ width: "23rem", margin: "auto", paddingTop: "10px" }}
          />
          <Card.Body>
            <Card.Title>{pizza?.name}</Card.Title>
            <Card.Text>{pizza?.desc}</Card.Text>
            <div>
              <h5 className="p-2">Ingredientes:</h5>

              {pizza?.ingredients.map((ingredient) => (
                <p key={ingredient}>🍕{ingredient}</p>
              ))}
            </div>
            <img
              src="/public/ppizza.png"
              alt="Pizza planet"
              style={{ width: "5rem", margin: "1px 25px" }}
            />
            <Button variant="outline-warning">Añadir 🛒</Button>
            <img
              src="/public/ppizza.png"
              alt="Pizza planet"
              style={{ width: "5rem", margin: "1px 25px" }}
            />
            <Card.Footer className="border-success text-info text-center">
              ${pizza.price}
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
