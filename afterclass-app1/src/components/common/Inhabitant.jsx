import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inhabitant = ({ id, thumbnail, name, onClick, age, style }) => {
  return (
    <Card className="mb-4" onClick={() => onClick(id)}>
      <Card.Img variant="top" src={thumbnail} style={style.img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Id: {id}</li>
            <li>Age: {age}</li>
          </ul>
        </Card.Text>
        <Link to={`/inhabitants/${name}`} className="btn btn-primary">
          Abrir
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Inhabitant;
