import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";
import "./style.scss";

function Cart() {
  return (
    <div>
      <Header />
      <Container className="cart-page-container">
        <Row className="cart-page-row my-5 py-5">
          <Col lg="9" className="cart-page-products">
            <div className="free-shipping-offer">
              <div className="free-shipping-notice">
                Add <span>$311.00</span> to cart and get free shipping
              </div>
              <div className="free-shipping-progress">
                <span className="progress-fill"></span>
              </div>
            </div>

            <div className="cart-page-items-table">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col md="7">product</Col>
                    <Col md="1">price</Col>
                    <Col md="2">quantity</Col>
                    <Col md="1">subtotal</Col>
                    <Col md="1"></Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row as="ul">
                    <Col md="1" as="li">
                      <img src="https://via.placeholder.com/50" alt="" />
                    </Col>
                    <Col md="6" as="li">
                      <Link to="/shop">
                        Apple iPhone 11 64GB Yellow Fully Unlocked
                      </Link>
                    </Col>
                    <Col md="1" as="li">
                      $120.00
                    </Col>
                    <Col md="2" as="li">
                      <Form.Control as="select" value={5}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </Form.Control>
                    </Col>
                    <Col md="1" as="li">
                      $120.00
                    </Col>
                    <Col md="1" as="li">
                      <BsFillTrashFill />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row as="ul">
                    <Col md="1" as="li">
                      <img src="https://via.placeholder.com/50" alt="" />
                    </Col>
                    <Col md="6" as="li">
                      <Link to="/shop">
                        Apple iPhone 11 64GB Yellow Fully Unlocked
                      </Link>
                    </Col>
                    <Col md="1" as="li">
                      $120.00
                    </Col>
                    <Col md="2" as="li">
                      <Form.Control as="select" value={5}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </Form.Control>
                    </Col>
                    <Col md="1" as="li">
                      $120.00
                    </Col>
                    <Col md="1" as="li">
                      <BsFillTrashFill />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="cart-page-coupon">
                  <Row>
                    <Col md="8">
                      <InputGroup size="lg">
                        <Form.Control
                          aria-label="Large"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                        <button className="form-button apply-coupon-btn">
                          Apply Coupon
                        </button>
                      </InputGroup>
                    </Col>
                    <Col md="4" className="cart-page-update-cart-btn">
                      <button className="button-primary">update cart</button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="cart-page-total">
            <ListGroup variant="flush" as="ul">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>subtotal</strong>
                  </Col>
                  <Col>$1,423.00</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Shipping</strong>
                  </Col>
                  <Col>new york</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Total</strong>
                  </Col>
                  <Col>
                    <h4>$1,423.00</h4>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <button className="w-100 button-primary cart-total-btn">
                      Checkout
                    </button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Cart;
