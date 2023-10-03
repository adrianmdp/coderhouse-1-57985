import Inhabitant from "./Inhabitant";
import { Col, Row } from "react-bootstrap";

const InhabitantsGrid = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col md={3}>
          <Inhabitant
            key={item.id}
            id={item.id}
            age={item.age}
            name={item.name}
            onClick={item.onClick}
            thumbnail={item.thumbnail}
            style={item.style}
          />
        </Col>
      ))}
    </Row>
  );
};

export default InhabitantsGrid;
