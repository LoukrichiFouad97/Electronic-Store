import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import "./style.scss";
import Logo from "../../../assets/logo-no-background.png";

function FooterCategories() {
  return (
    <Row className="footer-categories">
      <Row className="category-head">
        <Col sx="12" sm="6">
          <img src={Logo} alt="" width="170px" />
        </Col>
        <Col className="category-head-icons" sx="12" sm="6">
          <FaFacebook className="category-head-icon" />
          <FaTwitter className="category-head-icon" />
          <FaLinkedin className="category-head-icon" />
          <FaPinterest className="category-head-icon" />
          <FaInstagram className="category-head-icon" />
          <FaYoutube className="category-head-icon" />
        </Col>
      </Row>
      <Row className="category-tags">
        <ul className="category-tags-list">
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              apple
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Apple Watch
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Beats
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Camera
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Game Controller
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              HD
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              HTC
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              HTC one
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              iMac
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Ipad
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Ipad 4 16Gb
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Ipad Mini
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Keyboard
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Lenovo
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              MB
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Mackbook Pro M1
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Mouse
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Samsung
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Samsung Galaxy M11
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Samsung Galaxy M31
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Samsung Galaxy S5 - 64gb
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Samsung Galaxy Tab 4
            </Link>
          </li>
          <li className="category-tag">
            <Link to="" className="category-tag-link">
              Wireless Speaker
            </Link>
          </li>
        </ul>
      </Row>
    </Row>
  );
}

export default FooterCategories;
