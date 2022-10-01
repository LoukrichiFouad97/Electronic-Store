import React from "react";
import { Col, Dropdown, Nav, Row, Container } from "react-bootstrap";
import { TbDiscount2 } from "react-icons/tb";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./style.scss";

function Navbar() {
  return (
    <div className="navbar ">
      <Container>
        <Row className="py-1">
          <Col md="2" className="navbar-categories">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md="8" className="navbar-list">
            <Nav as="ul">
              <Nav.Item as="li">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link>
                  <Link to="/shop">Shop</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#">Head Phones</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#">Cell Phones</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link>
                  <Link to="/blog">Blog</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link>
                  <Link to="/contact">Contact</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md="2" className="navbar-discounts">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <BsFillCartCheckFill className="discount-icon" />
                Super Discount
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
