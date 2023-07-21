import { useContext } from "react";
import DataContext from "../context/DataContext";

export default function Pizza() {
  const { data } = useContext(DataContext);
  return (
    <>
      <div className="d-flex">
        {data.map((pizza) => (
          <div key={pizza.id} style={{ width: "15rem" }}>
            <img src={pizza.img} style={{ width: "14rem" }} />
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>🍕{ingredient}</li>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
