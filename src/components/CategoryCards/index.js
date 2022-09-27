import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CategoryCard from "./CategoryCard";

import "./style.scss";

function CategoryCards() {
  return (
    <div className="category-cards">
      <Container>
        <Row>
          <Col md="6" lg="4" className="">
            <CategoryCard />
          </Col>
          <Col md="6" lg="4" className="">
            <CategoryCard />
          </Col>
          <Col md="12" lg="4" className="">
            <CategoryCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategoryCards;
