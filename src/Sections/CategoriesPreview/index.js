import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-5.jpg";

import "./style.scss";

function CategoriesPreview() {
  return (
    <Container>
      <Row>
        <Col lg="6" xl="4" className="">
          <div className="category-preview-card">
            <div className="category-preview-card-image">
              <img src={category2} alt="" width="150px" />
            </div>
            <div className="category-preview-card-content">
              <h3>Headphones</h3>
              <ul>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    Noise Canceling
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    Over air
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    sports &amp; fitness
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    premium headphones
                  </Link>
                </li>
              </ul>
              <Link to="/shop" className="category-preview-card-content-link">
                All Headphones
                <HiOutlineArrowNarrowRight className="category-preview-card-icon" />
              </Link>
            </div>
          </div>
        </Col>
        <Col lg="6" xl="4" className="">
          <div className="category-preview-card">
            <div className="category-preview-card-image">
              <img src={category1} alt="" width="150px" />
            </div>
            <div className="category-preview-card-content">
              <h3>Cell Phones</h3>
              <ul>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    Noise Canceling
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    Over air
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    sports &amp; fitness
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    premium headphones
                  </Link>
                </li>
              </ul>
              <Link to="/shop" className="category-preview-card-content-link">
                All Cell Phones
                <HiOutlineArrowNarrowRight className="category-preview-card-icon" />
              </Link>
            </div>
          </div>
        </Col>
        <Col lg="12" xl="4" className="">
          <div className="category-preview-card">
            <div className="category-preview-card-image">
              <img src={category3} alt="" width="150px" />
            </div>
            <div className="category-preview-card-content">
              <h3>Smart Watcher</h3>
              <ul>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    Noise Canceling
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    Over air
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    sports &amp; fitness
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="category-preview-content-link">
                    premium headphones
                  </Link>
                </li>
              </ul>
              <Link to="/shop" className="category-preview-card-content-link">
                All Smart Watches
                <HiOutlineArrowNarrowRight className="category-preview-card-icon" />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoriesPreview;
