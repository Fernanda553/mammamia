import { useContext } from "react";
import DataContext from "../context/DataContext";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  const { data } = useContext(DataContext);
  return (
    <>
      <Header />
      <NavLink to="/pizza" className="text-decoration-none">
        <div className="d-flex">
          {data.map((pizza) => (
            <div key={pizza.id} style={{ width: "15rem" }}>
              <img src={pizza.img} style={{ width: "14rem" }} />
              <h2>{pizza.name}</h2>
              {pizza.ingredients.map((ingredient) => (
                <li key={ingredient}>🍕{ingredient}</li>
              ))}
            </div>
          ))}
        </div>
      </NavLink>
    </>
  );
}
