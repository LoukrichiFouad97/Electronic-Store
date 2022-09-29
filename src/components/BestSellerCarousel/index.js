import React from "react";
import { Container } from "react-bootstrap";
import ProductSlider from "../ProductSlider";
import "./style.scss";

function BestSellerCarousel() {
  return (
    <div className="best-seller-product-carousel">
      <Container>
        <div className="counter">this is counter</div>
        <ProductSlider />
      </Container>
    </div>
  );
}

export default BestSellerCarousel;
