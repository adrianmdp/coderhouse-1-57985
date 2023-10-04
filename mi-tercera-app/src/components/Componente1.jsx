import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";

const Componente1 = () => {
  const { user, saludo } = useContext(UserContext);

  return (
    <div className="comp comp-1">
      Componente 1 -{saludo} <br />
      {user.name}
    </div>
  );
};

export default Componente1;
