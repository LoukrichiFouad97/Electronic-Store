import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./style.scss";
import Logo from "../../../assets/logo-no-background.png";

function SearchBar() {
  function openSidebar() {
    let sidebar = document.querySelector(".sidebar");
    let overlay = document.querySelector(".overlay");
    sidebar.style.marginLeft = "0";
    overlay.style.display = "block";
  }
  function closeSidebar() {
    let sidebar = document.querySelector(".sidebar");
    let overlay = document.querySelector(".overlay");
    sidebar.style.marginLeft = "-15rem";
    overlay.style.display = "none";
  }

  return (
    <div className="searchbar my-3">
      <div className="container">
        <div className="overlay" onClick={closeSidebar}></div>
        <FaBars className="hamburger-menu" onClick={openSidebar} />
        <div className="sidebar">
          <FaTimes onClick={closeSidebar} />
        </div>
        <div className="searchbar-logo">
          <Link to="/">
            <img src={Logo} alt="" width="250px" />
          </Link>
        </div>
        <div className="search-bar">
          <InputGroup size="lg">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
            <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
          </InputGroup>
        </div>
        <div className="shortcuts">
          <div className="shortcut-1">
            <AiOutlineUser className="shortcut-icon" />
            <div className="shortcut-text">
              <span className="text-muted">Sing in</span>
              <strong>Account</strong>
            </div>
          </div>
          <div className="shortcut-2">
            <FiHeart className="shortcut-icon" />
          </div>
          <div className="shortcut-3">
            <AiOutlineShoppingCart className="shortcut-icon" />
            <div className="shortcut-text">
              <span className="text-muted">Total</span>
              <strong>$0.00</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
