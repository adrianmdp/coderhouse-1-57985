import { createContext, useContext, useEffect, useState } from "react";
import inhabitants from "../data/inhabitants";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(inhabitants[43]);

  const [saludo, setSaludo] = useState("Hola mundo");

  useEffect(() => {}, []);

  // Mucho código

  return (
    <UserContext.Provider value={{ saludo, setSaludo, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
