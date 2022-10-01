import React from "react";
import { HiOutlineTicket } from "react-icons/hi";
import { Container } from "react-bootstrap";

import "./style.scss"

function CouponBanner() {
  return (
    <div>
      <Container className="coupon-container">
        <div className="banner-content">
          <h4>Super discount for your first purshase</h4>
          <p>Use discount code in checkout page.</p>
        </div>
        <div className="banner-coupon">
          <HiOutlineTicket className="coupon-icon"/>
          <strong>FREE256MAC</strong>
        </div>
      </Container>
    </div>
  );
}

export default CouponBanner;
