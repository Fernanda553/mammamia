import { useState } from "react";
import { useFetch } from "./useFetch";

export function useCart() {
  const { data: pizzas } = useFetch("/pizzas.json");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("0");

  const addCart = (pizza) => {
    setTotal(+total + pizza.price);

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

  const clearCart = () => {
    setCart([]);
    setTotal("0");
  };

  const removeFromCart = (pizza) => {
    setCart((prevState) => prevState.filter((item) => item.id !== pizza.id));
  };

  const checkPizzaInCart = (pizza) => {
    return cart.some((item) => item.id === pizza.id);
  };

  return {
    pizzas,
    total,
    cart,
    addCart,
    clearCart,
    removeFromCart,
    checkPizzaInCart,
  };
}
