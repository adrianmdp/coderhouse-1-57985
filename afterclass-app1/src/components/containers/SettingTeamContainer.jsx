import { useState } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { useTeam } from "../../contexts/Team";
import { teamServices } from "../../services/teams";

const SettingTeamContainer = () => {
  const { players, setPlayers } = useTeam();

  const [fields, setFields] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    teamServices.createTeam({ name: fields.name, players }).then(() => {
      setPlayers([]);
      setFields({ name: "" });
    });
  };

  return (
    <Form style={{ position: "sticky", top: 20 }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="team-name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre del equipo"
          required
          value={fields.name}
          onChange={(e) =>
            setFields((state) => ({ ...state, name: e.target.value }))
          }
        />
      </Form.Group>

      <Table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={`player-${index}`}>
              <td>
                <img src={player.thumbnail} height={50} alt={player.name} />
              </td>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>
                <Button
                  onClick={() =>
                    setPlayers(players.filter((elem) => elem.id !== player.id))
                  }
                >
                  -
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button type="submit">Crear equipo</Button>
    </Form>
  );
};

export default SettingTeamContainer;
