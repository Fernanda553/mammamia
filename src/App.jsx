import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import DataContext from "./context/DataContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Pizza from "./views/Pizza";
import Navigation from "./components/Navigation";
import NotFound from "./views/NotFound";

function App() {
  const [data, setData] = useState([]);
  const [valor, setValor] = useState("0");

  const endpoint = "/pizzas.json";

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData(endpoint);
  }, []);

  const allState = {
    data,
    setData,
    valor,
    setValor,
  };

  return (
    <>
      <DataContext.Provider value={allState}>
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
