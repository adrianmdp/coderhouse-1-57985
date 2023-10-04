import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";

const Componente3 = () => {
  const [random, setRandom] = useState(Math.random() * 10);

  const miContext = useContext(UserContext);

  return (
    <div className="comp comp-3">
      Componente 3 {random}
      <br />
      {miContext.saludo}
      <button onClick={() => miContext.setSaludo("Saludo cambiado")}>
        Cambiar saludo
      </button>
      <button
        onClick={() => miContext.setUser({ ...miContext.user, name: "Adrian" })}
      >
        Cambiar nombre
      </button>
    </div>
  );
};

export default Componente3;
