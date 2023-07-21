import "bootstrap/dist/css/bootstrap.min.css";

import DataContext from "./context/DataContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";

function App() {
  const [data, setData] = useState([]);

  const endpoint = "/pizzas.json";

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.photos);
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
      <DataContext value={allState}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path></Route>
          </Routes>
        </BrowserRouter>
      </DataContext>
    </>
  );
}

export default App;
