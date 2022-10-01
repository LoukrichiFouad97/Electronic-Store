import { Container, Row, Col } from "react-bootstrap";

import "./style.scss";

function SpecialOppertunity() {
  return (
    <Container className="special-oppertunity-container">
      <Row className="special-oppertunity">
        <Col md="12" lg="6" className="special-oppertunity-head">
          <h4>
            shop and <span>save big on hottest</span> products
          </h4>
        </Col>
        <Col md="12" lg="6" className="special-oppertunity-content">
          <div className="special-oppertunity-offer">
            <p>
              <strong>from </strong>
              <span>$79.00</span>
            </p>
            <p>Don't miss this special opportunity today.</p>
          </div>
          <button className="special-oppertunity-btn btn btn-primary">
            Shop Now
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default SpecialOppertunity;
