import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../context/CartContext";

export default function Cart() {
  const { clearCart, total } = useContext(CartContext);
  return (
    <>
      <div>
        <h4>Detalles del pedido:</h4>
        <ul></ul>
        <h2>Total: ${total}</h2>
      </div>
      <Button onClick={clearCart}>Limpiar carrito</Button>
      <Button>Ir a pagar</Button>
    </>
  );
}
