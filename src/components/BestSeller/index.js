import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

function BestSeller() {
  return (
    <Container className="my-5">
      <h1>Best seller</h1>
      <Row className="Best-Seller">
        <Col className="Best-Seller-left" lg="4">
          left
        </Col>

        <Col className="Best-Seller-right" lg="8">
          <Row className="Best-Seller-products-container">
            <Col className="Best-Seller-product-preview">1</Col>
            <Col className="Best-Seller-product-preview">2</Col>
            <Col className="Best-Seller-product-preview">3</Col>
            <Col className="Best-Seller-product-preview">4</Col>
          </Row>
          <Row className="Best-Seller-products-container">
            <Col className="Best-Seller-product-preview">1</Col>
            <Col className="Best-Seller-product-preview">2</Col>
            <Col className="Best-Seller-product-preview">3</Col>
            <Col className="Best-Seller-product-preview">4</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BestSeller;
