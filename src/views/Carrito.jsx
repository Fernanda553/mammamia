import { Button } from "react-bootstrap";

export default function Carrito() {
  return (
    <>
      <div>
        <h4>Detalles del pedido:</h4>
        <ul></ul>
        <h2>Total: ${}</h2>
      </div>
      <Button>Limpiar carrito</Button>
      <Button>Ir a pagar</Button>
    </>
  );
}
