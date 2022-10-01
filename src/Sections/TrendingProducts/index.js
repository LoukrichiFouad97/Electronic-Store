import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import productLogo from "../../assets/air3-400x400.jpg";
import "./style.scss";

function TrendingProducts() {
  return (
    <Container className="trending-products">
      <Row className="trending-products-head">
        <Col>
          <h2>Trending Products</h2>
        </Col>
        <Col className="d-flex justify-content-end align-items-end trending-products-head-link">
          <Link className="fw-bold">
            View All
            <HiOutlineArrowNarrowRight className="ms-2" />
          </Link>
        </Col>
      </Row>
      <Row className="trending-products-content">
        <Row className="product-wrapper">
          <Col lg="6" xl="4" className="product-wrapper-col">
            <div className="product-thumbnail">
              <div className="product-badges"></div>
              <Link>
                <img src={productLogo} alt="" width="140px" />
              </Link>
            </div>
            <div className="product-content">
              <h3 className="product-title">
                <Link to="/shop" className="product-title-link">
                  Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                </Link>
              </h3>
              <div className="product-rating">
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiOutlineStar />
                </span>
              </div>
              <div className="product-price">
                <ins>$629.29</ins>
                <del>$699</del>
              </div>
              <div className="product-details">
                <ul>
                  <li class="SpecHighlights-list-label">Screen Size 10.9 in</li>
                  <li>Operating System Apple iOS</li>
                  <li>Product Length 9.74 in</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="6" xl="4" className="product-wrapper-col">
            <div className="product-thumbnail">
              <div className="product-badges"></div>
              <Link>
                <img src={productLogo} alt="" width="140px" />
              </Link>
            </div>
            <div className="product-content">
              <h3 className="product-title">
                <Link to="/shop" className="product-title-link">
                  Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                </Link>
              </h3>
              <div className="product-rating">
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiOutlineStar />
                </span>
              </div>
              <div className="product-price">
                <ins>$629.29</ins>
                <del>$699</del>
              </div>
              <div className="product-details">
                <ul>
                  <li class="SpecHighlights-list-label">Screen Size 10.9 in</li>
                  <li>Operating System Apple iOS</li>
                  <li>Product Length 9.74 in</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="6" xl="4" className="product-wrapper-col">
            <div className="product-thumbnail">
              <div className="product-badges"></div>
              <Link>
                <img src={productLogo} alt="" width="140px" />
              </Link>
            </div>
            <div className="product-content">
              <h3 className="product-title">
                <Link to="/shop" className="product-title-link">
                  Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                </Link>
              </h3>
              <div className="product-rating">
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiOutlineStar />
                </span>
              </div>
              <div className="product-price">
                <ins>$629.29</ins>
                <del>$699</del>
              </div>
              <div className="product-details">
                <ul>
                  <li class="SpecHighlights-list-label">Screen Size 10.9 in</li>
                  <li>Operating System Apple iOS</li>
                  <li>Product Length 9.74 in</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="6" xl="4" className="product-wrapper-col">
            <div className="product-thumbnail">
              <div className="product-badges"></div>
              <Link>
                <img src={productLogo} alt="" width="140px" />
              </Link>
            </div>
            <div className="product-content">
              <h3 className="product-title">
                <Link to="/shop" className="product-title-link">
                  Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                </Link>
              </h3>
              <div className="product-rating">
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiOutlineStar />
                </span>
              </div>
              <div className="product-price">
                <ins>$629.29</ins>
                <del>$699</del>
              </div>
              <div className="product-details">
                <ul>
                  <li class="SpecHighlights-list-label">Screen Size 10.9 in</li>
                  <li>Operating System Apple iOS</li>
                  <li>Product Length 9.74 in</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="6" xl="4" className="product-wrapper-col">
            <div className="product-thumbnail">
              <div className="product-badges"></div>
              <Link>
                <img src={productLogo} alt="" width="140px" />
              </Link>
            </div>
            <div className="product-content">
              <h3 className="product-title">
                <Link to="/shop" className="product-title-link">
                  Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                </Link>
              </h3>
              <div className="product-rating">
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiOutlineStar />
                </span>
              </div>
              <div className="product-price">
                <ins>$629.29</ins>
                <del>$699</del>
              </div>
              <div className="product-details">
                <ul>
                  <li class="SpecHighlights-list-label">Screen Size 10.9 in</li>
                  <li>Operating System Apple iOS</li>
                  <li>Product Length 9.74 in</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="6" xl="4" className="product-wrapper-col">
            <div className="product-thumbnail">
              <div className="product-badges"></div>
              <Link>
                <img src={productLogo} alt="" width="140px" />
              </Link>
            </div>
            <div className="product-content">
              <h3 className="product-title">
                <Link to="/shop" className="product-title-link">
                  Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                </Link>
              </h3>
              <div className="product-rating">
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiFillStar />
                </span>
                <span className="rating-icon">
                  <AiOutlineStar />
                </span>
              </div>
              <div className="product-price">
                <ins>$629.29</ins>
                <del>$699</del>
              </div>
              <div className="product-details">
                <ul>
                  <li class="SpecHighlights-list-label">Screen Size 10.9 in</li>
                  <li>Operating System Apple iOS</li>
                  <li>Product Length 9.74 in</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Row>
    </Container>
  );
}

export default TrendingProducts;
