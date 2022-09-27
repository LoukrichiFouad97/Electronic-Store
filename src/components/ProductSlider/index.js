import React from "react";
import Slider from "react-slick";
import "./style.scss";

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slide slide-1">
          <img src="https://via.placeholder.com/250x500/00ff00" />
        </div>
        <div className="slide slide-2">
          <img src="https://via.placeholder.com/250x500/ff2200" />
        </div>
        <div className="slide slide-3">
          <img src="https://via.placeholder.com/250x500/ff2255" />
        </div>
        <div className="slide slide-4">
          <img src="https://via.placeholder.com/250x500/552200" />
        </div>
        <div className="slide slide-5">
          <img src="https://via.placeholder.com/250x500/ff22ff" />
        </div>
        <div className="slide slide-6">
          <img src="https://via.placeholder.com/250x500" />
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
