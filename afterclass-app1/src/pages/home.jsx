import InhabitantsContainer from "../components/containers/InhabitantsContainer";
import inhabitants from "../data/inhabitants";
import { Col, Container, Row } from "react-bootstrap";
import SettingTeamContainer from "../components/containers/SettingTeamContainer";
import { useEffect } from "react";
import { teamServices } from "../services/teams";

const Home = () => {
  useEffect(() => {
    teamServices.getTeams().then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <h1>Home</h1>

      <Row>
        <Col md={8}>
          <InhabitantsContainer items={inhabitants} />
        </Col>
        <Col md={4}>
          <SettingTeamContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
