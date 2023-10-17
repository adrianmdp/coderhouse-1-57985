import { Card, Button } from "react-bootstrap";

const Inhabitant = ({ id, thumbnail, name, age, style, actions }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={thumbnail} style={style.img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ul>
          <li>Id: {id}</li>
          <li>Age: {age}</li>
        </ul>

        {actions.map((action, index) => (
          <Button key={`action-${index}`} onClick={action.onClick}>
            {action.content}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Inhabitant;
