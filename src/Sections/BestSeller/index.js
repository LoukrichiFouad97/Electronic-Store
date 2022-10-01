import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import productPreview from "../../assets/product-preview.jpg";
import specialOfferPrd from "../../assets/special-offer.jpg";
import ProductBudge from "../../Components/ProductBudge";

import "./style.scss";

function BestSeller() {
  let countDownDate = new Date("Oct 5, 2022 15:37:25").getTime();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [countDownExpired, setCountDownExpired] = useState(false);

  let countDown = setInterval(() => {
    let todaysDate = new Date().getTime();
    let distance = countDownDate - todaysDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    if (distance < 0) {
      clearInterval(countDown);
      setCountDownExpired(true);
    }
  }, 1000);

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

  const bsSpecialPrdBudge = {
    top: "1rem",
    left: "1rem",
    backgroundColor: "var(--color-theme-danger)",
    color: "#fff",
  };

  const bsSpecialPrdBudgeLg = {
    ...bsSpecialPrdBudge,
    top: "1.25rem",
    left: "1.25rem",
    padding: "0.3rem 0.75rem",
  };

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
        <div className="product-wrapper-head">
          <ProductBudge content="9%" additionalStyles={bsSpecialPrdBudge} />
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
          <div className="special-offer-product">
            <div className="best-seller-counter">
              <h4>Special Offer</h4>
              <p>Remains until the end of the offer.</p>

              <div className="d-flex count-down">
                {countDownExpired ? (
                  <h4>offer expired</h4>
                ) : (
                  <>
                    <div className="bs count-item ">{days}</div>
                    <span>:</span>
                    <div className="bs count-item ">{hours}</div>
                    <span>:</span>
                    <div className="bs count-item ">{minutes}</div>
                    <span>:</span>
                    <div className="bs count-item ">{seconds}</div>
                  </>
                )}
              </div>
            </div>
            <div className="best-seller-image">
              <ProductBudge
                content="66%"
                additionalStyles={bsSpecialPrdBudgeLg}
              />
              <Link to="/shop">
                <img src={specialOfferPrd} alt="" />
              </Link>
            </div>
            <div className="best-seller-content">
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
              <h3 className="product-title">
                <Link to="/shop" className="product-title-link">
                  Dragon Touch Max10 Tablet Android 10.0 OS
                </Link>
              </h3>
              {/* Product Price */}
              <div className="product-price">
                <span>
                  <ins>$200.00</ins>
                  <del className="text-muted">$300.00</del>
                </span>
              </div>
              {/* Product Meta */}
              <div className="product-meta">
                <p>2-Day Delivery</p>
              </div>

              <div className="product-offer-count">
                <div className="product-progress">
                  <span></span>
                </div>
                <div className="product-offer-count">
                  <div className="available">
                    Available <strong>20</strong>
                  </div>
                  <div className="sold">
                    Sold <strong>32</strong>
                  </div>
                </div>
              </div>
            </div>
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
