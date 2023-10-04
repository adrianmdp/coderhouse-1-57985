import { createContext, useState } from "react";
import inhabitants from "../data/inhabitants";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(inhabitants[43]);

  const [saludo, setSaludo] = useState("Hola mundo");

  return (
    <UserContext.Provider value={{ saludo, setSaludo, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
