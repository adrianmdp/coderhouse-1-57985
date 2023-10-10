import { useContext } from "react";
import { UserContext } from "../contexts/user";

const useUser = () => {
  const { saludo } = useContext(UserContext);

  // Mucho código

  return { saludo };
};
