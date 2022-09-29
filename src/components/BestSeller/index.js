import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import productPreview from "../../assets/product-preview.jpg";

import "./style.scss";

function BestSeller() {
  const products = [
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
    },
  ];

  const renderProducts = products.map((product, index) => (
    <Col
      xs="12"
      sm="6"
      md="4"
      lg="3"
      className="best-seller-product-preview"
      key={index}
    >
      <div className="best-seller-product-wrapper">
        <div className="product-wrapper-head ">
          <Link to="/shop">
            <img src={product.image} alt="" width="100%" />
          </Link>
        </div>
        <div className="product-wrapper-content">
          <h3 className="product-title">
            <Link to="/shop" className="product-title-link">
              {product.title}
            </Link>
          </h3>
          {/* Product Rating */}
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
          {/* Product Price */}
          <div className="product-price">
            <span>
              <del className="text-muted">{product.oldPrice}</del>
              <ins>{product.newPrice}</ins>
            </span>
            <span>
              <button className="add-to-cart-btn btn ">
                <FaCartPlus />
              </button>
            </span>
          </div>
          {/* Product Meta */}
          <div className="product-meta">
            <p className="text-muted">2-Day Delivery</p>
          </div>
        </div>
      </div>
    </Col>
  ));
  return (
    <Container className="my-5">
      <Row className="best-seller">
        <Col className="best-seller-left" lg="4">
          <div className="special-offer-left-content">
            <h6>best seller</h6>
            <h3>
              Buy The Latest <strong>iPhone XS Pro</strong>
            </h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link to="/shop" className="special-offer-left-btn btn btn-primary">
              Shop Now
            </Link>
          </div>
        </Col>

        <Col className="best-seller-right" lg="8">
          <Row className="best-seller-products-container">{renderProducts}</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BestSeller;
