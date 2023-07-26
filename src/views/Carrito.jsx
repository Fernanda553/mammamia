import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Button } from "react-bootstrap";

export default function Carrito() {
  const { valor } = useContext(DataContext);
  return (
    <>
      <div>
        <h4>Detalles del pedido:</h4>
        <h2>Total: ${valor}</h2>
        <Button>Ir a pagar</Button>
      </div>
    </>
  );
}
