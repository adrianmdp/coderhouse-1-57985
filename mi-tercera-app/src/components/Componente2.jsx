import { useContext } from "react";
import Componente3 from "./Componente3";
import { UserContext } from "../contexts/user";

const Componente2 = () => {
  const miContext = useContext(UserContext);

  return (
    <div className="comp comp-2">
      Componente 2 - <Componente3 />
      {miContext.saludo}
    </div>
  );
};

export default Componente2;
