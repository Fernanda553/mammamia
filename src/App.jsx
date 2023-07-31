import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataContext from "./context/DataContext";

import Home from "./views/Home";
import Cart from "./views/Cart";
import Pizza from "./views/Pizza";
import Navigation from "./components/Navigation";
import NotFound from "./views/NotFound";
import { usePizza } from "./hooks/usePizza";
import { useCart } from "./hooks/useCart";
import CartContext from "./context/CartContext";

function App() {
  const { data } = usePizza();
  const { total, cart, addCart, clearCart, removeFromCart, checkPizzaInCart } =
    useCart();

  const allState = {
    total,
    cart,
    addCart,
    clearCart,
    removeFromCart,
    checkPizzaInCart,
  };

  return (
    <DataContext.Provider value={{ data }}>
      <CartContext.Provider value={allState}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/">
              <Route path="" element={<Home />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
