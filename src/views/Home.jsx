import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Container fluid>
        <Row style={{ gap: "30px" }}>
          <CardPizza />
        </Row>
      </Container>
    </Container>
  );
}
