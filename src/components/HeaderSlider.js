import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import HeaderSliderStyle from "./HeaderSliderStyle.scss";

function HeaderSlider() {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  return (
    <div className="header__slider">
      <Slider {...settings}>
        <div style={{ width: 328 }}>
          <div className="header__slide">
            <img
              className="header__slide-img"
              src={require("../images/headerSlides/img-1.png")}
              alt="People photos"
            />
            <div className="header__slide-box">
              <span className="header__slide-subtitle">1K+ People</span>
              <span className="header__slide-text">
                Successfully Getting Home
              </span>
            </div>
          </div>
        </div>
        <div style={{ width: 201 }}>
          <div className="header__slide">
            <img
              width={56}
              height={56}
              className="header__slide-img"
              src={require("../images/headerSlides/img-2.png")}
              alt="House photo"
            />
            <div className="header__slide-box">
              <span className="header__slide-subtitle">56 Houses</span>
              <span className="header__slide-text">Sold Monthly</span>
            </div>
          </div>
        </div>
        <div style={{ width: 302 }}>
          <div className="header__slide">
            <img
              width={56}
              height={56}
              className="header__slide-img"
              src={require("../images/headerSlides/img-3.png")}
              alt="Photo women"
            />
            <div className="header__slide-box">
              <span className="header__slide-subtitle">4K+</span>
              <span className="header__slide-text">
                People Looking for New Homes
              </span>
            </div>
          </div>
        </div>
        <div style={{ width: 328 }}>
          <div className="header__slide">
            <img
              width={112}
              height={56}
              className="header__slide-img"
              src={require("../images/headerSlides/img-1.png")}
              alt="People photos"
            />
            <div className="header__slide-box">
              <span className="header__slide-subtitle">1K+ People</span>
              <span className="header__slide-text">
                Successfully Getting Home
              </span>
            </div>
          </div>
        </div>
        <div style={{ width: 201 }}>
          <div className="header__slide">
            <img
              width={56}
              height={56}
              className="header__slide-img"
              src={require("../images/headerSlides/img-2.png")}
              alt="House photo"
            />
            <div className="header__slide-box">
              <span className="header__slide-subtitle">56 Houses</span>
              <span className="header__slide-text">Sold Monthly</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeaderSlider;
