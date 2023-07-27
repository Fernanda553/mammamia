import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import DataContext from "./context/DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Pizza from "./views/Pizza";
import Navigation from "./components/Navigation";
import NotFound from "./views/NotFound";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("0");
  const [data, setData] = useState([]);

  const endpoint = "/pizzas.json";

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData(endpoint);
  }, []);

  const addCart = (...pizza) => {
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
  };

  const removeFromCart = (pizza) => {
    setCart((prevState) => prevState.filter((item) => item.id !== pizza.id));
  };

  const checkPizzaInCart = (pizza) => {
    return cart.some((item) => item.id === pizza.id);
  };

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          setData,
          cart,
          addCart,
          total,
          setTotal,
          clearCart,
          removeFromCart,
          checkPizzaInCart,
        }}
      >
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/">
              <Route path="" element={<Home />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
