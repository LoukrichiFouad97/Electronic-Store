import { Container, Row, Col } from "react-bootstrap";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
} from "react-icons/fa";
import FooterCategories from "./FooterCategories";
import Sitemap from "./Sitemap";
import NewsLetter from "./NewsLetter";

import "./style.scss";

function Footer() {
  return (
    <div className="main-footer">
      <NewsLetter />
      <Container>
        <Sitemap />
        <FooterCategories />
        <Row className="footer">
          <Col className="footer-content" sm="12" lg="6">
            Copyright 2022 © Electro MERN Theme. All right reserved. Powered by
            <strong> DEVFED Theme</strong>
          </Col>
          <Col className="payment-methods" sm="12" lg="6">
            <FaCcVisa className="payment-method" />
            <FaCcStripe className="payment-method" />
            <FaCcPaypal className="payment-method" />
            <FaCcMastercard className="payment-method" />
            <FaCcAmazonPay className="payment-method" />
            <FaCcApplePay className="payment-method" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
