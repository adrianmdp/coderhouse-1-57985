import { useState } from "react";
import InhabitantsTableContainer from "../components/containers/InhabitantsTableContainer";
import inhabitants from "../data/inhabitants";

const Home = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const estaFuncionando = (item) => {
    const newArray = [...selectedItems, item];
    setSelectedItems(newArray);
  };

  const inhabitantsWithOnClick = inhabitants.map((inhabitant) => {
    return {
      ...inhabitant,
      onClick: function (id) {
        estaFuncionando(id);
      },
    };
  });

  return (
    <div>
      <h1>Home</h1>

      <ul>
        {selectedItems.map((item) => {
          return <li>{JSON.stringify(item)}</li>;
        })}
      </ul>

      <InhabitantsTableContainer items={inhabitantsWithOnClick} />
    </div>
  );
};

export default Home;
