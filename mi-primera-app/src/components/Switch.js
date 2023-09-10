import { useState } from "react";

const Switch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button onClick={handleClick}>{isActive ? "Activar" : "Desactivar"}</button>
  );
};

export default Switch;
