import { useEffect, useState } from "react";
import { userServices } from "../services/users";

const UserDetail = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    userServices.getUser("4CbFG0dcjDLbGnzctEpb").then((data) => setUser(data));
  }, []);

  return (
    <h1>
      User Detail
      {user && (
        <ul>
          <li>Nombre: {user.name}</li>
        </ul>
      )}
    </h1>
  );
};

export default UserDetail;
