import InhabitantsRows from "../common/InhabitantsRows";

const InhabitantsTableContainer = ({ items }) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th></th>
          <th>id</th>
          <th>Nombre</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <InhabitantsRows items={items} />
      </tbody>
    </table>
  );
};

export default InhabitantsTableContainer;
