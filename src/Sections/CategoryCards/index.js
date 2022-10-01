import { Container, Row, Col } from "react-bootstrap";

import CategoryCard from "./CategoryCard";
import "./style.scss";

function CategoryCards() {
  return (
    <div className="category-cards">
      <Container>
        <Row>
          <Col lg="6" xl="4" className="">
            <CategoryCard />
          </Col>
          <Col lg="6" xl="4" className="">
            <CategoryCard />
          </Col>
          <Col lg="12" xl="4" className="">
            <CategoryCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategoryCards;
