const Inhabitant = ({ id, thumbnail, name, onClick, age }) => {
  return (
    <tr key={id}>
      <td>
        <img src={thumbnail} alt={name} height={50} />
      </td>
      <td>{id}</td>
      <td>
        <div onClick={() => onClick({ id, thumbnail, name, onClick, age })}>
          {name}
        </div>
      </td>
      <td>{age}</td>
    </tr>
  );
};

export default Inhabitant;
