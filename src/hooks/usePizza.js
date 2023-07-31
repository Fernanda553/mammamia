import { useEffect, useState } from "react";

export function usePizza() {
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

  return { data };
}
