import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sdata from "../../Sdata.js";
import "./style.scss";

function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="main-slider">
      <Slider {...settings} className="slider">
        {Sdata.map((value, index) => {
          return (
            <>
              <div className="slide" key={index}>
                <div className="slide-text">
                  <h6>{value.subtitle}</h6>
                  <h3>
                    {value.title}
                    <strong>{value.titleStrong}</strong>
                  </h3>
                  <p>{value.desc}</p>
                  <button className="btn btn-primary slider-btn">
                    Shop Now
                  </button>
                </div>
                <div className="slide-img">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default MainSlider;
