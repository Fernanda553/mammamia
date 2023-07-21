import "bootstrap/dist/css/bootstrap.min.css";

import DataContext from "./context/DataContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Pizza from "./views/Pizza";
import Navigation from "./components/Navigation";

function App() {
  const [data, setData] = useState([]);

  const endpoint = "/pizzas.json";

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData(endpoint);
  }, []);

  const allState = {
    data,
    setData,
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
              <Route path="/pizza:id" element={<Pizza />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
