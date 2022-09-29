import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";

import "./style.scss";
import productPreview from "../../assets/product-preview.jpg";

function SpecialOffer() {
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
      className="special-offer-product-preview"
      key={index}
    >
      <div className="special-offer-product-wrapper">
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
          <div className="product-meta">
            <p className="text-muted">2-Day Delivery</p>
          </div>
        </div>
      </div>
    </Col>
  ));

  return (
    <Container className="my-5">
      <Row className="special-offer">
        <Col className="special-offer-left" lg="4">
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

        <Col className="special-offer-right" lg="8">
          <Row className="special-offer-products-container">
            {renderProducts}
          </Row>
          <Row className="special-offer-products-container"></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SpecialOffer;
