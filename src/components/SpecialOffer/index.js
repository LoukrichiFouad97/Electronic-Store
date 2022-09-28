import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.scss"

function SpecialOffer() {
  return (
    <Container className="my-5">
      <h1>SpecialOffer</h1>
      <Row className="special-offer">
        <Col className="special-offer-left" lg="4">left</Col>

        <Col className="special-offer-right" lg="8">
          <Row className="special-offer-products-container">
            <Col className="special-offer-product-preview">1</Col>
            <Col className="special-offer-product-preview">2</Col>
            <Col className="special-offer-product-preview">3</Col>
            <Col className="special-offer-product-preview">4</Col>
          </Row>
          <Row className="special-offer-products-container">
            <Col className="special-offer-product-preview">1</Col>
            <Col className="special-offer-product-preview">2</Col>
            <Col className="special-offer-product-preview">3</Col>
            <Col className="special-offer-product-preview">4</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SpecialOffer;
