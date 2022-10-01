import { Container, InputGroup, Form, Col, Row } from "react-bootstrap";

import "./style.scss";

function NewsLetter() {
  return (
    <div className="news-letter">
      <Container className="news-letter-container">
        <Row>
          <Col sm="12" md="12" lg="6">
            <div className="news-letter-content">
              <h3>Sign Up For Newsletters</h3>
              <p>
                Get E-Mails about our latest shop and
                <strong> special offers.</strong>
              </p>
            </div>
          </Col>
          <Col sm="12" md="12" lg="6">
            <div className="news-letter-form">
              <InputGroup size="lg">
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
                <InputGroup.Text
                  id="inputGroup-sizing-lg"
                  className="bg-warning news-letter-btn"
                >
                  Sign up
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsLetter;
