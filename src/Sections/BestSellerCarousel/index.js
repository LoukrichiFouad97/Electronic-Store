import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import Counter from "../../Components/Counter";
import ProductSlider from "../ProductSlider";
import "./style.scss";

function BestSellerCarousel() {
  return (
    <div className="best-seller-product-carousel mt-5">
      <Container>
        <Row className="best-seller-carousel-head">
          <Col className="best-seller-head-left">
            <h4>Best Sellers</h4>
            <Counter />
            <p className="counter-text text-muted">
              Remains until the end of the offer
            </p>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Link className="fw-bold view-all-link">
              View All
              <HiOutlineArrowNarrowRight className="ms-2" />
            </Link>
          </Col>
        </Row>
        <ProductSlider />
      </Container>
    </div>
  );
}

export default BestSellerCarousel;
