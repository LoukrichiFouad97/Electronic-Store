import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import productPreview from "../../assets/product-preview.jpg";
import "./style.scss";

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    // width: 1400,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const products = [
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
      sliderNumber: 1,
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
      sliderNumber: 2,
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
      sliderNumber: 3,
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
      sliderNumber: 4,
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
      sliderNumber: 5,
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
      sliderNumber: 6,
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
      sliderNumber: 7,
    },
    {
      id: 1,
      image: productPreview,
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      rating: "5",
      oldPrice: "$699",
      newPrice: "$629.29",
      sliderNumber: 8,
    },
  ];

  const renderProducts = products.map((product, index) => (
    <div className={`slide ${product.sliderNumber}`} key={index}>
      <div className="carousel-slider-product-wrapper">
        <div className="carousel-slider-wrapper-head ">
          <Link to="/shop">
            <img src={product.image} alt="" width="60%" />
          </Link>
        </div>
        <div className="carousel-slider-wrapper-content">
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

            <button className="add-to-cart-btn btn ">
              <FaCartPlus className="add-to-cart-icon" />
              Add To Cart
            </button>
          </div>
          {/* Product Meta */}
          <div className="product-meta">
            <p className="text-muted">2-Day Delivery</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="slider">
      <Slider {...settings}>{renderProducts}</Slider>
    </div>
  );
}

export default ProductSlider;
