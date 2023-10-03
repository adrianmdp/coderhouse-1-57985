import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import inhabitants from "../data/inhabitants";

const Detail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const inhabitant = inhabitants.find((i) => i.name === name);

  return (
    <Container>
      <h1>Detail de {name}</h1>

      <Card>
        <Card.Img variant="top" src={inhabitant.thumbnail} />
        <Card.Body>
          <Card.Title>{inhabitant.name}</Card.Title>
          <Card.Text>
            <ul>
              <li>Id: {inhabitant.id}</li>
              <li>Age: {inhabitant.age}</li>
            </ul>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Volver
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Detail;
