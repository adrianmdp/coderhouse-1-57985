import { useState } from "react";
import InhabitantsContainer from "../components/containers/InhabitantsContainer";
import inhabitants from "../data/inhabitants";
import { Container } from "react-bootstrap";

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
      style: {
        img: {
          width: "100%",
          height: 263,
          objectFit: "cover",
        },
      },
    };
  });

  return (
    <Container>
      <h1>Home</h1>

      <ul>
        {selectedItems.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>;
        })}
      </ul>

      <InhabitantsContainer items={inhabitantsWithOnClick} />
    </Container>
  );
};

export default Home;
