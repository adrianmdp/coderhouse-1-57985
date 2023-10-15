import { useState } from "react";

const AddUserForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
  });

  const handleSumbit = (event) => {
    event.preventDefault();
    onSubmit(fields);
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="form-group">
        <label htmlFor="add-user-name">Name</label>
        <input
          type="text"
          name="name"
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
          id="add-user-name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          name="pass"
          value={fields.password}
          onChange={(e) => setFields({ ...fields, password: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">País</label>
        <input
          type="text"
          name="country"
          value={fields.country}
          onChange={(e) => setFields({ ...fields, country: e.target.value })}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default AddUserForm;
