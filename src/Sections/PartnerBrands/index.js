import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.scss";

import samsungLogo from "../../assets/brand-imgs/samsung.png";
import asusLogo from "../../assets/brand-imgs/asus.png";
import dellLogo from "../../assets/brand-imgs/dell.png";
import oppoLogo from "../../assets/brand-imgs/oppo.png";
import sonyLogo from "../../assets/brand-imgs/sony.png";
import lenovoLogo from "../../assets/brand-imgs/lenovo.png";

function PartnerBrands() {
  return (
    <div className="partner-brands">
      <Container className="partner-brands-container">
        <Row className="partner-brands-row">
          <Col xs="6" sm="4" lg="2" className="partner-brand-col">
            <Link to="/shop" className="partner-brand-logo">
              <img src={samsungLogo} alt="" width="100%" />
            </Link>
          </Col>
          <Col xs="6" sm="4" lg="2" className="partner-brand-col">
            <Link to="/shop" className="partner-brand-logo">
              <img src={asusLogo} alt="" width="100%" />
            </Link>
          </Col>
          <Col xs="6" sm="4" lg="2" className="partner-brand-col">
            <Link to="/shop" className="partner-brand-logo">
              <img src={dellLogo} alt="" width="100%" />
            </Link>
          </Col>
          <Col xs="6" sm="4" lg="2" className="partner-brand-col">
            <Link to="/shop" className="partner-brand-logo">
              <img src={oppoLogo} alt="" width="100%" />
            </Link>
          </Col>
          <Col xs="6" sm="4" lg="2" className="partner-brand-col">
            <Link to="/shop" className="partner-brand-logo">
              <img src={sonyLogo} alt="" width="100%" />
            </Link>
          </Col>
          <Col xs="6" sm="4" lg="2" className="partner-brand-col">
            <Link to="/shop" className="partner-brand-logo">
              <img src={lenovoLogo} alt="" width="100%" />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PartnerBrands;
