import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

export default function Pizza() {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const [pizza, setPizza] = useState();

  useEffect(() => {
    const filterPizza = () => {
      const findPizza = data.filter((p) => p.id === id);
      setPizza(findPizza[0]);
    };
    filterPizza();
  }, [id]);

  return (
    <>
      <div style={{ width: "15rem" }} value={id}>
        <img src={pizza?.img} style={{ width: "14rem" }} />
        <h2>{pizza?.name}</h2>
        {pizza?.ingredients.map((ingredient) => (
          <p key={ingredient}>🍕{ingredient}</p>
        ))}
      </div>
    </>
  );
}
