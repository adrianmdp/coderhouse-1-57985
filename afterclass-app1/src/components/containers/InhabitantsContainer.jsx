import { useNavigate } from "react-router-dom";
import InhabitantsGrid from "../common/InhabitantsGrid";
import { useTeam } from "../../contexts/Team";

const InhabitantsContainer = ({ items }) => {
  const navigate = useNavigate();
  const { players, setPlayers } = useTeam();

  return (
    <InhabitantsGrid
      items={items.map((item) => ({
        ...item,
        style: {
          img: {
            width: "100%",
            height: 263,
            objectFit: "cover",
          },
        },
        actions: [
          {
            onClick: () => {
              navigate(`/inhabitants/${item.name}`);
            },
            content: "Abrir",
          },
          {
            onClick: () => setPlayers([...players, item]),
            content: "+",
          },
        ],
      }))}
    />
  );
};

export default InhabitantsContainer;
