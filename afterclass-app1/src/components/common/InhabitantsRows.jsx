import Inhabitant from "./Inhabitant";

const InhabitantsRows = ({ items }) => {
  return items.map((item) => {
    return (
      <Inhabitant
        id={item.id}
        age={item.age}
        name={item.name}
        onClick={item.onClick}
        thumbnail={item.thumbnail}
      />
    );
  });
};

export default InhabitantsRows;
