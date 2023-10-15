import AddUserForm from "../components/AddUserForm";
import { userServices } from "../services/users";

const AddUser = () => {
  const register = (data) => {
    userServices.addUser(data).then((resp) => console.log(resp));
  };

  return (
    <>
      <h1>Agregar usuario</h1>

      <AddUserForm onSubmit={register} />
    </>
  );
};

export default AddUser;
