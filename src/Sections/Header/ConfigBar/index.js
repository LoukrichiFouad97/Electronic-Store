import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./style.scss";

function ConfigBar() {
  return (
    <div className="bg-dark text-white configbar">
      <div className="container">
        <Nav as="ul" className="configbar-nav ">
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/about" className="configbar-item">
                About US
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#" className="configbar-item">
              My Account
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#" className="configbar-item">
              Featured Product
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#">
              <Link to="/wishlist" className="configbar-item">
                Wishlist
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="configbar-options">
          <Link to="/OrderTracking" className="tracking-order-link">
            Order Tracking
          </Link>
          <Dropdown>
            <Dropdown.Toggle size="sm" id="dropdown-basic" variant="dark">
              EN
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">AR</Dropdown.Item>
              <Dropdown.Item href="#">FR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle size="sm" id="dropdown-basic" variant="dark">
              USD
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">EUR</Dropdown.Item>
              <Dropdown.Item href="#">DZD</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default ConfigBar;
