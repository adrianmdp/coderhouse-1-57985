import Inhabitant from "./Inhabitant";
import { Col, Row } from "react-bootstrap";

const InhabitantsGrid = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col md={4} key={`item-${item.id}`}>
          <Inhabitant
            id={item.id}
            age={item.age}
            name={item.name}
            thumbnail={item.thumbnail}
            style={item.style}
            actions={item.actions}
          />
        </Col>
      ))}
    </Row>
  );
};

export default InhabitantsGrid;
