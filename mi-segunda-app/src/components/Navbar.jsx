import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [prueba, setPrueba] = useState(0);

  return (
    <nav>
      <button onClick={() => setPrueba(prueba + 1)}>
        cambiar estado {prueba}
      </button>

      <a href="/dashboard">Dashboard a </a>
      <br />
      <Link to="/dashboard">Dashboard Link</Link>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/detail">Detalle</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
